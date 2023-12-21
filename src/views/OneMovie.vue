<template>
<div class="container flex mx-auto mt-15 border-b border-gray-600 pb-5">
   <img :src="movieDetails.posterUrl" alt="Movie Poster" class="w-64" />
      <div class="ml-24">
          <h1 class="text-2xl mt-10 font-semibold">{{movieDetails.title}}</h1>
          <div class="flex">
            <span class="text-gray-500 text-sm"> | 2019-10-02 Crime, Thriller, Drame</span>
          </div>

          <p class="mt-5">During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure</p>

          <div class="mt-5">
            <div class="flex">
              <div class="flex flex-col mt-5 mr-5">
                <span>{{movieDetails.realisateur}}</span>
                <span class="text-gray-500">Réalisateur</span>
              </div>
              <div class="flex flex-col mt-5 mr-5">
                <span>{{movieDetails.mainActor1}}</span>
                <span class="text-gray-500">Acteur principal</span>
              </div>
              <div class="flex flex-col mt-5 mr-5">
                <span>{{movieDetails.mainActor2}}</span>
                <span class="text-gray-500">Acteur principal</span>
              </div>
            </div>
          </div>
        <div class="mt-5">
          <a href="https://www.youtube.com/watch?v=FV3bqvOHRQo" target="_blank" class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black hover:opacity-60">
            <svg class="w-6 fill-curren icon line-colort" width="25px" height="25px" viewBox="0 0 24 24" id="play" data-name="Line Color" xmlns="http://www.w3.org/2000/svg"><polygon id="secondary" points="16 12 10 16 10 8 16 12" style="fill: none; stroke: rgb(1, 1, 1); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon><circle id="primary" cx="12" cy="12" r="9" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></svg>
            <span class="ml-3">Play Trailer</span>
          </a>
        </div>
      </div>
</div>
  <CineForMovie/>
</template>

<!-- Your component -->
<script setup>
import {ref, onMounted } from "vue";
import {useRoute} from "vue-router";
import CineForMovie from "@/components/CineForMovie.vue";

const route = useRoute();
const movieId = ref(route.params.id);



const movieDetails = ref({});

// Function to fetch movie details
const fetchMovieDetails = async (id) => {
  const response = await fetch(`/api/movies/searchId/${id}`);
  return await response.json();
};

// Function to fetch movie poster
const fetchMoviePoster = async (title) => {
  const omdbUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=ace5b0b7`;
  const response = await fetch(omdbUrl);
  const data = await response.json();

  // Check if the OMDB request was successful
  if (data.Response === 'True') {
    // Retrieve the movie poster URL
    movieDetails.value.posterUrl = data.Poster;
  }
};

onMounted(async () => {
  // Fetch movie details
  movieDetails.value = await fetchMovieDetails(movieId.value);

  // Fetch movie poster
  await fetchMoviePoster(movieDetails.value.title);
});
</script>




<style scoped>

</style>