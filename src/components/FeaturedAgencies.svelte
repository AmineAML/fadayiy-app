<script>
  export let agencies;
</script>

<section
  class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex flex-col space-y-16 my-5"
>
  <div class="text-center">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white"
    >
      Featured space agencies
    </h2>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p class="text-xl text-white font-bold mb-2">
            {agency.name + " (" + agency.abbrev + ")"}
          </p>
          <a href="/agencies/{agency.name.replace(new RegExp(' ', 'g'), '_')}_{agency.id}" class="btn btn-outline font-normal text-base text-white"
            >Learn more</a
          >
        </div>
      </div>
    {/each}
  </div>
  <a
    class="mx-auto rounded-full px-5 py-4 cursor-pointer text-white"
    style="background-image: linear-gradient(to right, #ca3035, #cf3833, #d54030, #d9472d, #de4f2a);" href="/agencies">Show more</a
  >
</section>
