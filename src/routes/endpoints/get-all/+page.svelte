<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from '@prisma/client';

	let users: User[] = [];

	async function updateUsers() {
		let getResponse = await fetch('/endpoints/api/get-all', {
			method: 'get'
		});
		users = await getResponse.json();
	}

	onMount(async () => {
		updateUsers();
	});
</script>

<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>Endpoints</h1>
		<h4>[Get (all)]</h4>
		<hr />
		<p>Text goes here</p>
		<h3 class="program-output">Example program</h3>
		<hr />
		<div class="table-container">
			<table>
				<tr>
					<th>ID</th>
					<th>Username</th>
					<th>Email</th>
				</tr>
				{#each users as user}
					<tr>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
					</tr>
				{/each}
			</table>
		</div>
	</div>

	<div class="border-column" />
</div>
