<script>
  export let spaceStation;
</script>

<div class="bg-slate-700 w-full py-10 px-10 mt-20">
  <div>
    <div class="sm:flex space-x-7 md:items-start items-center">
      <div class="mb-4">
        <img class="rounded-md md:w-80" src={spaceStation.image_url} alt="{spaceStation.name + '\'s logo'}" />
      </div>
      <div>
        <h1 class="text-slate-100 text-4xl font-bold my-2">
          {spaceStation.name}
        </h1>
        <p class="text-slate-100 text-lg tracking-wide mb-6 md:max-w-2xl">
          {spaceStation.description}
        </p>
      </div>
    </div>
  </div>
  <div class="mt-8 sm:grid grid-cols-3 sm:space-x-4">
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Status</span>
      <h2 class="text-slate-100 text-2xl font-semibold">
        {spaceStation.status.name}
      </h2>
    </div>
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Type</span>
        <h2 class="text-slate-100 text-2xl font-semibold">
          {spaceStation.type.name}
        </h2>
      </div>
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Founded</span>
      <h2 class="text-slate-100 text-2xl font-semibold">
        {spaceStation.founded}
      </h2>
    </div>
    {#if spaceStation.deorbited}
      <div class="bg-slate-600 p-6 rounded-md mb-4">
        <span class="text-slate-400 text-md">Deorbited</span>
        <h2 class="text-slate-100 text-2xl font-semibold">
          {spaceStation.deorbited}
        </h2>
      </div>
    {/if}
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Orbit</span>
      <h2 class="text-slate-100 text-2xl font-semibold">
        {spaceStation.orbit}
      </h2>
    </div>
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Agencies</span>
      <h2 class="text-slate-100 text-2xl font-semibold">
        {spaceStation.owners.map(function(owner) {
          return owner.abbrev
        }).join(', ')}
      </h2>
    </div>
  </div>
</div>
