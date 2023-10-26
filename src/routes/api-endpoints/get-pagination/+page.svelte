<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "@prisma/client";

  let users: User[] = [];
  let pageCount: number = 1;

  interface Update {
    pageCount: number;
    users: User[];
  }

  async function updateUsers(page: Number) {
    let response = await fetch("/api-endpoints/api/get-pagination?page=" + page, {
      method: "get",
    });
    let update: Update = await response.json();
    pageCount = update.pageCount;
    users = update.users;
  }

  onMount(async () => {
    updateUsers(0);
  });
</script>

<p>
  This shows one way to create pagination without page reloads. It gets 10 users at a time and
  creates additional pages if the overall number of users is over 10. You can go to <a
    href="/endpoints/post">POST</a
  > to create more users in order to get the pages to show up.
</p>
<p>
  A good extension might be to create a paging system that will display a "..." or something between
  the first and last page numbers once the overall pages exceeds a certain value. when pages exceed
  This elimiates the issue whereby you'll see all numbers listed 1 to 1000 if we had, say 10,000
  users in total.
</p>
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
