<script>
	import DocHeaderComp from '../genComps/DocHeaderComp.svelte';
	import GenerationDocComp from './GenerationDocComp.svelte';
</script>

<main class="bg-base-100 mb-12">
	<DocHeaderComp
		docCompName="Basic Map Functions"
		miniDocText="the bread and butter of 2D Array manipulation"
	/>
	<GenerationDocComp
		titleOfFunction="Set Cell"
		functionDescprition="This function sets a cell's value in the map, ensuring the coordinates are within bounds."
		functionItself="setCell(x:int, y:int, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'x', variableDescription: 'The x-coordinate of the cell to set.' },
			{ variableName: 'y', variableDescription: 'The y-coordinate of the cell to set.' },
			{ variableName: 'cellToSet', variableDescription: 'The value to set the cell to.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/setCell.gif"
		functionAltText="A cell being set on a map."
	/>
	<GenerationDocComp
		titleOfFunction="Get Cell"
		functionDescprition="This function retrieves the value of a cell at a specific coordinate in the map."
		functionItself="getCell(x:int, y:int, map:Array) -> int"
		descriptionOfVariables={[
			{ variableName: 'x', variableDescription: 'The x-coordinate of the cell to retrieve.' },
			{ variableName: 'y', variableDescription: 'The y-coordinate of the cell to retrieve.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getCell.gif"
		functionAltText="Retrieving a cell value from a map."
	/>
	<GenerationDocComp
		titleOfFunction="Get Random Tile Type"
		functionDescprition="This function returns a random tile type from an array of possible tiles."
		functionItself="getRandomTileType(arrOfPossibleTiles:Array) -> int"
		descriptionOfVariables={[
			{
				variableName: 'arrOfPossibleTiles',
				variableDescription: 'An array of possible tile types.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getRandomTileType.gif"
		functionAltText="Selecting a random tile type from a list."
	/>

	<GenerationDocComp
		titleOfFunction="Get Map Height and Width"
		functionDescprition="This function returns the height and width of the map."
		functionItself="getMapHeightAndWidth(map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getMapHeightAndWidth.gif"
		functionAltText="Getting the dimensions of a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get Halfway of Length"
		functionDescprition="This function calculates and returns the halfway point of a given length."
		functionItself="getHalfWayOfLength(width:int) -> int"
		descriptionOfVariables={[
			{
				variableName: 'width',
				variableDescription: 'The length for which to find the halfway point.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getHalfWayOfLength.gif"
		functionAltText="Calculating the halfway point of a given length."
	/>

	<GenerationDocComp
		titleOfFunction="Get a Random Point in Map"
		functionDescprition="This function returns a random point within the map."
		functionItself="getARandomPointInMap(map:Array) -> Vector2i"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getARandomPointInMap.gif"
		functionAltText="Selecting a random point on a map."
	/>
	<GenerationDocComp
		titleOfFunction="Get a Random Tile by Tile Type"
		functionDescprition="This function returns a random tile of a specified type from the map."
		functionItself="getARandomTileByTileType(tileToGet:int, map:Array) -> Vector2"
		descriptionOfVariables={[
			{ variableName: 'tileToGet', variableDescription: 'The tile type to search for in the map.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getARandomTileByTileType.gif"
		functionAltText="Selecting a random tile of a specific type from the map."
	/>
	<GenerationDocComp
		titleOfFunction="Get Array of All Tiles of One Type"
		functionDescprition="This function returns an array of all tiles of a specified type in the map."
		functionItself="getArrayOfAllTilesOfOneType(tileToGet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'tileToGet', variableDescription: 'The tile type to search for in the map.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getArrayOfAllTilesOfOneType.gif"
		functionAltText="Retrieving all tiles of a specific type from the map."
	/>
	<GenerationDocComp
		titleOfFunction="Set Fast Noise Lite Seed"
		functionDescprition="This function sets the seed for the FastNoiseLite generator."
		functionItself="setFastNoiseLiteSeed(_seed:int) -> void"
		descriptionOfVariables={[
			{
				variableName: '_seed',
				variableDescription: 'The seed value to set for the noise generator.'
			}
		]}
	/>

	<GenerationDocComp
		titleOfFunction="Calculate Distance Between Two Points"
		functionDescprition="This function calculates the Euclidean distance between two points."
		functionItself="distance(p1: Vector2, p2: Vector2) -> float"
		descriptionOfVariables={[
			{ variableName: 'p1', variableDescription: 'The first point as a Vector2.' },
			{ variableName: 'p2', variableDescription: 'The second point as a Vector2.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/distance.gif"
		functionAltText="Calculating the distance between two points on a map."
	/>

	<!--  							-->
	<!--  							-->
	<!--  							-->
	<!--  							-->
	<!-- MAP GENERATION FUNCTIONS  	-->
	<!--  							-->
	<!--  							-->
	<!--  							-->
	<!--  							-->
	<!--  							-->
	<!--  							-->
	<!--  							-->

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

	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!-- MAP MOIDIFICATIONS FUNCTIONS  	-->
	<!--	  							-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->

	<div class="divider"></div>
	<DocHeaderComp
		docCompName="Map Modification Functions"
		miniDocText="functions to manipulate 2D Arrays"
	/>

	<GenerationDocComp
		titleOfFunction="Apply Random Cells to Certain Cell Type"
		functionDescprition="This function applies a specified cell type randomly to the map based on a given chance."
		functionItself="applyRandomCellsToCertainCellType(randomChance:float, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'randomChance',
				variableDescription: 'The probability of setting a cell to the specified type.'
			},
			{ variableName: 'cellToSet', variableDescription: 'The cell type to apply to the map.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyRandomCells.gif"
		functionAltText="Random cells being applied to a map."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Radial Symmetry"
		functionDescprition="This function applies radial symmetry to a 2D map, reflecting tiles across both axes."
		functionItself="applyRadialSymmetry(map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyRadialSymmetry.gif"
		functionAltText="A map being modified to have radial symmetry."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Mirror Vertical"
		functionDescprition="This function mirrors the map vertically, reflecting tiles across the vertical axis."
		functionItself="applyMirrorVertical(map: Array, flipFromLeftToRight:bool=true) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' },
			{
				variableName: 'flipFromLeftToRight',
				variableDescription: 'Whether to mirror from left to right or right to left.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyMirrorVertical.gif"
		functionAltText="A map being mirrored vertically."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Mirror Horizontal"
		functionDescprition="This function mirrors the map horizontally, reflecting tiles across the horizontal axis."
		functionItself="applyMirrorHorizontal(map: Array, flipFromTopToBottom: bool=true) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' },
			{
				variableName: 'flipFromTopToBottom',
				variableDescription: 'Whether to mirror from top to bottom or bottom to top.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyMirrorHorizontal.gif"
		functionAltText="A map being mirrored horizontally."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Cellular Noise"
		functionDescprition="This function applies cellular noise to the map to generate organic-looking patterns."
		functionItself="applyCellularNoise(freqVal:float, thresholdValue:float, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'freqVal',
				variableDescription: 'The frequency value for the noise generation.'
			},
			{
				variableName: 'thresholdValue',
				variableDescription: 'The threshold value for determining when to set a cell.'
			},
			{
				variableName: 'cellToSet',
				variableDescription: 'The cell type to apply based on the noise.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyCellularNoise.gif"
		functionAltText="A map being modified using cellular noise."
	/>
	<GenerationDocComp
		titleOfFunction="Apply Fast Perlin Noise"
		functionDescprition="This function applies Perlin noise to the map to generate smooth, natural-looking terrain."
		functionItself="applyFastPerlinNoise(freqVal:float, thresholdValue:float, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'freqVal', variableDescription: 'The frequency value for the Perlin noise.' },
			{
				variableName: 'thresholdValue',
				variableDescription: 'The threshold value for determining when to set a cell.'
			},
			{
				variableName: 'cellToSet',
				variableDescription: 'The cell type to apply based on the noise.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyFastPerlinNoise.gif"
		functionAltText="A map being generated using Perlin noise."
	/>
	<GenerationDocComp
		titleOfFunction="Apply Fast Value Noise"
		functionDescprition="This function applies value noise to the map for creating varied terrain features."
		functionItself="applyFastValueNoise(freqVal:float, thresholdValue:float, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'freqVal', variableDescription: 'The frequency value for the value noise.' },
			{
				variableName: 'thresholdValue',
				variableDescription: 'The threshold value for determining when to set a cell.'
			},
			{
				variableName: 'cellToSet',
				variableDescription: 'The cell type to apply based on the noise.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyFastValueNoise.gif"
		functionAltText="A map being generated using value noise."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Fast Worley Noise"
		functionDescprition="This function applies Worley noise to create cellular-like patterns in the map."
		functionItself="applyFastWorleyNoise(tileToSet: int, noise_scale: float, threshold: float, map:Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'tileToSet',
				variableDescription: 'The cell type to set based on the noise.'
			},
			{ variableName: 'noise_scale', variableDescription: 'The scale of the Worley noise.' },
			{
				variableName: 'threshold',
				variableDescription: 'The threshold value for determining when to set a cell.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyFastWorleyNoise.gif"
		functionAltText="A map being generated using Worley noise."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Cellular Automata"
		functionDescprition="This function applies cellular automata rules, such as Conway's Game of Life, to evolve the map over several generations."
		functionItself="applyCellularAutomata(generations: int, cellToApplyWith:int, cellToBlankWith:int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'generations',
				variableDescription: 'The number of iterations to apply the automata rules.'
			},
			{
				variableName: 'cellToApplyWith',
				variableDescription: 'The cell type to use for alive cells.'
			},
			{
				variableName: 'cellToBlankWith',
				variableDescription: 'The cell type to use for dead cells.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyCellularAutomata.gif"
		functionAltText="A map being evolved using cellular automata."
	/>
	<GenerationDocComp
		titleOfFunction="Apply Erosion"
		functionDescprition="This function simulates erosion by gradually changing certain cells based on their neighbors."
		functionItself="applyErosion(iterations: int, cellToApplyWith:int, cellToGetRidOf:int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'iterations', variableDescription: 'The number of erosion cycles to apply.' },
			{
				variableName: 'cellToApplyWith',
				variableDescription: 'The cell type to apply during erosion.'
			},
			{ variableName: 'cellToGetRidOf', variableDescription: 'The cell type to be eroded away.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applyErosion.gif"
		functionAltText="A map undergoing erosion."
	/>

	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!-- MAP MOIDIFICATIONS FUNCTIONS  	-->
	<!--	  							-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->

	<div class="divider"></div>
	<DocHeaderComp
		docCompName="Map Mutation Functions"
		miniDocText="functions to mutate/draw what is already inside your 2D Array"
	/>
	<GenerationDocComp
		titleOfFunction="Draw Line"
		functionDescprition="This function draws a line between two points on the map with a specified thickness."
		functionItself="drawLine(startPoint:Vector2i, endPoint:Vector2i, lineSize:int, stepsToTake:int, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'startPoint', variableDescription: 'The starting point of the line.' },
			{ variableName: 'endPoint', variableDescription: 'The end point of the line.' },
			{ variableName: 'lineSize', variableDescription: 'The thickness of the line.' },
			{
				variableName: 'stepsToTake',
				variableDescription: 'The number of steps to take when drawing the line.'
			},
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set along the line.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawLine.gif"
		functionAltText="Drawing a line on a map with specified thickness."
	/>
	<GenerationDocComp
		titleOfFunction="Draw Box"
		functionDescprition="This function draws a box at a specified position with a given size."
		functionItself="drawBox(startPoint:Vector2i, size:int, cellToSet:int, map:Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'startPoint', variableDescription: 'The top-left corner of the box.' },
			{ variableName: 'size', variableDescription: 'The size of the box.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set within the box.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawBox.gif"
		functionAltText="Drawing a box on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Border"
		functionDescprition="This function draws a border around the map with a specified thickness."
		functionItself="drawBorder(border_size: int, cellToSet: int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'border_size', variableDescription: 'The thickness of the border.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set for the border.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawBorder.gif"
		functionAltText="Drawing a border around a map."
	/>
	<GenerationDocComp
		titleOfFunction="Draw Random Walk"
		functionDescprition="This function performs a random walk starting from a specified position, with a given thickness."
		functionItself="drawRandomWalk(startPos: Vector2i, steps: int, cellToSet: int, thickness: int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'startPos',
				variableDescription: 'The starting position of the random walk.'
			},
			{ variableName: 'steps', variableDescription: 'The number of steps to take.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set along the walk.' },
			{ variableName: 'thickness', variableDescription: 'The thickness of the walk.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawRandomWalk.gif"
		functionAltText="Performing a random walk on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Circle"
		functionDescprition="This function draws a circle on the map at a specified center with a given radius."
		functionItself="drawCircle(centerOfCircle: Vector2, radius: int, cellToSet: int,map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'centerOfCircle', variableDescription: 'The center of the circle.' },
			{ variableName: 'radius', variableDescription: 'The radius of the circle.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set within the circle.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawCircle.gif"
		functionAltText="Drawing a circle on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Square"
		functionDescprition="This function draws a square on the map at a specified top-left position with a given size."
		functionItself="drawSquare(top_left: Vector2, size: int, cellToSet: int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'top_left', variableDescription: 'The top-left corner of the square.' },
			{ variableName: 'size', variableDescription: 'The size of the square.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set within the square.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawSquare.gif"
		functionAltText="Drawing a square on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Square Every Nth Tiles"
		functionDescprition="This function draws squares on the map at regular intervals, with specified padding and size."
		functionItself="drawSquareEveryNthTiles(square_size: int, every_x_tiles: int, padding: int, cellToSet: int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'square_size', variableDescription: 'The size of the squares to draw.' },
			{
				variableName: 'every_x_tiles',
				variableDescription: 'The interval at which to draw the squares.'
			},
			{ variableName: 'padding', variableDescription: 'The padding to apply around each square.' },
			{
				variableName: 'cellToSet',
				variableDescription: 'The cell type to set within the squares.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawSquareEveryNthTiles.gif"
		functionAltText="Drawing squares at regular intervals on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Corridor"
		functionDescprition="This function creates a corridor between two points with a specified width."
		functionItself="drawCorridor(start: Vector2, end: Vector2, tile_type: int, corridor_size: int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'start', variableDescription: 'The starting point of the corridor.' },
			{ variableName: 'end', variableDescription: 'The end point of the corridor.' },
			{
				variableName: 'tile_type',
				variableDescription: 'The cell type to set within the corridor.'
			},
			{ variableName: 'corridor_size', variableDescription: 'The width of the corridor.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawCorridor.gif"
		functionAltText="Drawing a corridor between two points on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw to Fill in Patches of a Size by Tile Type"
		functionDescprition="This function fills in patches of a specified minimum size with a given tile type."
		functionItself="drawToFillInPatchesOfASizeByTileType(min_size: int, cellToCheck:int, cellToFillWith:int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'min_size', variableDescription: 'The minimum size of patches to fill.' },
			{ variableName: 'cellToCheck', variableDescription: 'The cell type to look for in the map.' },
			{
				variableName: 'cellToFillWith',
				variableDescription: 'The cell type to fill the patches with.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawToFillInPatches.gif"
		functionAltText="Filling in patches of a certain size on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Random Walks Inside Large Sections of a Random Tile Type"
		functionDescprition="This function performs multiple random walks inside large sections of a specific tile type."
		functionItself="drawRandomWalksInsideLargeSectionsOfARandomTileType(timesToPlaceAWalk:int, walkCount:int, tileTypeOfSection:int, tileTypeToPlace:int, map:Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'timesToPlaceAWalk',
				variableDescription: 'The number of random walks to perform.'
			},
			{
				variableName: 'walkCount',
				variableDescription: 'The number of steps each random walk should take.'
			},
			{
				variableName: 'tileTypeOfSection',
				variableDescription: 'The tile type of the section where random walks will occur.'
			},
			{
				variableName: 'tileTypeToPlace',
				variableDescription: 'The cell type to set during the random walks.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawRandomWalks.gif"
		functionAltText="Performing random walks inside large sections on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Crazy Sporadic Walk"
		functionDescprition="This function performs a sporadic walk with random direction changes and thickness, potentially teleporting to a new location."
		functionItself="drawCrazySporadicWalk(startPos: Vector2i, steps: int, cellToSet: int, thickness: int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'startPos',
				variableDescription: 'The starting position of the sporadic walk.'
			},
			{ variableName: 'steps', variableDescription: 'The number of steps to take.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set during the walk.' },
			{ variableName: 'thickness', variableDescription: 'The thickness of the walk.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawCrazySporadicWalk.gif"
		functionAltText="Performing a crazy sporadic walk on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Non-Overlapping Walk"
		functionDescprition="This function performs a non-overlapping walk on the map, ensuring no overlap with previous steps."
		functionItself="drawNonOverlappingWalk(startPos: Vector2i, steps: int, cellToSet: int, square_size: int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'startPos', variableDescription: 'The starting position of the walk.' },
			{ variableName: 'steps', variableDescription: 'The number of steps to take.' },
			{ variableName: 'cellToSet', variableDescription: 'The cell type to set during the walk.' },
			{
				variableName: 'square_size',
				variableDescription: 'The size of the square drawn during each step of the walk.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawNonOverlappingWalk.gif"
		functionAltText="Performing a non-overlapping walk on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Draw Natural Border"
		functionDescprition="This function creates a natural-looking border around the map with varying thickness."
		functionItself="drawNaturalBorder(min_wall_thickness: int, max_wall_thickness: int, wall_tile: int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'min_wall_thickness',
				variableDescription: 'The minimum thickness of the wall.'
			},
			{
				variableName: 'max_wall_thickness',
				variableDescription: 'The maximum thickness of the wall.'
			},
			{ variableName: 'wall_tile', variableDescription: 'The cell type to set for the wall.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/drawNaturalBorder.gif"
		functionAltText="Creating a natural-looking border around a map."
	/>

	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--	 SIMPLE MAP FUNCTIONS	  	-->
	<!--	  							-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->

	<DocHeaderComp
		docCompName="Map Section Functions"
		miniDocText="helps partition map into sections held in linear arrays"
	/>

	<GenerationDocComp
		titleOfFunction="Get Sections"
		functionDescprition="This function returns all contiguous sections in the map, where each section consists of tiles of the same type."
		functionItself="getSections(map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getSections.gif"
		functionAltText="Identifying contiguous sections on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get Sections of a Certain Tile"
		functionDescprition="This function returns all contiguous sections in the map that consist of a specific tile type."
		functionItself="getSectionsOfACertainTile(tile_type: int, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'tile_type', variableDescription: 'The tile type to identify sections for.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getSectionsOfACertainTile.gif"
		functionAltText="Identifying sections of a specific tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get a Random Section"
		functionDescprition="This function returns a random section from a list of sections."
		functionItself="getARandomSection(sections: Array, map: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'sections', variableDescription: 'An array of sections to choose from.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getARandomSection.gif"
		functionAltText="Selecting a random section on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get a Random Section by Tile"
		functionDescprition="This function returns a random section from the map that consists of a specific tile type."
		functionItself="getARandomSectionByTile(cellToGetSelectionOf: int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'cellToGetSelectionOf',
				variableDescription: 'The tile type to identify sections for.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getARandomSectionByTile.gif"
		functionAltText="Selecting a random section of a specific tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get Largest Section of Tile Type"
		functionDescprition="This function returns the largest contiguous section in the map that consists of a specific tile type."
		functionItself="getLargestSectionOfTileType(tile_type: int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'tile_type',
				variableDescription: 'The tile type to identify the largest section for.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getLargestSectionOfTileType.gif"
		functionAltText="Identifying the largest section of a specific tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Find Center Tile Given a Section"
		functionDescprition="This function calculates and returns the center tile of a given section."
		functionItself="findCenterTileGivenASection(section: Array) -> Vector2"
		descriptionOfVariables={[
			{
				variableName: 'section',
				variableDescription: 'The section of tiles to find the center for.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/findCenterTileGivenASection.gif"
		functionAltText="Finding the center tile of a section on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Check and Connect Sections of a Certain Tile"
		functionDescprition="This function checks if all sections of a certain tile type are connected and connects them if they are not."
		functionItself="checkAndConnectIfAllSectionsOfACertainTileAreConnected(tileToCheck: int, mapToCheck: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'tileToCheck',
				variableDescription: 'The tile type to check and connect sections for.'
			},
			{ variableName: 'mapToCheck', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/checkAndConnectIfAllSectionsAreConnected.gif"
		functionAltText="Checking and connecting sections of a specific tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Closest Points Between Sections"
		functionDescprition="This function calculates the closest points between two sections and returns them."
		functionItself="closestPointsBetweenSections(section1: Array, section2: Array) -> Array"
		descriptionOfVariables={[
			{ variableName: 'section1', variableDescription: 'The first section of tiles.' },
			{ variableName: 'section2', variableDescription: 'The second section of tiles.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/closestPointsBetweenSections.gif"
		functionAltText="Finding the closest points between two sections on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Calculate Centroid"
		functionDescprition="This function calculates the centroid (geometric center) of a section of tiles."
		functionItself="calculateCentroid(section: Array) -> Vector2"
		descriptionOfVariables={[
			{
				variableName: 'section',
				variableDescription: 'The section of tiles to calculate the centroid for.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/calculateCentroid.gif"
		functionAltText="Calculating the centroid of a section on a map."
	/>
	<GenerationDocComp
		titleOfFunction="Total Distance"
		functionDescprition="This function calculates the total distance between all pairs of selected points."
		functionItself="totalDistance(selected_points: Array) -> float"
		descriptionOfVariables={[
			{
				variableName: 'selected_points',
				variableDescription: 'An array of selected points to calculate the distance between.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/totalDistance.gif"
		functionAltText="Calculating the total distance between points on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Find Smallest Square"
		functionDescprition="This function finds the smallest square that can enclose a set of points."
		functionItself="findSmallestSquare(points: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'points',
				variableDescription: 'An array of points to find the smallest enclosing square for.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/findSmallestSquare.gif"
		functionAltText="Finding the smallest square enclosing a set of points on a map."
	/>
	<GenerationDocComp
		titleOfFunction="Find Most Distant Points"
		functionDescprition="This function finds the most distant points in a section using Farthest Point Sampling."
		functionItself="findMostDistantPoints(section: Array, numPoints: int) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'section',
				variableDescription: 'The section of tiles to sample points from.'
			},
			{ variableName: 'numPoints', variableDescription: 'The number of distant points to find.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/findMostDistantPoints.gif"
		functionAltText="Finding the most distant points in a section on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Minimum Distance to Wall"
		functionDescprition="This function calculates the minimum distance from a point to any wall in the map."
		functionItself="minDistanceToWall(point: Vector2, walls: Array) -> float"
		descriptionOfVariables={[
			{ variableName: 'point', variableDescription: 'The point to calculate the distance from.' },
			{
				variableName: 'walls',
				variableDescription: 'An array of wall tiles to calculate the distance to.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/minDistanceToWall.gif"
		functionAltText="Calculating the minimum distance from a point to a wall on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Find Most Distant Points with Padding from Wall"
		functionDescprition="This function finds the most distant points in a section, ensuring they are not too close to walls."
		functionItself="findMostDistantPointsWithPaddingFromWall(section: Array, walls: Array, num_points: int, min_dist_from_wall: float) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'section',
				variableDescription: 'The section of tiles to sample points from.'
			},
			{
				variableName: 'walls',
				variableDescription: 'An array of wall tiles to maintain distance from.'
			},
			{ variableName: 'num_points', variableDescription: 'The number of distant points to find.' },
			{
				variableName: 'min_dist_from_wall',
				variableDescription: 'The minimum distance the points should be from any wall.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/findMostDistantPointsWithPaddingFromWall.gif"
		functionAltText="Finding the most distant points in a section while maintaining a distance from walls on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Connect Closest Sections"
		functionDescprition="This function connects the closest sections of a specific tile type by drawing corridors between them."
		functionItself="connectClosestSections(tile_type: int, connection_tile: int, map: Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'tile_type',
				variableDescription: 'The tile type of the sections to connect.'
			},
			{
				variableName: 'connection_tile',
				variableDescription: 'The tile type to use for the connecting corridors.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/connectClosestSections.gif"
		functionAltText="Connecting the closest sections on a map with corridors."
	/>

	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--	 ADVANCED MAP FUNCTIONS  	-->
	<!--	  							-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->
	<!--  								-->

	<DocHeaderComp
		docCompName="Advanced Map Functions"
		miniDocText="returns advanced information about the 2D Array (most likely not used by user)"
	/>
	<GenerationDocComp
		titleOfFunction="Smooth and Remove Debris"
		functionDescprition="This function smooths the map by removing small sections of debris tiles and replacing them with a specified tile."
		functionItself="smoothAndRemoveDebris(map: Array, debris_tile: int, replacement_tile: int, debris_threshold: int) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' },
			{
				variableName: 'debris_tile',
				variableDescription: 'The tile type representing debris to remove.'
			},
			{
				variableName: 'replacement_tile',
				variableDescription: 'The tile type to replace debris with.'
			},
			{
				variableName: 'debris_threshold',
				variableDescription: 'The maximum size of debris sections to remove.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/smoothAndRemoveDebris.gif"
		functionAltText="Smoothing a map and removing debris."
	/>
	<GenerationDocComp
		titleOfFunction="Count Tiles"
		functionDescprition="This function counts the occurrences of each tile type in the map and returns a dictionary."
		functionItself="countTiles(map: Array) -> Dictionary"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/countTiles.gif"
		functionAltText="Counting tile types on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Count Specific Tile"
		functionDescprition="This function counts the occurrences of a specific tile type in the map."
		functionItself="countSpecificTile(tileToCheck:int, map:Array) -> int"
		descriptionOfVariables={[
			{ variableName: 'tileToCheck', variableDescription: 'The tile type to count.' },
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/countSpecificTile.gif"
		functionAltText="Counting a specific tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get Percent of Tiles"
		functionDescprition="This function calculates the percentage of a specific tile type in the map."
		functionItself="getPercentOfTiles(tileToCheck:int, map:Array) -> float"
		descriptionOfVariables={[
			{
				variableName: 'tileToCheck',
				variableDescription: 'The tile type to calculate the percentage for.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getPercentOfTiles.gif"
		functionAltText="Calculating the percentage of a specific tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get Least Common Tile"
		functionDescprition="This function returns the tile type with the least occurrences in the map."
		functionItself="getLeastCommonTile(map: Array) -> int"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getLeastCommonTile.gif"
		functionAltText="Finding the least common tile type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Get All Tiles of Same Type with Flood Fill"
		functionDescprition="This function performs a flood fill to find all tiles of the same type starting from a given position."
		functionItself="getAllTilesOfSameTypeWithFloodFill(map: Array, start_pos: Vector2, tile_type: int, visited: Dictionary) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' },
			{
				variableName: 'start_pos',
				variableDescription: 'The starting position for the flood fill.'
			},
			{ variableName: 'tile_type', variableDescription: 'The tile type to flood fill.' },
			{ variableName: 'visited', variableDescription: 'A dictionary to track visited tiles.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/getAllTilesOfSameTypeWithFloodFill.gif"
		functionAltText="Performing a flood fill on a map to find all tiles of the same type."
	/>

	<GenerationDocComp
		titleOfFunction="Count Neighbors of Certain Cell Type"
		functionDescprition="This function counts the number of neighboring tiles of a specific type around a given position."
		functionItself="countNeighborsOfCertainCellType(x: int, y: int, cellToCheck:int, map: Array) -> int"
		descriptionOfVariables={[
			{ variableName: 'x', variableDescription: 'The x-coordinate of the position to check.' },
			{ variableName: 'y', variableDescription: 'The y-coordinate of the position to check.' },
			{
				variableName: 'cellToCheck',
				variableDescription: 'The tile type to count around the position.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/countNeighborsOfCertainCellType.gif"
		functionAltText="Counting the neighbors of a certain cell type on a map."
	/>

	<GenerationDocComp
		titleOfFunction="Identify Points of Interest on Map by Tile Type"
		functionDescprition="This function identifies and marks the center of each section of a specific tile type on the map."
		functionItself="identifyPointsOfInterestOnMapByTileType(tileToCheck:int,map:Array) -> Array"
		descriptionOfVariables={[
			{
				variableName: 'tileToCheck',
				variableDescription: 'The tile type to identify points of interest for.'
			},
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' }
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/identifyPointsOfInterestOnMapByTileType.gif"
		functionAltText="Identifying points of interest on a map based on tile type."
	/>

	<GenerationDocComp
		titleOfFunction="Apply Smoothing"
		functionDescprition="This function applies smoothing to the map by adjusting the tile types based on neighboring tiles."
		functionItself="applySmoothing(map: Array, wall_tile: int, floor_tile: int, smoothing_iterations: int = 1) -> Array"
		descriptionOfVariables={[
			{ variableName: 'map', variableDescription: 'The 2D array representing the map.' },
			{ variableName: 'wall_tile', variableDescription: 'The tile type representing walls.' },
			{ variableName: 'floor_tile', variableDescription: 'The tile type representing floors.' },
			{
				variableName: 'smoothing_iterations',
				variableDescription: 'The number of smoothing iterations to apply.'
			}
		]}
		functionGIFLink="https://raw.githubusercontent.com/aimforbigfoot/Godot-Mapcrafter-Assets/main/gifs/applySmoothing.gif"
		functionAltText="Applying smoothing to a map to adjust tile types."
	/>
</main>
