<script>
	import { firebaseConfig } from '$lib/firebase/firebaseConfig.js';
	import { goto } from '$app/navigation';
	import { getAnalytics } from 'firebase/analytics';
	import { logEvent } from 'firebase/analytics';

	import { onMount } from 'svelte';

	onMount(() => {
		const analytics = getAnalytics();
		logEvent(analytics, 'page_view');
	});

	const goToMapCrafter = () => {
		const analytics = getAnalytics();
		logEvent(analytics, 'goes to map crafter');
		goto('/GodotMapcrafterDocs');
	};
</script>

<div class="navbar bg-accent">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">NAD LABS</a>
	</div>
	<div class="flex-none rounded-lg">
		<ul class="menu menu-horizontal px-1 rounded-lg">
			<li><a onclick={goToMapCrafter} href="/GodotMapcrafterDocs">Godot Mapcrafter Docs</a></li>
			<!-- <li>
				<details class="shadow-lg rounded-lg">
					<summary>Extra</summary>
					<ul class="bg-base-100 rounded-t-none p-2">
						<li><a href="/?about">About</a></li>
						<li><a href="/?contact">Contact</a></li>
					</ul>
				</details>
			</li> -->
		</ul>
	</div>
</div>
