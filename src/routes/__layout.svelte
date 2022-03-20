<script context="module">
	import { client } from '$lib/gql/gql_client';
	import {
		authorsQuery,
		interestsQuery,
		socialsQuery,
		stacksQuery,
		experiencesQuery,
		completeQuery
	} from '$lib/gql/gql_queries';
	export async function load() {
		const variables = { type: 'experienced', id: import.meta.env.AUTHOR_ID };
		// const { authors } = await client.request(authorsQuery);
		// const { stacks } = await client.request(stacksQuery);
		// const { interests } = await client.request(interestsQuery);
		// const { socials } = await client.request(socialsQuery);
		const { author, stacks, interests, socials, experiences, volunteerExperiences, projects } =
			await client.request(completeQuery, variables);
		return {
			props: {
				author,
				stacks,
				interests,
				socials,
				experiences,
				volunteerExperiences,
				projects
			}
		};
	}
</script>

<script>
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import {
		authorStore,
		experiencesStore,
		interestsStore,
		projectsStore,
		socialsStore,
		stacksStore,
		volunteersStore
	} from '$lib/store';
	import Footer from '$lib/components/footer.svelte';
	export let author;
	export let socials;
	export let stacks;
	export let interests;
	export let experiences;
	export let volunteerExperiences;
	export let projects;
	stacksStore.set(stacks);
	interestsStore.set(interests);
	authorStore.set(author);
	socialsStore.set(socials);
	experiencesStore.set(experiences);
	volunteersStore.set(volunteerExperiences);
	projectsStore.set(projects);
	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<svelte:head>
	<link rel="icon" href="https://github.com/pwhb/public/blob/main/images/broccoli.jpg?raw=true" />
</svelte:head>

<Navbar />
<main>
	<slot />
</main>
<Footer />
