<script setup>
import { RouterView } from 'vue-router'
// 1. Importi il mattoncino che hai appena creato
import Header from './components/Header.vue' 
</script>

<template>

  <Header /> 
  
  <hr>

  
  <RouterView /> 
</template>