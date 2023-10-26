<div class="columns">
  <div class="border-column" />

  <div class="center-column">
    <h1>SvelteKit</h1>
    <hr />
    <p>
      This repo contains small, usually single-page demos, illustrating some of the features of
      Svelte and SvelteKit. This is as much to help others as it is to better teach myself. You can
      find additional information on <a href="https://thespatula.io">thespatula.io</a> which will cover
      topic in more detail.
    </p>

    <h3><a href="/animations">Animations</a></h3>
    <div class="section">
      <li><a href="/animation/">Spring [bouncing dot]</a></li>
    </div>
    <hr />

    <h3><a href="/api-endpoints">API endpoints</a></h3>
    <div class="section">
      <li><a href="/api-endpoints/get-all">Get [all]</a></li>
      <li><a href="/api-endpoints/post">Post</a></li>
      <li><a href="/api-endpoints/get-pagination">Get [pagination]</a></li>
      <li><a href="/api-endpoints/delete">Delete</a></li>
      <li><a href="/api-endpoints/put">Put</a></li>
    </div>
    <hr />

    <h3><a href="/load">Load function</a></h3>
    <div class="section">
      <li><a href="/load/client-and-server">Client and server</a></li>
      <li><a href="/load/server-only">Server only</a></li>
      <li><a href="/load/client-only">Client only</a></li>
      <li><a href="/load/api-client-and-server">API on client and server</a></li>
      <li><a href="/load/api-server-only">API on server only</a></li>
      <li><a href="/load/redirects-and-errors">Handling redirects and errors</a></li>
    </div>
  </div>

  <div class="border-column" />
</div>

<style>
  li {
    list-style: none;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .section {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
</style>
