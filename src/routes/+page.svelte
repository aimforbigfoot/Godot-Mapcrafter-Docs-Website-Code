<script>
	import GenerationFunctions from '../lib/comps/docsComps/GenerationFuncPage.svelte';
	import MainFooter from '../lib/comps/genComps/MainFooter.svelte';
	import MainPage from '../lib/comps/docsComps/FrontPageOfGodotDocs.svelte';
	let mouseEnterEmail = $state(false);
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaReddit from 'svelte-icons/fa/FaReddit.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import GiGamepad from 'svelte-icons/gi/GiGamepad.svelte';
	import FaGooglePlay from 'svelte-icons/fa/FaGooglePlay.svelte';
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="text-7xl font-bold p-2 rounded-lg">
				<p>Hello Everyone,</p>
				<p>
					<a
						target="_blank"
						href="https://www.youtube.com/c/NADLABS"
						class="hover:underline font-bold text-blue-900">NAD LABS</a
					> here...
				</p>
			</h1>
			<p class="py-6">
				This is the home of the NAD LABS website, where you'll find documentation for all the
				projects I'm working on, and any future potenital ideas/blogs/or other things I might want
				to share with the world.
			</p>
		</div>
	</div>
</div>

<div class="hero bg-primary min-h-screen">
	<div class="max-w-2xl">
		<h1 class="text-7xl font-bold p-2 rounded-lg">
			<p>Projects!</p>
			<div class="flex pt-4">
				<p class="text-xl my-auto">Godot Mapcrafter</p>
				<a href="/GodotMapcrafterDocs" class="btn btn-primary ml-auto">Docs</a>
			</div>
			<div class="flex">
				<p class="text-xl my-auto">Google Play</p>

				<a
					href="https://play.google.com/store/apps/dev?id=6639364655918639617&hl=en_US"
					target="_blank"
					class="btn btn-primary ml-auto"
				>
					<div class="w-6">
						<FaGooglePlay />
					</div>
				</a>
			</div>
			<div class="flex">
				<p class="text-xl my-auto">Steam</p>
				<a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" class="btn btn-primary ml-auto"
					>Coming Soon 😳</a
				>
			</div>
			<div class="flex">
				<p class="text-xl my-auto">itch.io</p>
				<a href="https://nad-labs.itch.io/" target="_blank" class="btn btn-primary ml-auto"
					><GiGamepad /></a
				>
			</div>
		</h1>
	</div>
</div>

<div class="hero bg-secondary min-h-screen">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="max-w-2xl"
		onmouseenter={() => {
			mouseEnterEmail = true;
		}}
		onmouseleave={() => {
			mouseEnterEmail = false;
		}}
	>
		<div class="text-7xl font-bold p-2 rounded-lg">
			<h1>Contact?</h1>
			<div class="block m-1 p-1">
				<div class="flex">
					<h2 class="text-lg">Electronic mail?</h2>
					<small class="text-xs ml-auto my-auto">(hover to reveal)</small>
				</div>
				{#if mouseEnterEmail}
					<p class="text-sm text-center w-full select-all">realnadlabs AT google mail dot com</p>
					<p class="text-sm text-center w-full">to prevent bots ofc</p>
					<div class="divider"></div>
				{/if}

				<div class="flex">
					<h2 class="text-lg">Social Media?</h2>
				</div>
				<div class="flex">
					<div class="w-6 ml-16 mr-2">
						<FaDiscord />
					</div>
					<div class="badge m-auto">@boimses</div>
				</div>
				<div class="flex">
					<div class="w-6 ml-16 mr-2">
						<FaReddit />
					</div>
					<div class="badge m-auto">u/nad_lab</div>
				</div>
				<div class="flex">
					<div class="w-6 ml-16 mr-2">
						<FaInstagram />
					</div>
					<div class="badge m-auto">@ad.nad.science</div>
				</div>
				<div class="flex">
					<div class="w-12 ml-16 mr-2 text-sm flex">
						<div class="w-6">
							<FaTwitter />
						</div>
						<p class="m-auto">X</p>
					</div>

					<div class="badge m-auto">@boimses</div>
				</div>
			</div>
			<p class="text-sm">I won't gaurenttee to respond but I'll be likely to see it</p>
		</div>
	</div>
</div>
<div class="divider bg-accent p-0 m-0"></div>
<MainFooter />
