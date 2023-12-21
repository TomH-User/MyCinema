<template>
  <div class="mx-5">
    <h2 class="border-b border-gray-600 uppercase ml-3 mb-3 mt-5 text-yellow-500 text-lg font-semibold">
      Liste des films
    </h2>
    <div class="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-9">
      <MovieItem v-for="movie in movieList" :key="movie.movieId" :movieTitle="movie.title" />
    </div>
  </div>
</template>

<script setup>
import MovieItem from "@/components/items/MovieItem.vue";

import {onMounted, ref} from "vue";

const movieList = ref([]);

onMounted(async () => {
  const response = await fetch("/api/movies");
  movieList.value = await response.json();
});
</script>