<script lang="ts">
  // /** @type {import('./$types').PageData} */  <-- Or this if using +page.js
  import type { PageData } from "./$types"; //
  export let data: PageData;
</script>

<p>
  This example shows an example of calling an API on the client and server side. You’ll can use this
  sort of setup if you’re not using a third-party API which requires your private key.
</p>
<p>
  In this example we use an <a href="https://dogapi.dog/">API for dogs</a> which is so kindly run as
  free and open. In it we do some processing on the data returned and extract the names only before returning
  that to our user.
</p>
<p>We fetch the data, do a little processing to extract the breeds only, and then return it.</p>
<h3 class="program-output">Data returned from load function</h3>
<hr />
<p>
  {#key data}
    <ul>
      {#each data.names as breed}
        <li>{breed}</li>
      {/each}
    </ul>
  {/key}
</p>
