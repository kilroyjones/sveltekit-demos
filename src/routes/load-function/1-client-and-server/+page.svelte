<script lang="ts">
	export let data: any;
</script>

<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>Load function [basic]</h1>
		<hr />
		<p>
			This is a basic load function using +page.ts to return information that can be deserialized
			using <a href="https://github.com/rich-harris/devalue">devalue</a>, which is similar to
			JSON.stringify, but can do a big more. Because it's using
			<strong>+page.ts</strong> it will be run on both the server and the client. You can see this by
			checking the console.log messages output in your browser's developer tools console and wherever
			you're running this repository.
		</p>
		<h3 class="program-output">The load function returns</h3>
		<hr />
		<p>
			{data.person.name} | {data.person.email}
		</p>
	</div>

	<div class="border-column" />
</div>
