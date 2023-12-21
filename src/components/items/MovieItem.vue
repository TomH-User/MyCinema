<template>
  <div>
    <router-link :to="'/movie/' + movieId">
      <img :src="moviePosterUrl" loading="lazy" class="mb-3 hover:opacity-75 easy-int-out duration-150" :alt="'Image for ' + movieTitle" />
    </router-link>
    <h3 class ="text-xl font-semibold ml-4">{{movieTitle}}</h3>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
const moviePosterUrl = ref('');

const props = defineProps(['movieId', 'movieTitle']);
const movieId = ref(props.movieId);
const movieTitle = ref(props.movieTitle);

onMounted(async () => {
  await fetchMoviePoster(movieTitle.value);
});

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





<!--<template>

  <div>
    <router-link to="/movie/11">
      <img src="@/assets/images/joker.jpg"
           class="mb-3 hover:opacity-75 easy-int-out duration-150" alt="image joker"/>
    </router-link>
    <h3 class ="ml-1">2067</h3>

    <div class="flex">
      <svg width="20px" height="20px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify&#45;&#45;twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"></path></svg>
      <span class="text-gray-300 ml-1">47% | 2020-10-01</span><br/>
    </div>
    <span class="text-sm text-gray-500">Science Fiction, Thriller, Drama</span>
  </div>
</template>

<script setup>

</script>


<style scoped>

</style>-->
