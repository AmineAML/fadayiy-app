<script>
  export let astronaut;
</script>

<div class="bg-slate-700 w-full py-10 px-10 mt-20">
  <div>
    <div class="sm:flex space-x-7 md:items-start items-center">
      <div class="mb-4">
        <img
          class="rounded-md md:w-80"
          src={astronaut.profile_image}
          alt="brad"
        />
      </div>
      <div>
        <h1 class="text-slate-100 text-4xl font-bold my-2">{astronaut.name}</h1>
        <p class="text-slate-100 text-lg tracking-wide mb-6 md:max-w-2xl">
          {astronaut.bio}
        </p>
        <a
          class="border-2 px-6 py-4 rounded-md border-indigo-600 text-slate-100 hover:bg-indigo-600 hover:text-indigo-100 transition duration-75"
          href={astronaut.wiki}>Learn more</a
        >
      </div>
    </div>
  </div>
  <div class="mt-8 sm:grid grid-cols-3 sm:space-x-4">
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Date of birth</span>
      <h2 class="text-slate-100 text-2xl font-semibold">
        {astronaut.date_of_birth}
      </h2>
    </div>
    {#if astronaut.date_of_death}
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Date of death</span>
        <h2 class="text-slate-100 text-2xl font-semibold">
          {astronaut.date_of_death}
        </h2>
      </div>
    {/if}
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Nationality</span>
      <h2 class="text-slate-100 text-2xl font-semibold">
        {astronaut.nationality}
      </h2>
    </div>
    {#if astronaut.twitter}
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Twitter</span>
        <!-- Example: https://twitter.com/TheRealBuzz -->
        <h2>
          <a
            class="text-blue-300 text-2xl font-semibold"
            href={astronaut.twitter}
            target="_blank"
            >{"@" +
              astronaut.twitter.split("/")[
                astronaut.twitter.split("/").length - 1
              ]}</a
          >
        </h2>
      </div>
    {/if}
    {#if astronaut.instagram}
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Instagram</span>
        <!-- Example: https://www.instagram.com/drbuzzaldrin/ -->
        <h2>
          <a
            class="text-blue-300 text-2xl font-semibold"
            href={astronaut.instagram}
            target="_blank"
            >{"@" +
              astronaut.instagram.split("/")[
                astronaut.instagram.split("/").length - 2
              ]}</a
          >
        </h2>
      </div>
    {/if}
    {#if astronaut.agency != null}
      {#if astronaut.agency.abbrev != null}
        <div class="bg-slate-600 p-6 rounded-md mb-4">
          <span class="text-slate-400 text-md">Space agency</span>
          <h2>
            <a
              class="text-blue-300 text-2xl font-semibold"
              href={"/agencies/" +
                astronaut.agency.name
                  .replace(new RegExp(" ", "g"), "_")
                  .toLowerCase() +
                "_" +
                astronaut.agency.id}
              target="_blank">{astronaut.agency.abbrev}</a
            >
          </h2>
        </div>
      {:else}
        <div class="bg-slate-600 p-6 rounded-md mb-4">
          <span class="text-slate-400 text-md">Space agency</span>
          <h2>
            <a
              class="text-blue-300 text-2xl font-semibold"
              href={"/agencies/" +
                astronaut.agency.name
                  .replace(new RegExp(" ", "g"), "_")
                  .toLowerCase() +
                "_" +
                astronaut.agency.id}
              target="_blank">{astronaut.agency.name}</a
            >
          </h2>
        </div>
      {/if}
    {/if}
    {#if astronaut.first_flight}
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">First flight</span>
        <!-- Example: https://twitter.com/TheRealBuzz -->
        <h2 class="text-slate-100 text-2xl font-semibold">
          {new Date(astronaut.first_flight).toDateString()}
        </h2>
      </div>
    {/if}
    {#if astronaut.last_flight}
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Last flight</span>
        <!-- Example: https://twitter.com/TheRealBuzz -->
        <h2 class="text-slate-100 text-2xl font-semibold">
          {new Date(astronaut.last_flight).toDateString()}
        </h2>
      </div>
    {/if}
  </div>
</div>
