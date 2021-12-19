<script>
  export let agencies;
</script>

<!-- <div class="w-full bg-gray-800"> -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex flex-col space-y-16 my-5">
    <div class="text-center pb-12">
      <h2
        class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading" style="color: #3c415e;"
      >
        Featured space agencies
      </h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {#each agencies as agency}
        <div
          class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
        >
          <div class="mb-8">
            <img
              class="object-center object-cover rounded-full h-36 w-36"
              src={agency.image_url}
              alt={agency.name + "'s logo"}
            />
          </div>
          <div class="text-center">
            <p class="text-xl text-white font-bold mb-2">{agency.name + ' (' + agency.abbrev + ')'}</p>
            <a href="/" class="btn btn-outline font-normal text-base text-white">Learn more</a>
          </div>
        </div>
      {/each}
    </div>
    <a
      class="btn btn-wide btn-lg bg-transparent mx-auto hover:bg-gray-400"
      style="color: #3c415e;"
      href="/">Show more</a
    >
  </section>
<!-- </div> -->
