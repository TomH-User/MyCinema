<template>
  <div class="w-full ml-24 p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
    <div class="flex flex-col mb-10 p-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="@/assets/images/salle-cinema.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{projection.cinemaCity}}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ projection.cinemaName }}  </p>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Disponible du {{ projection.startDate }} au {{ projection.endDate }}
              le {{projection.jour1}} à {{projection.horaire1}},
              le {{projection.jour2}} à {{projection.horaire2}} et le
              le {{projection.jour3}} à {{projection.horaire3}}
        </div>
      </div>
    </div>
  </div>

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

</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(['projection']);

const projection = ref(props.projection);


</script>
