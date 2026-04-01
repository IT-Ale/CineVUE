<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <!-- 1. Il link del Logo (Perfetto, non toccarlo) -->
    <RouterLink to="/">
      <img src="../assets/img/logo.png" alt="Logo Cineva" width="200">
    </RouterLink>
    <hr>
    <h3>Menu di navigazione</h3>
    <nav>
      <ul>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contacts">Cotacts</RouterLink></li>
        <li><RouterLink to="/rankings">Rankings</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>