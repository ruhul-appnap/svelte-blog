<script lang="ts">

  const {data} = $props();
  import { page } from '$app/stores';

  const blogId = $page.params;
  $inspect(data.blogData)
</script>

<div>
  blog page
  {JSON.stringify(data.blogData)}

  {JSON.stringify(blogId)}
</div>