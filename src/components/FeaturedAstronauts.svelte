<script>
  export let astronauts;
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex flex-col space-y-16 my-5">
  <div class="text-center pb-12">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading" style="color: #3c415e;"
    >
      Featured astronauts
    </h2>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {#each astronauts as astronaut}
      <div
        class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
      >
        <figure class="h-2/3">
          <img
            class="object-cover h-full w-full"
            src={astronaut.profile_image}
            alt={astronaut.name + "'s photo"}
          />
        </figure>
        <div class="text-center py-8 sm:py-6 h-1/3">
          <p class="text-xl text-gray-700 font-bold mb-2">{astronaut.name}</p>
          <p class="text-base text-gray-400 font-normal mb-6">
            {astronaut.agency != null ? astronaut.agency.abbrev : "Unavailable"}
          </p>
          <a href="/astronauts/{astronaut.name.replace(new RegExp(' ', 'g'), '_').replace(new RegExp("'", 'g'), '').toLowerCase()}_{astronaut.agency != null ? astronaut.agency.abbrev.toLowerCase() : 'unavailable'}_{astronaut.nationality.toLowerCase()}_{astronaut.id}" class="btn btn-outline" style="color: #3c415e;"
            >Read bio</a
          >
        </div>
      </div>
    {/each}
  </div>
  <a
    class="btn btn-wide btn-lg bg-transparent mx-auto hover:bg-gray-400"
    style="color: #3c415e;"
    href="/astronauts">Show more</a
  >
</section>
