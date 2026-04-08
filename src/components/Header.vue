<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="../assets/img/logo.png" alt="Logo Cineva" width="200">
    </RouterLink>
    <hr>
    </header>
     <h3>Menu di navigazione</h3>
  <nav>
    <ul>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contacts">Contacts</RouterLink></li>
      <li><RouterLink to="/rankings">Rankings</RouterLink></li>
    </ul>
  </nav>
</template>