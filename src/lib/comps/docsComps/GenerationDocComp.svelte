<script>
	import LongCodeBlock from '../textComps/LongCodeBlock.svelte';
	import ShortCodeBlock from '../textComps/ShortCodeBlock.svelte';

	let {
		titleOfFunction,
		functionDescprition,
		descriptionOfVariables,
		functionItself,
		functionGIFLink,
		functionAltText
	} = $props();
</script>

<div class=" m-2 p-4 hover:bg-base-300 rounded-lg bg-base-200">
	<h3 class="text-2xl font-bold">{titleOfFunction}</h3>
	<p class="mb-2">
		{functionDescprition}
	</p>

	<li class="list-disc">
		<LongCodeBlock textToShow={functionItself} />
		<ul class="list-disc pt-2">
			{#each descriptionOfVariables as { variableName, variableDescription }}
				<li class="ml-14 py-1 flex">
					<p class="mr-1"><ShortCodeBlock textToShow={variableName} /></p>
					<p class="my-auto">: {variableDescription}</p>
				</li>
			{/each}
		</ul>
	</li>

	{#if functionGIFLink}
		<li class="list-disc">
			Example GIF:
			<img class="w-1/2 ml-auto mr-auto" alt={functionAltText} src={functionGIFLink} />
			<p class="text-center pt-3 font-light">{functionAltText}</p>
		</li>
	{/if}
</div>
