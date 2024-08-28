<script>
	import nadlabsimage from '$lib/images/nadlabstransback.png';
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
			<a href="https://www.youtube.com/c/NADLABS" target="_blank">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					></path>
				</svg>
			</a>
		</div>
	</nav>
</footer>
