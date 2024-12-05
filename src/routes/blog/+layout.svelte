<script lang="ts">
  const { children } = $props();

</script>

<nav>
  Blog List Nav
</nav>

{@render children()}

<style>
  nav{
    text-align: center;
    background-color: blueviolet;
    color: aqua;
    
  }
</style>