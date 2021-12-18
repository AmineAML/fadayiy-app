<script>
  export let stations;
</script>

<div
  class="min-h-screen flex flex-col mx-auto container w-full space-y-16 h-full my-5"
>
    <h2 style="color: #3c415e;" class="flex text-5xl mx-auto">Featured space stations</h2>

    {#each stations as station}
    <div class="flex justify-between flex-col md:flex-row space-y-3">
      <figure class="flex md:w-2/5 w-full">
        <img
          src={station.image_url}
          alt=""
          class="object-cover w-full h-full shadow-lg rounded-md"
        />
      </figure>
      <div class="flex w-3/5 flex-col" style="color: #3c415e;">
        <div class="m-auto space-y-5">
          <h2 class="flex text-2xl mx-auto">{station.name}</h2>
          <a href="/" class="btn btn-outline mx-auto" style="color: #3c415e;">Learn more</a>
        </div>
      </div>
    </div>
    {/each}

    <button class="btn btn-wide btn-lg bg-transparent mx-auto hover:bg-gray-400" style="color: #3c415e;">Show more</button> 
</div>
