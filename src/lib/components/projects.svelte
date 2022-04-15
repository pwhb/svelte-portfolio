<script>
	import { projectsStore } from '$lib/store';

	import ProjectCard from './projectCard.svelte';
</script>

<div class="max-w-6xl mx-auto my-10">
	<h3 class="text-xl font-medium mb-6">Projects</h3>
	{#each $projectsStore as project}
		<ProjectCard {project} />
		<!-- <div class="divider max-w-md mx-auto" /> -->
	{/each}
</div>
<div class="divider max-w-2xl mx-auto" />
