<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
  }
})
</script>

<template>
  <header>
    <div class="header-content">
      <div class="logo-container">
        <RouterLink to="/">
          <img src="../assets/img/logo.png" alt="Logo Cineva" width="200">
        </RouterLink>
      </div>

      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" :checked="isDark" @change="toggleDarkMode" />
          <div class="slider round"></div>
        </label>
        <span class="mode-text">{{ isDark ? 'Dark' : 'Light' }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Stili spostati in main.css */
</style>
