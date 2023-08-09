<script lang="ts">
	import type { ProjectType } from '$lib/sanity/schemas/projectSchema'
	import { sanityImageLink } from '$lib/utils/SanityImage'
	import { toPlainText } from '@portabletext/svelte'
	import clsx from 'clsx'
	export let data: ProjectType['expandedInfo']
</script>

{#each data as item}
	{#if item._type == 'expandedText'}
		<p class={clsx('text-xl', 'my-6')}>{toPlainText(item.text)}</p>
	{:else if item._type == 'image'}
		<img
			class={clsx(
				'aspect-[16/10]',
				'w-full',
				'border-4',
				'border-black',
				'object-cover',
				'shadow-black',
				'drop-shadow-block',
				'my-6'
			)}
			src={sanityImageLink(item)}
			alt=""
		/>
	{/if}
{/each}
