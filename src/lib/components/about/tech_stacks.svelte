<script>
	import { stacksStore } from '$lib/store';
</script>

<div class="max-w-xl mx-auto my-10">
	<h3 class="text-xl font-medium mb-6">Tech Stacks & Languages</h3>
	{#each $stacksStore as stack}
		<div>
			<h4 class="font-medium mb-4">{stack.name}</h4>
			<div class="flex flex-row flex-wrap mb-10">
				{#each stack.teches as tech}
					<a href={tech.url}>
						<img
							src={tech.icon}
							class="w-12 h-12 md:w-20 md:h-20 white m-3 rounded-full shadow-lg bg-gray-50 dark:bg-gray-200 dark:bg-opacity-30 p-2 hover:scale-110"
							alt={tech.name}
						/>
						<div class="text-center">
							<div class="badge badge-sm">
								{tech.name}
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
		<div class="divider max-w-md mx-auto" />
	{/each}
</div>
<div class="divider max-w-2xl mx-auto" />
