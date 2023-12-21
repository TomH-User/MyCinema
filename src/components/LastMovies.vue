<template>
  <div class="mx-5">

    <h2 class="border-b border-gray-600 uppercase ml-3 mb-3 mt-5 text-yellow-500 text-lg font-semibold">
      Films à l'affiche
    </h2>
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <MovieItem v-for="movie in movieList" :key="movie.movieId" :movieId="movie.movieId" :movieTitle="movie.title" />
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

<style scoped>
</style>
