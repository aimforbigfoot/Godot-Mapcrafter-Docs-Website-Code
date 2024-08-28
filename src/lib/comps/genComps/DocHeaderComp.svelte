<script>
	import ShortCodeBlock from '../textComps/ShortCodeBlock.svelte';

	let { docCompName, miniDocText } = $props();
</script>

<h1 class="bg-primary mt-12 rounded-t-md font-bold text-4xl pl-2 p-8">
	{docCompName} <small class="font-light text">- {miniDocText}</small>
</h1>

{#if docCompName === 'Basic Map Functions'}
	<div class="bg-secondary rounded-b-lg">
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">What do these functions do:</h2>
			<h2 class="text-xl m-auto ml-2">
				These functions help perform basic tasks with checking/saftey and deal with getting information
			</h2>
		</div>
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">When do you use these functions?</h2>
			<h2 class="text-xl m-auto ml-2">Almost all the time</h2>
		</div>
	</div>
{:else if docCompName === 'Map Generation Functions'}
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
{:else if docCompName === 'Map Modification Functions'}
	<div class="bg-secondary rounded-b-lg">
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">What do these functions do:</h2>
			<h2 class="text-xl m-auto ml-2">
				These functions modify the current map, often taking data from the map and applying it back
				to the map in some mathermical or random way
			</h2>
		</div>
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">When do you use these functions?</h2>
			<h2 class="text-xl m-auto ml-2">Up to creative liberty</h2>
		</div>
	</div>
{:else if docCompName === 'Map Mutation Functions'}
	<div class="bg-secondary rounded-b-lg">
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">What do these functions do:</h2>
			<h2 class="text-xl m-auto ml-2">
				These functions apply various transformations or drawing algorithms to an existing map to
				enhance or modify it.
			</h2>
		</div>
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">When do you use these functions?</h2>
			<h2 class="text-xl m-auto ml-2">
				Use these when you need to apply specific transformations to a base map.
			</h2>
		</div>
	</div>
{:else if docCompName === 'Advanced Map Functions'}
	<div class="bg-secondary rounded-b-lg">
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">What do these functions do:</h2>
			<h2 class="text-xl m-auto ml-2">
				These functions provide advanced operations or calculations on the map, such as counting
				tile occurrences or applying smoothing algorithms.
			</h2>
		</div>
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">When do you use these functions?</h2>
			<h2 class="text-xl m-auto ml-2">
				Use these when you need to perform more complex map operations or analysis.
			</h2>
		</div>
	</div>
{:else if docCompName === 'Map Section Functions'}
	<div class="bg-secondary rounded-b-lg">
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">What do these functions do:</h2>
			<h2 class="text-xl m-auto ml-2">
				These functions deal with sections of the map, helping you identify, manipulate, or
				calculate properties related to map sections.
			</h2>
		</div>
		<div class="block p-4">
			<h2 class="text-2xl font-bold m-auto ml-2 mr-2">When do you use these functions?</h2>
			<h2 class="text-xl m-auto ml-2">
				Use these when working with specific sections of the map, such as identifying regions or
				connecting sections.
			</h2>
		</div>
	</div>
{/if}
