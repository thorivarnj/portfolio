<script>
	import clsx from 'clsx'

	export let title, description
</script>

<article class={clsx('max-w-[40ch]')}>
	<h2 class={clsx('font-righteous', 'text-2xl')}>{title}</h2>
	<p class={clsx('balance')}>{description}</p>
</article>
