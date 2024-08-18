<script>
	import LongCodeBlock from '../textComps/LongCodeBlock.svelte';
	import ShortCodeBlock from '../textComps/ShortCodeBlock.svelte';
	import GenerationDocComp from './GenerationDocComp.svelte';
</script>

<main class="bg-base-100 mb-12">
	<h1 class="bg-primary mt-12 rounded-t-md font-bold text-4xl pl-2 p-8">
		Generation Functions <small class="font-light text">- functions to make maps</small>
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

	<GenerationDocComp
		titleOfFunction="Generate Blank Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in"
		functionItself="generateBlankMap(width: int, height: int, cellToSetWith: int) -> Array"
		descriptionOfVariables={[
			{variableName: "width", variableDescription: "The width of the map to be generated"},
			{variableName: "height", variableDescription: "The height of the map to be generated"},
			{variableName: "cellToSetWith", variableDescription: "The cell type to set the map with"}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateBlankMap.gif"
		functionAltText="A series of blank maps being generated"
	/>

	<GenerationDocComp
		titleOfFunction="Generate Bordered Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding a standard uniform square border around the 2D Array of a given tile type (in most cases, the wall tile)"
		functionItself="generateBorderedMap(width: int, height: int, border_tile: int, inner_tile: int, border_thickness: int = 1) -> Array"
		descriptionOfVariables={[
			{variableName: "width", variableDescription: "The width of the map to be generated"},
			{variableName: "height", variableDescription: "The height of the map to be generated"},
			{variableName: "border_tile", variableDescription: "The tile type to set the border with"},
			{variableName: "inner_tile", variableDescription: "The tile type to set the inner map with"},
			{variableName: "border_thickness", variableDescription: "The thickness of the border to be set"}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateBorderedMap.gif"
		functionAltText="A series of maps being generated with various wall thicknesses"
	/>


	
</main>
