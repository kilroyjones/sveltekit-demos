<script lang="ts">
  import { page } from "$app/stores";

  interface Route {
    href: string;
    text: string;
  }

  let routes: Route[] = [
    { href: "/load/client-and-server", text: "Client and server" },
    { href: "/load/server-only", text: "Server only" },
    { href: "/load/client-only", text: "Client only" },
    { href: "/load/api-client-and-server", text: "API on client and server" },
    { href: "/load/api-server-only", text: "API on server only" },
    { href: "/load/redirects-and-errors", text: "Handling redirects and errors" },
  ];
</script>

<div class="columns">
  <div class="border-column" />

  <div class="center-column">
    <h1>Load</h1>

    <div class="menu">
      {#each routes as route}
        <div class="menu-item">
          <a class="link" class:active={$page.route.id == route.href} href={route.href}
            >{route.text}</a
          >
        </div>
      {/each}
    </div>

    <hr />

    <slot />
  </div>

  <div class="border-column" />
</div>

<style>
  .menu {
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .menu-item {
    flex-grow: 1;
  }

  .menu-item > .active {
    color: red;
  }
</style>
