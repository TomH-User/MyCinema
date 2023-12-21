<template>

<!--  <router-link to="/about">About</router-link>
  <router-link to="/connexion">Connexion</router-link>-->
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-secondary">MyCinema</router-link></li>
        <li><router-link to="/movies" class="nav-link px-2 link-secondary">Films</router-link></li>
        <li><router-link to="/cinemas" class="nav-link px-2 link-secondary">Cinémas</router-link></li>
        <li><router-link to="#" class="nav-link px-2 link-secondary">Publier</router-link></li>
      </ul>

      <div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Chercher un film..." aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Rechercher</button>
        </form>
      </div>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-light me-2"><router-link to="/connexion">Se connecter</router-link></button>
        <button type="button" class="btn btn-outline-light me-2"><router-link to="/register">Créer votre compte</router-link></button>
      </div>

    </header>
  </div>
</template>

<script setup>

</script>

<style>

</style>