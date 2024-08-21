<script>
	import ShortCodeBlock from "../textComps/ShortCodeBlock.svelte";

    let { docCompName, miniDocText } = $props();
</script>


	<h1 class="bg-primary mt-12 rounded-t-md font-bold text-4xl pl-2 p-8">
		{docCompName} <small class="font-light text">- {miniDocText}</small>
	</h1>
	<div class="bg-secondary rounded-b-lg">
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">What do these functions do:</h2>
			<h2 class="text-xl m-auto ml-2">
				These functions help set out a base map given a proper <ShortCodeBlock
					textToShow="HEIGHT"
				/> and <ShortCodeBlock textToShow="WIDTH" /> sometimes optional parameters can be passed in such
				as <ShortCodeBlock textToShow="column_thickness" /> or <ShortCodeBlock
					textToShow="boxWidth"
				/> for various extra functions in base map generation.
			</h2>
		</div>
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">When do you use these functions?</h2>
			<h2 class="text-xl m-auto ml-2">Whenever you start the process of making a map</h2>
		</div>
	</div>