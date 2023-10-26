<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "@prisma/client";

  let users: User[] = [];

  async function put(user: User) {
    const response = await fetch("/api-endpoints/api/put", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    // Can check confirmation for error and respond accordingly.
    let confirmation = await response.json();

    updateUsers();
  }

  async function updateUsers() {
    let getResponse = await fetch("/api-endpoints/api/get-all", {
      method: "get",
    });
    users = await getResponse.json();
  }

  onMount(async () => {
    updateUsers();
  });
</script>

<p>
  While you can accomplish the same using <strong>POST</strong>, using <strong>PUT</strong> as the method
  of your fetch/API request is more appropriate. Here you can click on any of the usernames or emails
  and edit it, then click update to trigger the change to the database.
</p>

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

<style>
  .editable-td {
    border-bottom: 1px solid #3182bd;
  }

  button:active {
    transform: translateY(2px);
    transform: translateX(2px);
    background-color: #0056b3;
  }
</style>
