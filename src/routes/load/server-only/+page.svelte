<script lang="ts">
  // /** @type {import('./$types').PageData} */  <-- Or this if using +page.js
  import type { PageData } from "./$types"; //

  export let data: PageData;
</script>

<p>
  This is a basic load function is the same as the one used in the
  <a href="/load-function/1-client-and-server">previous</a>
  example, except that is using using <strong>+page.server.ts</strong>. This means that it will only
  run on the server, and not the client. This keeps what you're doing in the load function away from
  the user's prying eyes, but will require a call to the server each time a user navigates back to
  the page. You can see this as the console.log will output on the server side each time you return
  to the page.
</p>
<h3 class="program-output">Data returned from load function</h3>
<hr />
<p>
  {data.person.name} | {data.person.email} | {data.person.rnd}
</p>
