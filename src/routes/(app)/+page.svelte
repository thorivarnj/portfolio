<script lang="ts">
	import HomepageCard from '$lib/components/homepage-card.svelte'
	import { i18n } from '$lib/i18n'
	import clsx from 'clsx'

	let cards = i18n.index.cards
</script>

<svelte:head>
	<title>tinj.io | homepage</title>
</svelte:head>

<div
	class={clsx(
		'mx-auto',
		'max-w-7xl',
		'px-6',
		'py-6',
		'md:py-16',
		'lg:px-8',
		'md:my-10',
		'min-h-[80vh]',
		'flex',
		'justify-center',
		'items-center'
	)}
>
	<section class={clsx()}>
		<div class="mb-40 flex flex-col-reverse items-center justify-evenly md:flex-row">
			<section>
				<h1 class={clsx('balance', 'text-5xl', 'max-w-[40ch]')}>{i18n.index.title}</h1>
				<a
					href="/projects"
					class={clsx(
						'inline-block',
						'border-2px',
						'border-4',
						'border-black',
						'bg-emerald',
						'px-4',
						'py-2',
						'font-righteous',
						'text-lg',
						'drop-shadow-block_sm',
						'hover:bg-bright_pink',
						'my-6'
					)}>{i18n.index.button}</a
				>
			</section>

			<img src="/portrett-portfolio.png" alt="" class="my-10 bg-custom_radial" />
		</div>
		<section class={clsx('flex', 'flex-col', 'gap-12', 'my-20', 'md:flex-row', 'justify-between')}>
			{#each cards as card}
				<HomepageCard title={card.title} description={card.text} />
			{/each}
		</section>
	</section>
</div>
