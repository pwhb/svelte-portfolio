<script>
	// @ts-nocheck

	import { socialsStore, authorStore } from '$lib/store';

	const footerSocials = ['Linkedin', 'Phone', 'Email', 'Telegram'];
	const socials = $socialsStore.filter((val) => footerSocials.includes(val.name));
	const year = new Date().getFullYear();
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content">
	<div>
		<a href="/" class="hover:font-medium hover:text-secondary">
			{$authorStore.name}
		</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			{#each socials as social}
				<a href={social.url}>
					<img
						src={social.icon}
						alt={social.name}
						class="w-10 h-10 fill-current rounded-full shadow-lg p-1 hover:scale-125"
					/>
				</a>
			{/each}
		</div>
	</div>
	<div>
		<p>Copyright © {year}</p>
	</div>
</footer>
