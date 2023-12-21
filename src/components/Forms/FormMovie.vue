<template>
  <div class="bg-gray-900 text-white flex items-center h-screen">
    <div class="background-container">
      <div class="image-container ml-6">
        <img src="@/assets/images/film.jpg" alt="Image de fond" class="w-full h-full object-cover">
      </div>
      <div class="form-container mt-10 ml-24 max-w-md mx-auto text-white-50 p-4 bg-gray-900 rounded shadow">
        <form @submit.prevent="submitForm" class="max-w-md">
          <h1 class="text-2xl font-bold mb-4 text-white">Ajouter votre film</h1>

          <div class="relative z-0 w-full mb-8 group">
            <input v-model="movie.title" type=text name="Titre" id="movie.title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="title"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titre</label>
          </div>

          <div class="relative z-0 w-full mb-10 group">
            <input v-model="movie.realisateur" type=text name="realisateur" id="realisateur" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="movie.realisateur" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Réalisateur</label>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-10 group">
              <input v-model="movie.mainActor1" type="text" name="main_actor1" id="main_actor1" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="movie.main_actor1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acteurs principaux</label>
            </div>
            <div class="relative z-0 w-full mb-10 group">
              <input v-model="movie.mainActor2" type="text" name="main_actor2" id="main_actor2" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="movie.main_actor2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acteurs principaux</label>
            </div>

          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-10 group">
              <input v-model="movie.language" type=text name="Langue" id="language" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="movie.language" type="text" id="language" required
                     class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Langue</label>
            </div>
            <div class="relative z-0 w-full mb-10 group">
              <input v-model="movie.minimumAgeRequired" type="number" name="minimum_age_required" id="minimum_age_required" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="movie.minimum_age_required" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age minimum requis</label>
            </div>
          </div>

          <div class="relative z-0 w-full mb-10 group">
            <input v-model="movie.duration" type="number" name="duration" id="duration" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="movie.duration" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Durée du film</label>
          </div>


          <button type="submit" class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Soumettre</button>
        </form>

        <div v-if="successMessage" class="mt-4">
          <p class="text-green-600">{{ successMessage }}</p>
          <router-link to="/publicationProjection" class="text-blue-400 font-semibold underline">Cliquez ici pour ajouter une Projection!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref } from 'vue';
import axios from 'axios';

const movie = ref({
  title: '',
  duration: 0,
  language: '',
  realisateur: '',
  mainActor1: '',
  mainActor2: '',
  minimumAgeRequired: 0,
  imageURL: '',
  trailerURL: '',
  validate: false
});

const successMessage = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('api/movies/create', movie.value);

    console.log('Backend response:', response.data);

    successMessage.value = 'Le Film a bien été créé !';

  } catch (error) {
    console.error('Error sending data to backend:', error);
  }
};
</script>

<style scoped>
.background-container {
  display: flex;
  height: 100vh;
}

.image-container {
  flex: 1;
  background-image: url('@/assets/images/film.jpg');
  background-size: cover;
}

.form-container {
  flex: 1;
  max-width: 50%; /* Ajustez la largeur du formulaire selon vos besoins */
  padding: 20px;
}
</style>





<!--
<template>
  <div class= "bg-gray-900 text-white flex items-center h-screen">
        <div class="max-w-md mx-auto text-white-50 mt-12 p-4 bg-gray-900 rounded shadow">

&lt;!&ndash;          <div class="w-1/2 h-full bg-cover bg-left" :style="background-image: url('@/assets/images/cinema.jpeg');"></div>&ndash;&gt;
          <div class="background-container">
              <form @submit.prevent="submitForm" class="max-w-md mx-auto">
                <h1 class="text-2xl font-bold mb-4 text-white ">Ajouter votre film</h1>

                <div class="relative z-0 w-full mb-8 group">
                  <input type=text name="Titre" id="movie.title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="title"
                         class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titre</label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input type=text name="realisateur" id="realisateur" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="movie.realisateur" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Réalisateur</label>
                </div>


                <div class="grid md:grid-cols-3 md:gap-6">
                  <div class="relative z-0 w-full mb-10 group">
                    <input type="text" name="main_actor1" id="main_actor1" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="movie.main_actor1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acteurs principaux</label>
                  </div>
                  <div class="relative z-0 w-full mb-10 group">
                    <input type="text" name="main_actor2" id="main_actor2" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="movie.main_actor2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acteurs principaux</label>
                  </div>
                  <div class="relative z-0 w-full mb-10 group">
                    <input type="text" name="main_actor3" id="main_actor3" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="movie.main_actor3" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Acteurs principaux</label>
                  </div>

                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-10 group">
                    <input type=text name="Langue" id="language" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="movie.language" type="text" id="language" required
                           class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Langue</label>
                  </div>
                  <div class="relative z-0 w-full mb-10 group">
                    <input type="number" name="minimum_age_required" id="minimum_age_required" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="movie.minimum_age_required" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age minimum requis</label>
                  </div>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input type="number" name="duration" id="duration" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="movie.duration" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Durée du film</label>
                </div>
                <button type="submit" class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Soumettre</button>
              </form>


              <div v-if="successMessage" class="mt-4">
                <p class="text-green-600">{{ successMessage }}</p>
                <router-link to="/publicationProjection" class="text-blue-400 font-semibold underline">Cliquez ici pour ajouter une Projection!</router-link>
              </div>
            </div>
          </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const movie = ref({
  title: '',
  duration: 0,
  language: '',
  realisateur: '',
  mainActor1: '',
  mainActor2: '',
  minimumAgeRequired: 0,
  imageURL: '',
  trailerURL: '',
  validate: false
});

const successMessage = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('api/movies/create', movie.value);

    console.log('Backend response:', response.data);

    successMessage.value = 'Le Film a bien été créé !';

  } catch (error) {
    console.error('Error sending data to backend:', error);
  }
};
</script>

<style scoped>
.background-container {
  display: flex;
  height: 100vh; /* Ajustez la hauteur comme nécessaire */
  background-image: url('@/assets/images/cinema.jpeg'); /* Remplacez par le chemin de votre image */
  background-size: cover;
}

.form-container {
  flex: 1;
  padding: 20px;
}
</style>
-->




<!--  <div class="max-w-md mx-auto mt-12 p-4 bg-gray-900 rounded shadow">
    <h1 class="text-white text-center font-semibold text-3xl mb-5">Publier un Film !</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-5">
        <label for="title" class="block text-sm font-semibold text-white">Titre</label>
        <input v-model="movie.title" type="text" id="title" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="duration" class="block text-sm font-semibold text-white">Durée (minutes)</label>
        <input v-model="movie.duration" type="number" id="duration" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="language" class="block text-sm font-semibold text-white">Langue</label>
        <input v-model="movie.language" type="text" id="language" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="realisateur" class="block text-sm font-semibold text-white">Réalisateur</label>
        <input v-model="movie.realisateur" type="text" id="realisateur" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="main_actor1" class="block text-sm font-semibold text-white">Acteur principal 1</label>
        <input v-model="movie.mainActor1" type="text" id="main_actor1" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="main_actor2" class="block text-sm font-semibold text-white">Acteur principal 2</label>
        <input v-model="movie.mainActor2" type="text" id="main_actor2"
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="minimum_age_required" class="block text-sm font-semibold text-white">Age Minimum</label>
        <input v-model="movie.minimumAgeRequired" type="number" id="minimum_age_required" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="imageURL" class="block text-sm font-semibold text-white">Image URL</label>
        <input v-model="movie.imageURL" type="text" id="imageURL" required
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-5">
        <label for="trailerURL" class="block text-sm font-semibold text-white">Trailer URL</label>
        <input v-model="movie.trailerURL" type="text" id="trailerURL"
               class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      </div>

      <div class="mb-2 text-center">
        <button type="submit" class="bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
          Publier
        </button>
      </div>
    </form>

    <div v-if="successMessage" class="mt-4">
      <p class="text-green-600">{{ successMessage }}</p>
      <router-link to="/publicationProjection" class="text-blue-400 font-semibold underline">Cliquez ici pour ajouter une Projection!</router-link>
    </div>
  </div>-->