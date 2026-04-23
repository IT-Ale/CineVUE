<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue' 
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import { attivaContatoreClick } from './utils/code.js'
attivaContatoreClick();
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