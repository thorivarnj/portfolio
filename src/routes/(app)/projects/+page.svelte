<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	// @ts-ignore
	import { i18n } from '$lib/i18n.ts'

	export let data
</script>

<svelte:head>
	<title>tinj.io | projects</title>
</svelte:head>

<section class="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8">
	<h1 class="text-5xl">{i18n.projects.title}</h1>
	<p class="mt-4 max-w-[65ch] text-xl">{i18n.projects.description}</p>
</section>
<section class="mx-auto flex max-w-7xl flex-wrap justify-between">
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</section>
