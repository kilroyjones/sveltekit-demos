<script lang="ts">
  // /** @type {import('./$types').PageData} */  <-- Or this if using +page.js
  import type { PageData } from "./$types"; //

  export let data: PageData;
</script>

<p>
  This is a basic load function is the same as the one used in the last two (<a
    href="/load-function/1-client-and-server">first</a
  >, <a href="/load-function/2-server-only">second</a>
  example. Here we've add <strong>export const ssr = false;</strong> to our
  <strong>+page.ts</strong>
  file which forces it to render client side. You'll notice that no console.logs are output on the server
  side.
</p>
<h3 class="program-output">Data returned from load function</h3>
<hr />
<p>
  {data.person.name} | {data.person.email} | {data.person.rnd}
</p>
