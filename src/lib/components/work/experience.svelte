<script>
	import { experiencesStore } from '$lib/store';
	import { dateDiff, markedUL, parseDate } from '$lib/utils';
</script>

<div class="max-w-2xl mx-auto my-10">
	<h3 class="text-xl font-medium mb-6">Work</h3>
	{#each $experiencesStore as exp}
		<div class="card shadow-xl py-4 px-8 mb-6">
			<div class="flex flex-row items-center gap-3">
				<div class="avatar">
					<div class="w-24 mask mask-squircle shadow-md">
						<img src={exp.icon} alt={exp.companyName} class="bg-purple-50 object-contain" />
					</div>
				</div>
				<div>
					<p class="text-xl font-medium mb-1">{exp.companyName}</p>
					<p class="text-base mb-1">{exp.position}</p>
					<p class="text-xs text-gray-500">
						{parseDate(exp.start)} - {parseDate(exp.end)}

						({dateDiff(exp.start, exp.end)})
					</p>
				</div>
			</div>
			<div class="text-sm mx-3 my-4 font-light leading-6">
				{@html markedUL(exp.description)}
			</div>
			<div>
				<p class="text-xs font-medium">Worked with</p>
				<div class="flex flex-row flex-wrap mb-10">
					{#each exp.teches as tech}
						<a href={tech.url}>
							<img
								src={tech.icon}
								class="w-6 h-6 md:w-12 md:h-12 white m-3 rounded-full shadow-lg bg-gray-50  dark:bg-opacity-100 md:p-2 hover:scale-110"
								alt={tech.name}
							/>
							<div class="text-center">
								<div class="badge badge-sm text-2xs">
									{tech.name}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
		<!-- <div class="divider max-w-md mx-auto" /> -->
	{/each}
</div>
<div class="divider max-w-2xl mx-auto" />
