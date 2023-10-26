<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "@prisma/client";

  let users: User[] = [];

  async function get() {
    const response = await fetch("./api-endpoints/api/get-all", {
      method: "get",
    });
    users = await response.json();
  }

  onMount(async () => {
    get();
  });
</script>

<p>
  The above links correspond to various API endpoints, showing how you might call an api (see <strong
    >api</strong
  >
  folder). This demo is using <a href="https://www.prisma.io/">Prisma ORM</a> to connect to an
  Sqlite file-based database. The routes here work together, in such that you can
  <a href="/endpoints/post">POST</a>
  data and then <a href="/endpoints/get-all">GET</a> the data that has been posted. On each page there
  is a brief discussion along with relevant code.
</p>

<p>
  Below is the current content of our model database, which is defind within the <strong
    >/prisma/prisma.schema</strong
  > folder at the root of this project.
</p>
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
