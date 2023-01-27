<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from '@prisma/client';

	let users: User[] = [];

	async function put(user: User) {
		const response = await fetch('/endpoints/api/put', {
			method: 'PUT',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json'
			}
		});

		// Can check confirmation for error and respond accordingly.
		let confirmation = await response.json();

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
		<h4>[Post]</h4>
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
					<th>Update</th>
				</tr>
				{#each users as user}
					<tr>
						<td>{user.id}</td>
						<td class="editable-td" contenteditable="true" bind:innerHTML={user.username} />
						<td class="editable-td" contenteditable="true" bind:innerHTML={user.email} />
						<td><button on:click={() => put(user)}>Update</button></td>
					</tr>
				{/each}
			</table>
		</div>
	</div>

	<div class="border-column" />
</div>

<style>
	.editable-td {
		border-bottom: 1px solid #3182bd;
	}
</style>
