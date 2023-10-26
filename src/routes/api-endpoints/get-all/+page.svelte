<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "@prisma/client";

  let users: User[] = [];

  async function getAllUser() {
    let getResponse = await fetch("/api-endpoints/api/get-all", {
      method: "get",
    });
    users = await getResponse.json();
  }

  onMount(async () => {
    getAllUser();
  });
</script>

<p>This route will return all users currently in the database.</p>
<h3 class="program-output">Example program output</h3>
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
