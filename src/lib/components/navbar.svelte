<script>
// @ts-nocheck

	import ToggleTheme from './toggle_theme.svelte';
	import { authorStore } from '$lib/store';
</script>

<div class="navbar bg-base-100 dwshadow-xl rounded-box p-3 md:max-w-7xl mx-auto">
	<div class="dropdown md:mr-3">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label tabindex="0" class="btn btn-ghost btn-circle">
			<img src="/code.svg" class="h-8 md:h-10" alt="code" />
		</label>
		<ul
			tabindex="0"
			class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/work">Work</a></li>
			<li><a href="/projects">Projects</a></li>
		</ul>
	</div>

	<!-- <div class="flex-none"> -->
	<!-- </div> -->
	<div class="flex-1">
		<a href="/">
			<div class="flex flex-col">
				<h1 class="font-medium text-base md:text-xl">{$authorStore.name}</h1>
				<h2 class="font-light text-sm md:text-base">{$authorStore.jobTitle}</h2>
			</div>
		</a>
	</div>
	<div class="flex-none">
		<ToggleTheme />
	</div>
</div>
