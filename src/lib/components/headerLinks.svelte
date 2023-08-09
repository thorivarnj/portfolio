<script lang="ts">
	export let links: string[] = []
	export let toggle: any
</script>

{#each links as link}
	<a
		on:click={toggle}
		href={link === 'home' ? '/' : '/' + link}
		class="block rounded-md px-3 py-2 text-base font-medium text-onyx hover:bg-onyx hover:text-af_white"
		>{link}</a
	>
{/each}
