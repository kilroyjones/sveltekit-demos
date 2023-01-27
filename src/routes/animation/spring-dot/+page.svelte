<script lang="ts">
	import { spring } from 'svelte/motion';
	import Button from './Container.svelte';
	import type { Bounds } from './models';

	let coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	function setDot(bounds: Bounds) {
		console.log(bounds);
		coords.set({ x: bounds.right - 10, y: bounds.y - 10 });
	}
</script>

<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>Animation</h1>
		<h4>Spring - The dot</h4>
		<hr />
		<p>
			This is a riff on the [spring](https://svelte.dev/tutorial/spring) tutorial on the Svelte
			website. It makes use of component called <strong>Container</strong> which contains a div
			which upon being focused will call a function <strong>setDot</strong> in +page.svelte. This
			function makes use of the Svelte motion library's <strong>spring</strong> store to move the dot
			(just another div) to the top right of the container.
		</p>
		<p>
			You can change the <strong>HTMLDivElement</strong> to <strong>any</strong> and it will work for
			any object that has a bounding rectangle ([getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)).
		</p>
		<h3 class="program-output">Example of dot bouncing between objects</h3>
		<div class="columns">
			<div class="center-column">
				<div class="dot" style="top: {$coords.y}px; left: {$coords.x}px;" />
				<Button width={100} {setDot} />
			</div>
			<div class="center-column">
				<Button width={100} {setDot} />
			</div>
		</div>

		<div class="columns">
			<div class="center-column">
				<div class="dot" style="top: {$coords.y}px; left: {$coords.x}px;" />
				<Button width={100} {setDot} />
			</div>
			<div class="center-column">
				<Button width={100} {setDot} />
			</div>
		</div>
	</div>

	<div class="border-column" />
</div>

<style>
	.dot {
		position: fixed;
		width: 20px;
		height: 20px;
		border-radius: 20px;
		background-color: #fa6041;
	}
</style>
