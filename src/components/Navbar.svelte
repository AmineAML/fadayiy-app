<script>
  let pixels;
</script>

<svelte:window bind:scrollY={pixels} />

<header class={pixels > 100 ? 'navbar mb-2 rounded-box fixed w-full z-10 text-white bg-black' : 'navbar mb-2 rounded-box fixed w-full bg-transparent z-10 text-white'}>
  <!-- <div
    class="navbar mb-2 text-neutral-content rounded-box fixed w-full bg-transparent"
    style="color: #3a415d;"
  > -->
    <div class="flex-1 px-2 mx-2">
      <a href="/" class="text-lg font-bold">
        <img src="/logo.svg" alt="" class="flex w-20 h-20" />
      </a>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn" href="/spacestations"> Stations </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/astronauts"> Astronauts </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/agencies"> Agencies </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/#upcoming-launches"> Upcoming launches </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/#astronomy-picture"> photos </a>
      </div>
    </div>
  <!-- </div> -->
</header>
