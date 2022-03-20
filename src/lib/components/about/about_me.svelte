<script>
	import { authorStore } from '$lib/store';
	import { marked } from 'marked';
	// export let author;
</script>

<div class="text-center my-4">
	<div class="avatar">
		<div class="w-24 md:w-48 rounded-full">
			<img
				src={// @ts-ignore
				$authorStore.imageSrc}
				alt="avatar"
			/>
		</div>
	</div>
</div>

<div class="max-w-xl mx-auto my-10">
	<h3 class="text-xl font-medium mb-6">About Me</h3>
	{@html marked(
		// @ts-ignore
		$authorStore.bio
	)}
</div>

<div class="divider max-w-2xl mx-auto" />
