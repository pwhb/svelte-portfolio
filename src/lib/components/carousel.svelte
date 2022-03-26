<script>
	export let images = [];
	export let name;
	const end = images.length - 1;
</script>

<!-- <div class="carousel carousel-center max-h-[70vh] p-4 space-x-4 bg-neutral rounded-box">
	<div class="carousel-item">
		{#each images as image, idx}
			<div id={`${name}-${idx}`} class="carousel-item relative w-full">
				<img src={image} class="w-full" alt="alt" /> /
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#${name}-${idx > 0 ? idx - 1 : length - 1}" class="btn btn-circle">❮</a>
					<a href="#${name}-${(idx = length - 1 ? idx + 1 : 1)}" class="btn btn-circle">❯</a>
				</div>
			</div>
		{/each}
	</div>
</div> -->
<div class="mockup-window border bg-slate-300 m-1 md:m-6 shadow-lg">
	<div class="carousel">
		{#each images as image, idx}
			<div id={`${name}-${idx}`} class="carousel-item relative w-full">
				<img src={image} alt="alt" class="" />
				/
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href={`#${name}-${idx > 0 ? idx - 1 : end}`} class="btn btn-circle">❮</a>
					<a href={`#${name}-${idx === end ? 0 : idx + 1}`} class="btn btn-circle">❯</a>
				</div>
			</div>
		{/each}
	</div>
</div>
