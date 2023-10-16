<script lang="ts">
  // /** @type {import('./$types').PageData} */  <-- Or this if using +page.js
  import { page } from "$app/stores";
  import type { PageData } from "./$types"; //

  export let data: PageData;
</script>

<div>
  <p>
    This is a basic load function using +page.ts to return information that can be deserialized
    using <a href="https://github.com/rich-harris/devalue">devalue</a>, which is similar to
    JSON.stringify, but can do a bit more. Because it's using <strong>+page.ts</strong> it can run on
    both the server and the client. You can see this by checking the console.log messages output in your
    browser's developer tools console and wherever you're running this repository.
  </p>
  <p>
    When running in development mode you will see the console.log output in both, but in production
    it'll be server-side rendered (SSR) on first load (unless otherwise specified), and then run on
    the client side there after. You can see this if you navigate away from the page and then page
    again without doing a page refresh in your browser.
  </p>
</div>

<div class="output-container">
  <h3 class="program-output">Data returned from load function</h3>
  <p>
    {data.person.name} | {data.person.email} | {data.person.rnd}
  </p>
  <p>
    {$page.data.person.name} | {$page.data.person.email} | {$page.data.person.rnd}
  </p>
</div>
