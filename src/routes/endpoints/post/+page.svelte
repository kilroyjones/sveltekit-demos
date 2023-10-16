<script lang="ts">
  import { onMount } from "svelte";
  import type { User } from "@prisma/client";

  let users: User[] = [];
  let username: string = "";
  let email: string = "";

  function generateRandomUser() {
    let random_username: string = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    while (random_username.length < 5) {
      random_username += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    username = random_username;
    email = username + "@randomail.com";
  }

  async function post() {
    const response = await fetch("/endpoints/api/post", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    // Can check confirmation for error and respond accordingly.
    let confirmation = await response.json();

    updateUsers();
    generateRandomUser();
  }

  async function updateUsers() {
    let getResponse = await fetch("/endpoints/api/get-all", {
      method: "get",
    });
    users = await getResponse.json();
  }

  onMount(async () => {
    generateRandomUser();
    updateUsers();
  });
</script>

<p>
  Here you can insert randomized usernames and emails into the database. Each item entered will be
  assigned an <strong>ID</strong> which is also shown. A few different things need to happen here:
</p>

<ul>
  <li>The data is sent as <strong>POST</strong> to the api.</li>
  <li>We <strong>await</strong> a response.</li>
  <li>Upon receiving the response we update the list below.</li>
</ul>

<p>
  The code for this is both within this <strong>+page.svelte</strong> and the API route
  <strong>endpoints/api/post</strong>.
</p>
<h3 class="program-output">Example program output</h3>
<hr />
<div>
  <input type="input" id="username" placeholder="Username" bind:value={username} />
  <input type="input" id="email" placeholder="email" bind:value={email} />
  <button type="button" id="submit" on:click={post}>Add</button>
</div>
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
