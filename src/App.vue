<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue' 
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>

  <Header /> 
  
  <NavBar />

  <hr>

  <div class="main-content">
    <RouterView />
  </div>

  <Footer />

</template>