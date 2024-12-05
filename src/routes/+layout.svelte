<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	Main Layout
</nav>

{@render children()}


<style>
  nav{
    text-align: center;
    background-color: rgb(61, 56, 23);
    color: yellow;
  }
</style>