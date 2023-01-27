<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from '@prisma/client';

	let users: User[] = [];

	async function get() {
		const response = await fetch('./endpoints/api/get-all', {
			method: 'get'
		});
		users = await response.json();
	}

	onMount(async () => {
		get();
	});
</script>

<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>Endpoints</h1>
		<h4>GET, POST, PUT, PATCH, DELETE</h4>
		<hr />
		<p>Text goes here</p>
		<div class="menu">
			<div class="menu-item">Post</div>
			<div class="menu-item">Get</div>
			<div class="menu-item">Delete</div>
			<div class="menu-item">Put</div>
			<div class="menu-item">Patch</div>
		</div>
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

<style>
	.menu {
		display: flex;
		flex-direction: row;
	}

	.menu-item {
		flex-grow: 1;
	}

	.table-container {
		margin-top: 20px;
	}

	table {
		border-collapse: collapse;
		border: 0px;
		border-style: hidden;
	}

	th {
		color: #fff;
		background-color: #3182bd;
		border: 0px solid;
		padding-left: 6px;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: left;
	}

	td {
		padding-right: 20px;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 6px;
	}
</style>
