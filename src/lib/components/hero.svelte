<script>
	// @ts-nocheck

	import { authorStore } from '$lib/store';
</script>

<div
	class="hero min-h-[40vh] md:min-h-[90vh] my-2"
	style="background-image: url(https://raw.githubusercontent.com/pwhb/public/79d17ff3f9203dd09e557941076ec1ccf4ba4de5/images/undraw_programming_re_kg9v.svg);"
>
	<div class="hero-overlay bg-opacity-70" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-xl">
			<h1 class="mb-5 text-xl md:text-5xl font-bold font-mono">&lt hello friend / &gt</h1>
			<p class="mb-5 text-md md:text-xl">
				{$authorStore.about}
			</p>
			<div class="mt-20">
				<a href="/about" class="btn btn-ghost">About</a>
				<a href="/work" class="btn btn-ghost">Work</a>
				<a href="/projects" class="btn btn-ghost">Projects</a>
			</div>
		</div>
	</div>
</div>
