<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

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
header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 80px;
}

.header-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  position: relative;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.theme-switch-wrapper {
  position: absolute; /* Take it out of flow */
  right: 0;           /* Stick to the right */
  display: flex;
  align-items: center;
  gap: 10px;
}

.mode-text {
  color: var(--white);
  font-weight: bold;
  font-size: 14px;
  min-width: 40px;
}

/* Simple Slider styles */
.theme-switch {
  display: inline-block;
  height: 26px;
  position: relative;
  width: 50px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 18px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 18px;
}

input:checked + .slider {
  background-color: var(--primary);
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>