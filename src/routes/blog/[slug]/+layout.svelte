<script lang="ts">
  const { children } = $props();

</script>

<nav>
  Blog  Nav
</nav>

{@render children()}

<style>
  nav{
    text-align: center;
    background-color: yellowgreen;
    color: rgb(28, 29, 29);
    
  }
</style>