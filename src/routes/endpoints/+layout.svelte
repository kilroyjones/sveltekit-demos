<script lang="ts">
  import { page } from "$app/stores";

  interface Route {
    href: string;
    text: string;
  }

  let routes: Route[] = [
    { href: "/endpoints/post", text: "Post" },
    { href: "/endpoints/get-all", text: "Get all" },
    { href: "/endpoints/get-pagination", text: "Pagination" },
    { href: "/endpoints/delete", text: "Delete" },
    { href: "/endpoints/put", text: "Put" },
  ];
</script>

<div class="columns">
  <div class="border-column" />

  <div class="center-column">
    <h1>Endpoints</h1>

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

  .table-container {
    margin-top: 20px;
  }

  table {
    border-collapse: collapse;
    border: 0px;
    border-style: hidden;
  }

  th {
    color: #fff;
    background-color: #3182bd;
    border: 0px solid;
    padding-left: 6px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
  }

  td {
    padding-right: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
  }
</style>
