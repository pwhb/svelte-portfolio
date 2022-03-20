<script>
	import { interestsStore } from '$lib/store';
</script>

<div class="max-w-xl mx-auto my-10">
	<h3 class="text-xl font-medium mb-6">Interests</h3>
	{#each $interestsStore as interest}
		<div>
			<h4 class="font-medium mb-4">{interest.name}</h4>
			<div class="flex flex-row flex-wrap mb-10 gap-2">
				{#each interest.tags as tag}
					<div class="badge badge-primary hover:scale-110">{tag}</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<div class="divider max-w-2xl mx-auto" />
