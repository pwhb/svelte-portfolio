<script>
	import { dateDiff, markedUL, parseDate } from '$lib/utils';
	import Carousel from './carousel.svelte';

	export let project = {
		description: '',
		end: '',
		icon: '',
		images: [],
		name: '',
		slug: '',
		start: '',
		teches: [],
		platforms: [],
		gitRepo: '',
		demoUrl: '',
		mockup: ''
	};
</script>

<div class="card shadow-xl py-4 md:px-8 mb-6">
	<div class="flex flex-row items-center gap-5">
		<div class="avatar">
			<div class="w-24 mask mask-squircle shadow-md">
				<img src={project.icon} alt={project.name} class="bg-purple-50 object-contain" />
			</div>
		</div>
		<div>
			<p class="text-xl font-medium mb-1">{project.name}</p>
			<p class="text-xs text-gray-500">
				{parseDate(project.start)} - {parseDate(project.end)}

				({dateDiff(project.start, project.end)})
			</p>
		</div>
	</div>
	{#if project.images[0]}
		<Carousel images={project.images} name={project.name} mockup={project.mockup} />
	{/if}
	<div class="text-center mb-4">
		<p class="text-sm font-medium">Source Code</p>
		<a href={project.gitRepo} target="_blank">
			<img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" class="mx-auto w-10 my-2" />
		</a>
		<p class="text-sm font-medium">Demo URL</p>
		{#if project.demoUrl}
			<a href={project.demoUrl} target="_blank" class="text-blue-400">{project.demoUrl}</a>
		{:else}
			<p class="text-sm">TBA</p>
		{/if}
	</div>
	{#if project.platforms[0]}
		<div>
			<p class="text-xs font-medium">Platform</p>
			<div class="flex flex-row flex-wrap">
				{#each project.platforms as platform}
					<img
						src={platform.icon}
						class="w-6 h-6 md:w-12 md:h-12 white m-3 rounded-full shadow-lg bg-gray-50  dark:bg-opacity-100 md:p-2 hover:scale-110"
						alt={platform.name}
					/>
				{/each}
			</div>
		</div>
	{/if}
	<div>
		<p class="text-xs font-medium">Description</p>
		<div class="text-sm mx-3 my-4 font-light leading-6">
			{@html markedUL(project.description)}
		</div>
	</div>
	{#if project.teches[0]}
		<div>
			<p class="text-xs font-medium">Tech Used</p>
			<div class="flex flex-row flex-wrap mb-10">
				{#each project.teches as tech}
					<a href={tech.url}>
						<img
							src={tech.icon}
							class="w-6 h-6 md:w-12 md:h-12 white m-3 rounded-full shadow-lg bg-gray-50  dark:bg-opacity-100 md:p-2 hover:scale-110"
							alt={tech.name}
						/>
						<div class="text-center">
							<div class="badge badge-sm text-2xs">
								{tech.name}
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>
