<script lang="ts" >
  const {data} = $props()
  let blogList = data.blogList;
</script>

<div>
  <h1>Blog List</h1>
  <ul class=" list-item list-decimal">
    {#each blogList as blog}
    <li>
      <a href={`/blog/${blog.id}`} class=" text-blue-900">
       {blog.title}
      </a>
      </li>
    {/each}

  </ul>
</div>




<style>
  h1{
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }

</style>