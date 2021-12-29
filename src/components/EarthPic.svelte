<script>
  export let pic;
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
  <div class="text-center pb-12">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900"
    >
      Earth picture
    </h2>
  </div>
  <div class="mx-auto px-4 py-8 w-full my-20">
    <div class="bg-black shadow-2xl rounded-lg mb-6 tracking-wide">
      <div class="md:flex-shrink-0 flex">
          <img
            src={pic.url}
            alt="recent earth photograph"
            class="max-w-full max-h-screen rounded-lg rounded-b-none mx-auto"
          />
      </div>
      <div class="px-4 py-2 mt-2 flex">
        <div class="flex items-center mt-2 mx-6">
          <p class="text-blue-500 text-xs">
            {pic.caption}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
