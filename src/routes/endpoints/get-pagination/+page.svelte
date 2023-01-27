<script lang="ts">
	import { onMount } from 'svelte';
	import type { User } from '@prisma/client';

	let users: User[] = [];
	let pageCount: number = 1;

	interface Update {
		pageCount: number;
		users: User[];
	}

	async function updateUsers(page: Number) {
		let response = await fetch('/endpoints/api/get-pagination?page=' + page, {
			method: 'get'
		});
		let update: Update = await response.json();
		pageCount = update.pageCount;
		users = update.users;
	}

	onMount(async () => {
		updateUsers(0);
	});
</script>

<div class="columns">
	<div class="border-column" />

	<div class="center-column">
		<h1>Endpoints</h1>
		<h4>[Get (pagination)]</h4>
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
		<div class="pagination">
			<div class="pages">
				{#each Array(Math.floor(pageCount / 10) + 1) as _, count}
					<a
						href="/"
						class="page-count"
						on:click|preventDefault={() => updateUsers(count)}
						on:keypress|preventDefault={() => updateUsers(count)}
					>
						{count + 1}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="border-column" />
</div>

<style>
	.pagination {
		display: flex;
		flex-direction: row;
		padding-top: 10px;
		justify-content: center;
	}

	.pages {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.page-count {
		font-size: 18px;
		text-align: center;
		padding-left: 6px;
		padding-right: 6px;
	}
</style>
