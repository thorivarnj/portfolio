<script lang="ts">
	import ExpandedInformation from '$lib/components/expanded-information.svelte'
	import type { ProjectType } from '$lib/sanity/schemas/projectSchema.js'
	import { sanityImageLink } from '$lib/utils/SanityImage'
	import clsx from 'clsx'

	export let data: { project: ProjectType[] }
	const project: ProjectType = data.project[0]
</script>

<div class="relative">
	<img
		class={clsx('w-screen', 'h-40', 'lg:h-96', 'object-cover')}
		src={sanityImageLink(project.image)}
		alt=""
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-af_white to-100%" />
</div>

<div class={clsx('flex', 'justify-center', 'mt-20', 'mx-6')}>
	<article class={clsx('max-w-2xl', '[&>*]:my-12')}>
		<h1 class={clsx('font-righteous', 'text-5xl', 'lg:text-7xl', 'balance')}>{project.title}</h1>
		<p class={clsx('text-xl', 'my-6')}>{project.description}</p>
		<img
			class={clsx(
				'aspect-[16/10]',
				'w-full',
				'border-4',
				'border-black',
				'object-cover',
				'shadow-black',
				'drop-shadow-block',
				'mb-12'
			)}
			src={sanityImageLink(project.image)}
			alt=""
		/>

		{#if project.expandedInfo}
			<ExpandedInformation data={project.expandedInfo} />
		{/if}
	</article>
</div>
