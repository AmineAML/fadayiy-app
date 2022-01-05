<script>
  export let agency;
</script>

<div class="bg-slate-700 w-full py-10 px-10 mt-20">
  <div>
    <div class="sm:flex space-x-7 md:items-start items-center">
      <div class="mb-4">
        <img class="rounded-md md:w-80" src={agency.logo_url} alt="{agency.name + '\'s logo'}" />
      </div>
      <div>
        <h1 class="text-slate-100 text-4xl font-bold my-2">
          {agency.name + "(" + agency.abbrev + ")"}
        </h1>
        <p class="text-slate-100 text-lg tracking-wide mb-6 md:max-w-2xl">
          {agency.description}
        </p>
        <a
          class="border-2 px-6 py-4 rounded-md border-indigo-600 text-slate-100 hover:bg-indigo-600 hover:text-indigo-100 transition duration-75"
          href={agency.wiki_url}
          target="_blank">Learn more</a
        >
        {#if agency.info_url}
        <a
        class="border-2 px-6 py-4 rounded-md border-indigo-600 text-slate-100 hover:bg-indigo-600 hover:text-indigo-100 transition duration-75"
        href={agency.info_url}
        target="_blank">Website</a
      >
        {/if}
      </div>
    </div>
  </div>
  <!-- <div class="mt-8 flex sm:space-x-4">
    {#if agency.info_url}
      <div class="bg-slate-600 p-6 rounded-md mb-4 m-auto">
        <span class="text-slate-400 text-md">Website</span>
        <h2 class="flex">
          <a
            class="text-blue-300 text-2xl font-semibold m-auto"
            href={agency.info_url}
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg></a
          >
        </h2>
      </div>
    {/if}
  </div> -->
</div>
