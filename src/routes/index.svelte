<script context="module">
	import ProjectCard from '$lib/components/project_card.svelte';
	import { gql } from 'graphql-request';
	import { client } from '$lib/gql-client';
	export const load = async () => {
		const query = gql`
			query GetProjects {
				projects {
					name
					slug
					description
					demo
					sourceCode
					image {
						url
					}
				}
			}
		`;
		const { projects } = await client.request(query);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
</script>

<h1>Recent Projects</h1>

<div>
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
