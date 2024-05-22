<script lang="ts">
	export let links: string[] = []
	export let toggle: any
	export let currentPage: string

	const checkCurrentPage = (link: string) => {
		const currentLinkStyle = ' underline underline-offset-4 text-bright_pink '

		if (currentPage === '/' && link === 'home') {
			return currentLinkStyle
		}

		if (currentPage.slice(1) == link) {
			return currentLinkStyle
		}
	}
</script>

{#each links as link}
	<a
		data-sveltekit-reload
		on:click={toggle}
		href={link === 'home' ? '/' : '/' + link}
		class={'block rounded-md px-3 py-2 text-base font-medium text-onyx hover:bg-onyx hover:text-af_white' +
			checkCurrentPage(link)}>{link}</a
	>
{/each}
