<script lang="ts">
	// /** @type {import('./$types').PageData} */  <-- Or this if using +page.js
	import type { PageData } from './$types'; //
	export let data: PageData;
</script>

<h2>Load function [basic]</h2>
<p>
	This is a basic load function using +page.server.ts to return information that can be deserialized
	using <a href="https://github.com/rich-harris/devalue">devalue</a>, which is similar to
	JSON.stringify, but can do a big more. Because it's using
	<strong>+page.server.ts</strong> it will be run on the server only. You can see this by checking the
	console.log messages output in your browser's developer tools console and wherever you're running this
	repository.
</p>
<p>
	{data.person.name} | {data.person.email} | {data.person.rnd}
</p>
