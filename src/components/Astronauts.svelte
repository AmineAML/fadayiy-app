<script>
    export let astronauts

    let resultsByPage = 5

    let page = 1

    let totalPages = Math.ceil(astronauts.length / resultsByPage)

    let astros = astronauts.slice((page - 1) * resultsByPage, page * resultsByPage)

    // let astros = astronauts

    let searchValue = "";

    let astronautsCount = astronauts.length

    function showNext(pg) {
        astros = astronauts.slice((pg - 1) * resultsByPage, pg * resultsByPage)

        page = page + 1
    }

    function showPrev(pg) {
        astros = astronauts.slice((pg - 1) * resultsByPage, pg * resultsByPage)

        page = page - 1
    }

    function resultsByPageChanged() {
        // totalPages = astros.length / resultsByPage

        totalPages = Math.ceil(astronauts.length / resultsByPage)

        // page = 1

        astros = astronauts.slice((page - 1) * resultsByPage, page * resultsByPage)
    }

    function filterAstronauts() {
        if (searchValue == '') {
            totalPages = Math.ceil(astros.length / resultsByPage)

            astros = astronauts.slice((page - 1) * resultsByPage, page * resultsByPage)

            totalPages = Math.ceil(astronauts.length / resultsByPage)

            astronautsCount = astronauts.length
        } else {
            astros = astronauts.filter(astro => (new RegExp(searchValue.toLowerCase())).test(astro.name.toLowerCase()))

            totalPages = 1

            astronautsCount = astros.length
        }
    }
</script>

<section class="antialiased font-sans bg-transparent mt-20">
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight text-center text-white">Astronauts</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" bind:value={resultsByPage} on:change="{resultsByPageChanged}">
                            <option selected value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search" bind:value={searchValue} on:keyup="{filterAstronauts}"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider" style="background-color: #1F2937; border-color: #1F2937;">
                                    Name
                                </th>
                                <th
                                class="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider" style="background-color: #1F2937; border-color: #1F2937;">
                                    Agency
                                </th>
                                <th
                                class="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider" style="background-color: #1F2937; border-color: #1F2937;">
                                    Nationality
                                </th>
                                <th
                                class="px-5 py-3 border-b-2 text-left text-xs font-semibold text-white uppercase tracking-wider" style="background-color: #1F2937; border-color: #1F2937;">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each astros as astronaut}
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src={astronaut.profile_image_thumbnail}
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {astronaut.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{astronaut.agency != null ? astronaut.agency.abbrev : 'Unavailable'}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {astronaut.nationality}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
                                        <a href="/astronauts/{astronaut.name.replace(new RegExp(' ', 'g'), '_').replace(new RegExp("'", 'g'), '').toLowerCase()}_{astronaut.agency != null ? astronaut.agency.abbrev.toLowerCase() : 'unavailable'}_{astronaut.nationality.toLowerCase()}_{astronaut.id}" class="relative">Read bio</a>
                                    </span>
                                </td>
                            </tr>
                            {/each}
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing {page} of {totalPages} pages from {astronautsCount} astronauts
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" on:click={showPrev(page - 1)} disabled={page - 1 == 0 ? true : false}>
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r" on:click={showNext(page + 1)} disabled={page + 1 > totalPages ? true : false}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>