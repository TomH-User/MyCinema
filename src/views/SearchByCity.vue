<!-- SERVICE 2 RECHERCHE DE FILM PAR VILLE ET PAR DATE-->
<template>
  <div>
    <div class="text-2xl mt-2 font-semibold mb-5">
      <h1 class="ml-20">Recherche de films par ville et date</h1>
    </div>

    <!-- Formulaire de recherche -->
    <form class="flex ml-10 mt-14 text-white-50" @submit.prevent="searchMovies">
        <label for="cinemaCity"></label>
      <div class="relative z-0 ml-10 w-96 mt-2 mb-4 group">
        <input  v-model="dateChoisi" type="date" name="dateChoisi" id="dateChoisi" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="projection.start_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date choisie</label>
      </div>
        <div class="ml-10 mb-10 w-96">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Votre ville</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input v-model="cinemaCity" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paris" required>
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rechercher</button>
            </div>
        </div>
    </form>

    <div v-if="movies">
      <div class="grid grid-cols-3 ml-24  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <MovieItem v-for="movie in movies" :key="movie.movieId" :movieId="movie.movieId" :movieTitle="movie.title"  />
      </div>
    </div>


    <!-- Message d'erreur si aucun film trouvé -->
    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import MovieItem from "@/components/items/MovieItem.vue";

const cinemaCity = ref('');
const dateChoisi = ref('');
const movies = ref([]);
const errorMessage = ref('');

const searchMovies = async () => {
  try {
    const response = await axios.get(`/api/movies/city/${cinemaCity.value}/${dateChoisi.value}`);
    movies.value = response.data;
    errorMessage.value = ''; // Réinitialiser le message d'erreur
  } catch (error) {
    movies.value = [];
    errorMessage.value = 'Aucun film trouvé pour cette ville et cette date';
    console.error('Erreur lors de la recherche de films :', error);
    console.error('Erreur complète :', error.response || error);
  }
};
</script>


<!--    &lt;!&ndash; Résultats de la recherche &ndash;&gt;
    <div v-if="movies.length > 0">
      <h2>Résultats :</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>-->
