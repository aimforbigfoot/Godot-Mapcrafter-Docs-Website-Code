<script>
	import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
	const scrollDown = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	};
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Godot Mapcrafter</h1>
			<p class="py-6">Generate a map for your Godot game with ease.</p>
			<button onclick={scrollDown} class="w-24 mx-auto">
				<IoIosArrowDown />
			</button>
		</div>
	</div>
</div>
