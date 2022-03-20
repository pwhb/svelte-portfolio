<script context="module">
	export async function load() {
		return {
			props: {}
		};
	}
</script>

<script>
	import Interests from '$lib/components/about/interests.svelte';
	import Socials from '$lib/components/about/socials.svelte';
	import TechStacks from '$lib/components/about/tech_stacks.svelte';
	import AboutMe from '$lib/components/about/about_me.svelte';
</script>

<svelte:head>
	<title>Phone Waiyam Hein - About</title>
</svelte:head>

<div class="px-3">
	<AboutMe />

	<Socials />

	<Interests />

	<TechStacks />
</div>
