<script lang="ts">
	// /** @type {import('./$types').PageData} */  <-- Or this if using +page.js
	import type { PageData } from './$types'; //
	export let data: PageData;
</script>

<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>Load function</h1>
		<h4>[API on server]</h4>
		<hr />
		<p>
			This is the same as the <a href="/load-function/5-api-client-and-server">previous</a> example,
			but we're rendering server side only. While the Dog API is open, just use your imagine and assume
			that you had to register and get an API key. You wouldn't want to share your API with others, so
			you render server side only.
		</p>
		<p>
			But where do you put your environment variables? In the <strong>.env</strong> file at the root
			of your project. You can then import it as shown in the accompanying
			<strong>+page.server.ts</strong> file. There are also public environment variables if it's not
			something you mind sharing. See
			<a href="https://joyofcode.xyz/sveltekit-environment-variables">this</a> blog post if you'd like
			a good overview of environment variables in SvelteKit.
		</p>
		<h3 class="program-output">Data returned from load function</h3>
		<hr />
		<p>
			{#key data}
				<ul>
					{#each data.names as breed}
						<li>{breed}</li>
					{/each}
				</ul>
			{/key}
		</p>
	</div>

	<div class="border-column" />
</div>
