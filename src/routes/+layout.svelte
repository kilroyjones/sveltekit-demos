<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<div class="content">
  <slot />
</div>

<style>
  .content {
    margin-top: 40px;
  }
</style>
