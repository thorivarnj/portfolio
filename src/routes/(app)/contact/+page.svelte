<script>
	import { i18n } from '$lib/i18n'
	import clsx from 'clsx'
	import SocialMedia from '$lib/components/SocialMedia.svelte'
</script>

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
	<section class={clsx('flex', 'flex-col', 'w-full')}>
		<div class="mb-10 flex">
			<div class="max-w-[60ch] self-center">
				<h1 class={clsx('balance', 'text-5xl', 'max-w-[40ch]')}>{i18n.contact.title}</h1>
				<p class="balance my-6 text-xl">{i18n.contact.text}</p>
			</div>
		</div>
		<SocialMedia />
	</section>
</div>
