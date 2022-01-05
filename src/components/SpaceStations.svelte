<script>
  export let spaceStations;
</script>

<section
class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex flex-col space-y-16 my-5"
>
  <div class="text-center pb-12">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading" style="color: #3c415e;"
    >
    Space Stations
    </h2>
  </div>

  {#each spaceStations as station}
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
          <a href="/spacestations/{station.name.replace(new RegExp(' ', 'g'), '_').toLowerCase()}_{station.id}" class="btn btn-outline mx-auto" style="color: #3c415e;"
            >Learn more</a
          >
        </div>
      </div>
    </div>
  {/each}
</section>
