<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from '@prisma/client';

	let users: User[] = [];

	async function delete_user(id: number) {
		const response = await fetch('/endpoints/api/delete', {
			method: 'DELETE',
			body: JSON.stringify({
				id: id
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
		let confirmation = await response.json();
		console.log(id);
		// Can check confirmation for error and response accordingly.
		updateUsers();
	}

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
		<h4>[Delete]</h4>
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
					<th>Delete</th>
				</tr>
				{#each users as user}
					<tr>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td><button on:click={() => delete_user(user.id)}>X</button></td>
					</tr>
				{/each}
			</table>
		</div>
	</div>

	<div class="border-column" />
</div>
