<script>
	import { socialsStore } from '$lib/store';
	// export let socials;
</script>

<div class="max-w-xl mx-auto my-10">
	<h3 class="text-xl font-medium mb-6">Contact</h3>
	<div class="flex flex-row flex-wrap gap-6">
		{#each $socialsStore as social}
			<a href={social.url} class="flex flex-col w-12 items-center justify-center hover:opacity-70">
				<img src={social.icon} alt={social.name} class="w-8 h-8 mb-1" />
				<p class="text-2xs font-light">
					{social.name}
				</p>
			</a>
		{/each}
	</div>
</div>

<div class="divider max-w-2xl mx-auto" />
