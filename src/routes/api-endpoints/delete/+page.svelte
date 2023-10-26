<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "@prisma/client";

  let users: User[] = [];

  async function delete_user(id: number) {
    const response = await fetch("/api-endpoints/api/delete", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    let confirmation = await response.json();
    console.log(id);
    // Can check confirmation for error and response accordingly.
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
  This route will delete an item from a database. In practice, you often don't want to permanently
  delete data like this, but instead make it inactive until you're sure it needs to be removed. This
  could mean adding a field to the database for <strong>active</strong>/<strong>inactive</strong> or
  something like that.
</p>
<h3 class="program-output">Example program output</h3>
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
