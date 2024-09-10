<script>
	import nadlabsimage from '$lib/images/nadlabstransback.png';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
</script>

<footer class="footer footer-center bg-accent text-accent-content p-32">
	<aside>
		<img src={nadlabsimage} class="w-24" />

		<p class="font-bold">
			NAD LABS
			<br />
			Providing tutorials and games since 2014
		</p>
		<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="https://www.youtube.com/c/NADLABS" class="m-auto" target="_blank">
				<div class="size-16 m-auto">
					<FaYoutube />
				</div>
			</a>
			<a href="https://www.github.com/aimforbigfoot" target="_blank">
				<div class="size-14 m-auto">
					<DiGithubBadge />
				</div>
			</a>
		</div>
	</nav>
</footer>
