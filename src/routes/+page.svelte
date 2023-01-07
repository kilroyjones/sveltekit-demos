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
		<h3>Load function</h3>

		<li><a href="/load-function/1-client-and-server">Client and server</a></li>
		<blockquote>Load function runs on both the client and server.</blockquote>

		<li><a href="/load-function/2-server-only">Server only</a></li>
		<blockquote>
			This shows how you can run the program above, but restrict it to server side only.
		</blockquote>

		<li><a href="/load-function/3-client-only">Client only</a></li>
		<blockquote>
			Same as the previous two programs, but is restricted to client side only.
		</blockquote>

		<li><a href="/load-function/4-api-client-and-server">API on client and server</a></li>
		<blockquote>
			Using our load function to load data from an API using SSR on initial load and the relying on
			the client for any rerenders.
		</blockquote>

		<li><a href="/load-function/5-api-server-only">API on server only</a></li>
		<blockquote>
			This is the same as the above example, save that we restrict it to server side and show how
			you might include a private environment variable.
		</blockquote>

		<li><a href="/load-function/6-redirects-and-errors">Handling redirects and errors</a></li>
		<blockquote>
			This is a quick on which shows you how you might <i>throw</i> redirects and errors.
		</blockquote>
		<hr />
	</div>

	<div class="border-column" />
</div>
