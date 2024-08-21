<script>
	import DocHeaderComp from '../genComps/DocHeaderComp.svelte';
	import GenerationDocComp from './GenerationDocComp.svelte';
</script>

<main class="bg-base-100 mb-12">
	<DocHeaderComp docCompName="Map Generation Functions" miniDocText="functions to make 2D Arrays" />
	<GenerationDocComp
		titleOfFunction="Generate Blank Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in"
		functionItself="generateBlankMap(width: int, height: int, cellToSetWith: int) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'cellToSetWith', variableDescription: 'The cell type to set the map with' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateBlankMap.gif"
		functionAltText="A series of blank maps being generated"
	/>

	<GenerationDocComp
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/145fd5ce56556999c99f8ec8ce18be069fef7d12/gifs/generateRandomMap.gif"
		titleOfFunction="Generate Random Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding random tiles"
		functionItself="generateRandomMap(width: int, height: int, tile_type1: int, tile_type2: int, threshold: float) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'tile_type1', variableDescription: 'The tile to set the tile type with' },
			{ variableName: 'tile_type2', variableDescription: 'The tile type to set the tile with' },
			{ variableName: 'threshold', variableDescription: 'The chance of the tile to be set' }
		]}
	/>

	<GenerationDocComp
		titleOfFunction="Generate Bordered Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding a standard uniform square border around the 2D Array of a given tile type (in most cases, the wall tile)"
		functionItself="generateBorderedMap(width: int, height: int, border_tile: int, inner_tile: int, border_thickness: int = 1) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'border_tile', variableDescription: 'The tile type to set the border with' },
			{
				variableName: 'inner_tile',
				variableDescription: 'The tile type to set the inner map with'
			},
			{
				variableName: 'border_thickness',
				variableDescription: 'The thickness of the border to be set'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateBorderedMap.gif"
		functionAltText="A series of maps being generated with various wall thicknesses"
	/>

	<GenerationDocComp
		titleOfFunction="Generate Row Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding rows of different tiles"
		functionItself="generateRowMap(width: int, height: int, tile_type1: int, tile_type2: int, row_thickness: int) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'tile_type1', variableDescription: 'The row to set the tile type with' },
			{ variableName: 'tile_type2', variableDescription: 'The tile type to set the row with' },
			{ variableName: 'row_thickness', variableDescription: 'The thickness of the row to be set' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateRowMap.gif"
	/>

	<GenerationDocComp
		titleOfFunction="Generate Column Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding columns of different tiles"
		functionItself="generateColumnMap(width: int, height: int, tile_type1: int, tile_type2: int, column_thickness: int) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'tile_type1', variableDescription: 'The column to set the tile type with' },
			{ variableName: 'tile_type2', variableDescription: 'The tile type to set the column with' },
			{
				variableName: 'column_thickness',
				variableDescription: 'The thickness of the column to be set'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateColumnMap.gif"
	/>

	<GenerationDocComp
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateDiagonalStripesMap.gif"
		titleOfFunction="Generate Diagonal Stripes Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding diagonal stripes of different tiles"
		functionItself="generateDiagonalStripesMap(width: int, height: int, tile_type1: int, tile_type2: int, stripe_width: int = 1, reverse_direction: bool = false) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'tile_type1', variableDescription: 'The stripe to set the tile type with' },
			{ variableName: 'tile_type2', variableDescription: 'The tile type to set the stripe with' },
			{
				variableName: 'stripe_thickness',
				variableDescription: 'The thickness of the stripe to be set'
			},
			{
				variableName: 'reverse_direction',
				variableDescription: 'The direction of the stripe to be set'
			}
		]}
	/>

	<GenerationDocComp
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateCheckerboardMap.gif"
		titleOfFunction="Generate Checkerboard Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding a checkerboard pattern of different tiles"
		functionItself="generateCheckerboardMap(width: int, height: int, tile_type1: int, tile_type2: int, square_size: int) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'tile_type1', variableDescription: 'The tile to set the tile type with' },
			{ variableName: 'tile_type2', variableDescription: 'The tile type to set the tile with' },
			{
				variableName: 'square_size',
				variableDescription: 'The size of the square to be set'
			}
		]}
	/>

	<GenerationDocComp
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateMapWithBox.gif"
		titleOfFunction="Generate Map With Box"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding a box of different tiles"
		functionItself="generateMapWithBox(width: int, height: int, mapTile: int, boxTile: int, topLeftPosOfBox: Vector2, boxWidth: int, boxHeight: int) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'mapTile', variableDescription: 'The box to set the tile type with' },
			{ variableName: 'boxTile', variableDescription: 'The tile type to set the box with' },
			{
				variableName: 'topLeftPosOfBox',
				variableDescription: 'The top left position of the box to be set'
			},
			{ variableName: 'boxHeight', variableDescription: 'The height of the box to be set' },
			{ variableName: 'boxWidth', variableDescription: 'The width of the box to be set' }
		]}
	/>

	<GenerationDocComp
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/generateCaveMap.gif"
		titleOfFunction="Generate Cave Map"
		functionDescprition="This function generates a 2D array given the HEIGHT and WEIGHT passed in, while adding a cave-like pattern of different tiles"
		functionItself="generateCaveMap(width: int, height: int, wall_tile: int, floor_tile: int, initial_chance: float = 0.45, iterations: int = 4) -> Array"
		descriptionOfVariables={[
			{ variableName: 'width', variableDescription: 'The width of the map to be generated' },
			{ variableName: 'height', variableDescription: 'The height of the map to be generated' },
			{ variableName: 'wall_tile', variableDescription: 'The tile to set the wall with' },
			{ variableName: 'floor_tile', variableDescription: 'The tile type to set the floor with' },
			{
				variableName: 'initial_chance',
				variableDescription: 'The initial chance of the wall to be set'
			},
			{
				variableName: 'iterations',
				variableDescription:
					"The number of iterations of the cellular automoata algorithim (conway's game of life)"
			}
		]}
	/>
</main>
