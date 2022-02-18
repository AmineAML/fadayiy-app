<script>
  export let spaceStations;
</script>

<section
class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex flex-col space-y-16 my-5"
>
  <div class="text-center pb-12">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white"
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
      <div class="flex w-3/5 flex-col">
        <div class="m-auto space-y-5 text-white">
          <div class="flex mx-auto">
            <h2 class="flex text-2xl mx-auto text-white">{station.name}</h2>
          </div>
          <div class="flex mx-auto">
            <a href="/spacestations/{station.name.replace(new RegExp(' ', 'g'), '_').toLowerCase()}_{station.id}" class="btn mx-auto rounded-lg px-5 py-4 cursor-pointer text-white" style="background-image: linear-gradient(to right, #ca3035, #cf3833, #d54030, #d9472d, #de4f2a);"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>
