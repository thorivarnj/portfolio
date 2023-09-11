<script lang="ts">
	import { i18n } from '$lib/i18n'
	import type { ProjectType } from '$lib/sanity/schemas/projectSchema'
	import { sanityImageLink } from '$lib/utils/SanityImage'

	export let project: ProjectType
</script>

<article
	class="md:max-w-80 aspect-w-100 mx-8 my-8 flex min-w-[270px] max-w-[400px] flex-1 flex-col border-4 border-black bg-xanthous shadow-black drop-shadow-block"
>
	<header class="mx-4 flex items-center justify-between space-x-8">
		<h2 class="balance my-4 font-righteous text-3xl">{project.title}</h2>
		<!-- <p class="min-w-[7ch]">{{id}} / {{noOfItems}}</p> -->
	</header>
	<img
		class="aspect-[16/10] w-full border-y-2 border-black object-cover"
		src={sanityImageLink(project.image)}
		alt=""
	/>
	<p class="mx-4 my-6">{project.description}</p>
	<div class="mx-4 flex items-center justify-between space-x-4 pb-6">
		<a
			href={'projects/' + project.slug.current}
			class="border-2px border-4 border-black bg-emerald px-4 py-2 font-righteous text-lg drop-shadow-block_sm hover:bg-bright_pink"
			>{i18n.projectcard.cta}</a
		>

		{#if project.githubLink}
			<a class="brightness-0 saturate-100 filter" target="_blank" href={project.githubLink}>
				<img class="aspect-w-1 aspect-h-1 h-9" src="/img/github.svg" alt="github icon" />
			</a>
		{/if}
	</div>
</article>
