<script>
  export let launches;

  async function checkImage(url) {
    const res = await fetch(url, {
      mode: "no-cors",
    });

    const buff = await res.blob();

    return buff.type.startsWith("image/");
  }

  //   launches.forEach((element) => {
  //     element.ree = {
  //       seconds: "",
  //     };

  //     let endDate = new Date(element.window_start).getTime();

  //     setInterval(() => {
  //       let now = new Date().getTime();

  //       let remainingTime = endDate - now;

  //       const second = 1000;

  //       const minute = second * 60;

  //       const hour = minute * 60;

  //       const day = hour * 24;

  //       daysLeft = Math.trunc(remainingTime / day);

  //       hoursLeft = Math.trunc((remainingTime % day) / hour);

  //       minutesLeft = Math.trunc((remainingTime % hour) / minute);

  //       secondsLeft = Math.trunc((remainingTime % minute) / second);

  //       element.ree.seconds = secondsLeft

  //       console.log(secondsLeft)

  //       console.log(element.ree)

  //     //   element.launchCounter = {
  //     //     seconds: "",
  //     //   };

  //     //   element.launchCounter.seconds = secondsLeft;

  //       if (remainingTime <= 0) {
  //         //   document.write("Time Up!");
  //       }
  //     }, 1000);
  //   });

  //   launches.forEach((element) => {
  //     element.countDownToLaunch = () => {
  //       let endDate = new Date(element.window_start).getTime();

  //       setInterval(() => {
  //         let now = new Date().getTime();

  //         let remainingTime = endDate - now;

  //         const second = 1000;

  //         const minute = second * 60;

  //         const hour = minute * 60;

  //         const day = hour * 24;

  //         daysLeft = Math.trunc(remainingTime / day);

  //         hoursLeft = Math.trunc((remainingTime % day) / hour);

  //         minutesLeft = Math.trunc((remainingTime % hour) / minute);

  //         secondsLeft = Math.trunc((remainingTime % minute) / second);

  //         element.launchCounter = {
  //           seconds: "",
  //         };

  //         element.launchCounter.seconds = secondsLeft;

  //         if (remainingTime <= 0) {
  //           //   document.write("Time Up!");
  //         }
  //       }, 1000);
  //     };
  //   });
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
  <div class="text-center pb-12">
    <h2
      class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900"
      id="upcoming-launches"
    >
      Upcoming launches
    </h2>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {#each launches as launch}
      <!-- {launch.countDownToLaunch()} -->
      <div
        class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row"
      >
        <div class="w-full md:w-2/5 h-80 relative">
          <img
            class="object-center object-cover w-full h-full"
            src={launch.image ? launch.image : "default-launch-thumbnail.jpg"}
            alt={launch.name + "'s thumbnail"}
          />
          {#if !launch.image}
            <p class="text-sm text-gray-300 absolute bottom-2">Default image</p>
          {/if}
        </div>
        <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
          <p class="text-xl text-gray-700 font-bold">{launch.name}</p>
          <p class="text-base text-gray-400 font-normal">
            {new Date(launch.window_start) + " - " + launch.status.name}
          </p>
          <!-- <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div
              class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
            >
              <span class="font-mono text-base countdown">
                <span style="--value: 15;" />
              </span>
              days
            </div>
            <div
              class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
            >
              <span class="font-mono text-base countdown">
                <span style="--value: 10;" />
              </span>
              hours
            </div>
            <div
              class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
            >
              <span class="font-mono text-base countdown">
                <span style="--value: 24;" />
              </span>
              min
            </div>
            <div
              class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
            >
              <span class="font-mono text-base countdown"> -->
          <!-- <span style="--value: 60;" /> -->
          <!-- {launch.ree ? launch.ree.seconds : ""} -->
          <!-- </span>
              {launch.ree ? launch.ree.seconds : ""}
              sec
            </div>
          </div> -->
          <!-- <p class="text-base leading-relaxed text-gray-500 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> -->
          <div class="flex justify-start space-x-2">
            {#if launch.webcast_live}
              <a
                href={launch.vidURLs}
                class="text-gray-500 hover:text-gray-600 m-auto border-2 rounded-lg border-gray-500 p-3"
                >Watch live</a
              >
            {:else}
              <p class="text-gray-500 hover:text-gray-600 m-auto">
                Not broadcasted
              </p>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
