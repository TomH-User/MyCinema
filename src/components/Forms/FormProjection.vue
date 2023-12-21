<template>
  <div class="bg-gray-900 text-white flex items-center h-screen">
    <div class="background-container">
      <div class="image-container">
        <img src="@/assets/images/projection.jpeg" alt="Image de fond" class="w-full h-full object-cover">
      </div>
      <div class="form-container mt-2 ml-28 max-w-md mx-auto text-white-50 p-4 bg-gray-900 rounded shadow">
        <h1 class="text-2xl font-bold mb-4 text-white-50">Ajouter Projection</h1>
        <form @submit.prevent="submitForm" class="max-w-md">
          <div class="mb-4">
            <label for="movie" class="block text-lg font-semibold text-white">Sélectionnez un Film</label>
            <select v-model="projection.movie" id="movie" required
                    class="text-black bg-gray-300 w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">...</option>
              &lt;!&ndash; Utilisation de v-for pour parcourir la liste des films et afficher leurs titres &ndash;&gt;
              <option v-for="movie in movies" :key="movie.title" :value="movie">
                {{ movie.title }}
              </option>
            </select>
          </div>

          <h3 class="  mb-2 text-blue-400 ">Informations sur votre cinema : </h3>

          <div class="relative z-0 w-full mb-4 group">
            <input  v-model="projection.cinemaName" type=text name="cinema_name" id="cinema_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="projection.cinema_name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom du cinema</label>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.cinemaAddress" type="text" name="cinema_adress" id="cinema_adress" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.cinema_adress" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse du cinema</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input  v-model="projection.cinemaCity" type="text" name="cinema_city" id="cinema_city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.cinema_city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ville du cinema</label>
            </div>
          </div>

          <h3 class="  mb-6 text-blue-400">Dates de projection du film : </h3>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.startDate" type="date" name="start_date" id="start_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.start_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date de début</label>
            </div>
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.endDate" type="date" name="end_date" id="end_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.end_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date de fin</label>
            </div>
          </div>

          <h3 class=" mb-6 text-blue-400 ">Jours de la semaine de projection du film : </h3>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.jour1" type="text" name="jour1" id="jour1" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.jour1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Premier jour</label>
            </div>
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.horaire1" type="text" name="hour1" id="hour1" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.hour1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Horraire</label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.jour2" type="text" name="jour2" id="jour2" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.jour2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Second jour</label>
            </div>
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.horaire2" type="text" name="hour2" id="hour2" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.hour2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Horraire</label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.jour3" type="text" name="jour3" id="jour3" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.jour3" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Troisième jour</label>
            </div>
            <div class="relative z-0 w-full mb-4 group">
              <input  v-model="projection.horaire3" type="text" name="hour3" id="hour3" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="projection.hour3" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Horraire</label>
            </div>
          </div>

          <div class="mb-4 flex">
            <label for="subtitles" class="block text-lg mt-2 font-semibold text-gray-500">Sous-titres</label>
            <input v-model="projection.subtitles" type="checkbox" id="subtitles"
                   class="text-black ml-3 mt-2  p-2 border rounded-md focus:outline-none focus:border-blue-500">
          </div>

          <button type="submit" class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Soumettre</button>
        </form>

        <div v-if="successMessage" class="mt-4">
          <p class="text-green-600">{{ successMessage }}</p>
          <router-link to="/" class="text-blue-400 font-semibold underline">Cliquez ici pour retourner à la page d'Accueil</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const projection = ref({
  movie: null,
  horaire1: '',
  horaire2: '',
  horaire3: '',
  startDate: '',
  endDate: '',
  jour1: '',
  jour2: '',
  jour3: '',
  cinemaName: '',
  cinemaCity: '',
  cinemaAddress: '',
  subtitles: false,
});

const movies = ref([]); // Liste pour stocker les films existants

const successMessage = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('api/projections/create', projection.value);
    console.log('Backend response:', response.data);
    successMessage.value = 'Projection created successfully';
  } catch (error) {
    console.error('Error sending data to backend:', error);
  }
};

// Charger la liste des films au moment du montage du composant
onMounted(async () => {
  try {
    const response = await axios.get('api/movies');
    movies.value = response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
});
</script>

<style scoped>
.background-container {
  display: flex;
  height: 100vh;
}

.image-container {
  flex: 1;
  background-image: url('@/assets/images/cinema.jpeg');
  background-size: cover;
}

.form-container {
  flex: 1;
  max-width: 50%; /* Ajustez la largeur du formulaire selon vos besoins */
  padding: 20px;
}
</style>





<!--
<div>
<form @submit.prevent="submitForm" class="max-w-md mx-auto mt-8 p-4 bg-gray-900 rounded shadow">
  <div class="mb-4">
    <label for="movie" class="block text-lg font-semibold text-white">Sélectionnez un Film</label>
    <select v-model="projection.movie" id="movie" required
            class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
      <option value="">...</option>
      &lt;!&ndash; Utilisation de v-for pour parcourir la liste des films et afficher leurs titres &ndash;&gt;
      <option v-for="movie in movies" :key="movie.title" :value="movie">
        {{ movie.title }}
      </option>
    </select>
  </div>

  &lt;!&ndash; Ajouter une section informative &ndash;&gt;
  <div class="text-gray-300 text-base mb-6">
    Votre film est introuvable ?
    <router-link to="/publisherMovie" class="text-blue-400 underline">Cliquez ici pour l'ajouter!</router-link>
  </div>

  <div class="mb-4">
    <label for="jour1" class="block text-lg font-semibold text-white">Premier Jour</label>
    <input v-model="projection.jour1" type="text" id="jour1"
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-10">
    <label for="horaire1" class="block text-lg font-semibold text-white">Horaire séance n°1</label>
    <input v-model="projection.horaire1" placeholder="14:30:00" type="text" id="horaire1" required
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-4">
    <label for="jour2" class="block text-lg font-semibold text-white">Deuxième Jour</label>
    <input v-model="projection.jour2" type="text" id="jour2"
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-10">
    <label for="horaire2" class="block text-lg font-semibold text-white">Horaire séance n°2</label>
    <input v-model="projection.horaire2" placeholder="16:30:00" type="text" id="horaire2"
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-4">
    <label for="jour3" class="block text-lg font-semibold text-white">Troisième Jour</label>
    <input v-model="projection.jour3" type="text" id="jour3"
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-10">
    <label for="horaire3" class="block text-lg font-semibold text-white">Horaire séance n°3</label>
    <input v-model="projection.horaire3" placeholder="18:30:00" type="text" id="horaire3"
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-4">
    <label for="start_date" class="block text-lg font-semibold text-white">Première date de projection</label>
    <input v-model="projection.startDate" type="date" id="start_date" required
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-8">
    <label for="end_date" class="block text-lg font-semibold text-white">Dernière date de projection</label>
    <input v-model="projection.endDate" type="date" id="end_date" required
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>



  <div class="mb-4">
    <label for="cinema_name" class="block text-lg font-semibold text-white">Nom du Cinéma</label>
    <input v-model="projection.cinemaName" placeholder="UGC Gaumont" type="text" id="cinema_name" required
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-4">
    <label for="cinema_city" class="block text-lg font-semibold text-white">Ville</label>
    <input v-model="projection.cinemaCity" placeholder="Paris" type="text" id="cinema_city" required
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-4">
    <label for="cinema_address" class="block text-lg font-semibold text-white">Adresse</label>
    <input v-model="projection.cinemaAddress" placeholder=" 66 bis Av. des Gobelins, 75013 Paris" type="text" id="cinema_address" required
           class="text-black w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-4 flex">
    <label for="subtitles" class="block text-lg mt-2 font-semibold text-white">Sous-titres</label>
    <input v-model="projection.subtitles" type="checkbox" id="subtitles"
           class="text-black ml-3 mt-2  p-2 border rounded-md focus:outline-none focus:border-blue-500">
  </div>

  <div class="mb-2 text-center">
    <button type="submit" class="bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
      Publier
    </button>
  </div>
</form>

<div v-if="successMessage" class="mt-4">
  <p class="text-green-600">{{ successMessage }}</p>
</div>
</div>-->
