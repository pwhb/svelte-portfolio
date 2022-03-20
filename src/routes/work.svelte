<script context="module">
	export async function load() {
		return {
			props: {}
		};
	}
</script>

<script>
	import Experience from '$lib/components/work/experience.svelte';
	import Volunteer from '$lib/components/work/volunteer.svelte';
</script>

<svelte:head>
	<title>Phone Waiyam Hein - Work</title>
</svelte:head>
<div class="px-3">
	<Experience />
	
	<Volunteer />
</div>
