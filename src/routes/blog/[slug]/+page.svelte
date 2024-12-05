<script lang="ts">
  
  const {data} = $props();

  $inspect(data.blogData)
</script>

<div>
  blog page
  {JSON.stringify(data.blogData)}
</div>