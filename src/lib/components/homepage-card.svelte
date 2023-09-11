<script lang="ts">
	import clsx from 'clsx'

	export let title: string, description: string
</script>

<article class={clsx('max-w-[40ch]')}>
	<h2 class={clsx('font-righteous', 'text-2xl')}>{title}</h2>
	<p class={clsx('balance')}>{description}</p>
</article>
