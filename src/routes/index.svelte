<script context="module">
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

<h1>Welcome to SvelteKit</h1>
<pre>{JSON.stringify(projects, null, 2)}</pre>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
