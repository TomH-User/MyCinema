<template>
  <div class="ml-24 p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1">

    <a href="#" class="flex flex-col mb-10 p-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="@/assets/images/salle-cinema.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cinema Name</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cinema Adress</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">City</p>
      </div>
    </a>

    <a href="#" class="flex flex-col mb-10 p-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="@/assets/images/salle-cinema.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cinema Name</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cinema Adress</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">City</p>
      </div>
    </a>
    <a href="#" class="flex flex-col mb-10 p-3  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="@/assets/images/salle-cinema.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cinema Name</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cinema Adress</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">City</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CinemaList',
  data() {
    return {
      cinema_list:''
    }
  },
  mounted() {
    fetch ("/api/cinemas")
        .then((response) => response.text())
        .then ((data) => {
          this.cinema_list = data;
        })
  }
}
</script>
