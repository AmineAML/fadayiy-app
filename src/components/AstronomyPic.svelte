<script>
  export let pic;
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
  <div class="text-center pb-12">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900"
      id="astronomy-picture"
    >
      Astronomy picture
    </h2>
  </div>
  <div class="mx-auto px-4 py-8 w-full my-20">
    <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
      <div class="md:flex-shrink-0">
        {#if pic.media_type}
          <img
            src={pic.hdurl}
            alt={pic.title}
            class="w-full max-h-screen rounded-lg rounded-b-none"
          />
        {/if}
      </div>
      <div class="px-4 py-2 mt-2">
        <h2 class="font-bold text-2xl text-gray-800 tracking-normal">
          {pic.title}
        </h2>
        <p class="text-sm text-gray-700 px-2 mr-1">{pic.explanation}</p>
        {#if pic.copyright}
          <div class="flex items-center justify-between mt-2 mx-6">
            <p href="#" class="text-blue-500 text-xs -ml-3 ">
              &copy; {pic.copyright}
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
