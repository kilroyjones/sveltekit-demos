<script lang="ts">
	import { onMount } from 'svelte';
	import type { Bounds } from './models';
	export let width: number;
	export let setDot: Function;

	let elem: HTMLDivElement;

	let bounds: Bounds;

	onMount(() => {
		bounds = {
			x: elem.getBoundingClientRect().x,
			y: elem.getBoundingClientRect().y,
			right: elem.getBoundingClientRect().right,
			bottom: elem.getBoundingClientRect().left
		};
	});
</script>

<div
	class="container"
	style="width: {width}px"
	bind:this={elem}
	on:mouseover={setDot(bounds)}
	on:focus={setDot(bounds)}
/>

<style>
	.container {
		height: 50px;
		background-color: #3182bd;
		border-radius: 5px;
		margin-bottom: 30px;
	}
</style>
