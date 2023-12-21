<!-- SERVICE 3 RECHERCHE DE VILLE PAR L'ENTREE D'UN FILM-->
<template>
  <div>
    <div class="text-2xl mt-2 font-semibold mb-5">
      <h1 class="ml-20">Recherche de films</h1>
    </div>

    <!-- Formulaire de recherche -->
    <div class="ml-10 mb-10 w-96">
      <form @submit.prevent="getMovieAndProjections">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Titre du Film</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="movieTitle" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titre du film" required>
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
    </div>



    <div v-if="movieInfo">
      <div class="container flex mx-auto mt-15 border-b border-gray-600 pb-5">
        <img :src="movieInfo.posterUrl" alt="Movie Poster" class="w-64" />
        <div class="ml-24">
          <h1 class="text-2xl mt-8 font-semibold">{{movieInfo.title}}</h1>
          <div>
            <span class="text-gray-500 text-sm"> Durée : {{movieInfo.duration}} minutes </span><br>
            <span class="text-gray-500 text-sm"> Langue : {{movieInfo.language}} </span><br>
            <span class="text-gray-500 text-sm"> Interdit aux moins de {{movieInfo.minimumAgeRequired}} ans </span>
          </div>

          <p class="mt-5">During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure</p>

          <div class="mt-5">
            <div class="flex">
              <div class="flex flex-col mt-5 mr-5">
                <span>{{movieInfo.realisateur}}</span>
                <span class="text-gray-500">Réalisateur</span>
              </div>
              <div class="flex flex-col mt-5 mr-5">
                <span>{{movieInfo.mainActor1}}</span>
                <span class="text-gray-500">Acteur principal</span>
              </div>
              <div class="flex flex-col mt-5 mr-5">
                <span>{{movieInfo.mainActor2}}</span>
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
    </div>

    <!-- Résultats de la recherche de villes -->
    <div class ="mt-10" v-if="projections">
      <div class="grid w-full grid-cols-1 ml-24  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        <ProjectionsItem v-for="projection in projections" :key="projection.projectionId" :projection="projection"  />
      </div>
    </div>

    <!-- Message d'erreur si aucune ville trouvée ou aucune information trouvée -->
    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ProjectionsItem from "@/components/items/ProjectionsItem.vue";

const movieTitle = ref('');
const movieInfo = ref(null);
const projections = ref([]);
const errorMessage = ref('');
const moviePosterUrl = ref('');

const getMovieAndProjections = async () => {
  try {
    const encodedTitle = encodeURIComponent(movieTitle.value);
    //Récupération d'un movie
    const movieResponse = await axios.get(`/api/movies/search/${encodedTitle}`);
    const movieData = movieResponse.data;
    await fetchMoviePoster(movieData.title);
    movieInfo.value = {
      ...movieData,
      posterUrl: moviePosterUrl.value,
    };

    // Récupération des projections liés au movie_title
    const projectionsResponse = await axios.get(`/api/movies/${encodedTitle}/projections`);
    projections.value = projectionsResponse.data;

    errorMessage.value = ''; // Réinitialiser le message d'erreur
  } catch (error) {
    movieInfo.value = null;
    projections.value = [];
    errorMessage.value = 'Aucune information trouvée pour ce film';
    console.error('Erreur lors de la récupération des informations du film :', error);
  }
};

// Fonction pour récupérer l'image du film
const fetchMoviePoster = async (title) => {
  const omdbUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=ace5b0b7`;
  const response = await fetch(omdbUrl);
  const data = await response.json();
  // Vérification de la requête OMDB
  if (data.Response === 'True') {
    // Récupération de l'adresse du poster
    moviePosterUrl.value = data.Poster;
  }
};
</script>
















<!--      <form @submit.prevent="getMovieAndCities">
        <label for="movieTitle">Titre du film : </label>
        <input v-model="movieTitle" type="text" id="movieTitle" class="text-black" placeholder="Nom du film" required />
        <button class="ml-2" type="submit">Rechercher</button>
      </form>-->

<!--

<h2>Informations sur le film :</h2>
<p><strong>Titre :</strong> {{ movieInfo.title }}</p>
<p><strong>Realisateur :</strong> {{ movieInfo.realisateur }}</p>
<p><strong>Durée :</strong> {{ movieInfo.duration }} minutes</p>
<p><strong>Langue :</strong> {{ movieInfo.language }}</p>
<p><strong>Acteurs :</strong> {{ movieInfo.mainActor1 }}</p>
<p><strong>Acteurs :</strong> {{ movieInfo.mainActor2 }}</p>

Affichage de l'image du film avec lien
<a :href="movieInfo.posterUrl" target="_blank">&ndash;&gt;
<img :src="movieInfo.posterUrl" alt="Poster du film" style="max-width: 300px; max-height: 400px;" />
</a>-->




<!--    <div v-if="projections.length > 0">
      <h2>Villes pour le film :</h2>
      <ul>
        <li v-for="projection in projections" :key="projection">
          {{ projection.cinemaCity }}, {{projection.cinemaName}} :
          Disponible du {{ projection.startDate }} au {{ projection.endDate }}
          le {{projection.jour1}} à {{projection.horaire1}},
          le {{projection.jour2}} à {{projection.horaire2}} et le
          le {{projection.jour3}} à {{projection.horaire3}} <br>
        </li>
      </ul>
    </div>-->