<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>SvelteKit</h1>
		<hr />
		<p>
			This repo contains small, usually single-page demos, illustrating some of the features of
			Svelte and SvelteKit. Each is defined as their own route and runs independently of others.
			This is as much to help others as it is to better teach myself. In some cases you can find
			additional blog posts on my <a href="https://thespatula.io">site</a> which will often lump together
			one topic's examples. That being said, everything is, for the most part, duplicated here.
		</p>

		<h3>Animations</h3>
		<div class="section">What this</div>
		<div class="section">
			<li><a href="/animation/">Spring [bouncing dot]</a></li>
		</div>
		<hr />

		<h3>Endpoints</h3>
		<div class="section">What this</div>
		<div class="section">
			<li><a href="/endpoints/get-all">Get [all]</a></li>
			<li><a href="/endpoints/post">Post</a></li>
			<li><a href="/endpoints/get-pagination">Get [pagination]</a></li>
			<li><a href="/endpoints/delete">Delete</a></li>
			<li><a href="/endpoints/put">Put</a></li>
		</div>
		<hr />

		<h3 id="load-function">Load function</h3>
		<div class="section">What this</div>
		<div class="section">
			<li><a href="/load/client-and-server">Client and server</a></li>
			<li><a href="/load/server-only">Server only</a></li>
			<li><a href="/load/client-only">Client only</a></li>
			<li><a href="/load/api-client-and-server">API on client and server</a></li>
			<li><a href="/load/api-server-only">API on server only</a></li>
			<li><a href="/load/redirects-and-errors">Handling redirects and errors</a></li>
		</div>
	</div>

	<div class="border-column" />
</div>

<style>
	li {
		list-style: none;
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.section {
		margin-left: 1.5rem;
		margin-bottom: 1.5rem;
	}
</style>
