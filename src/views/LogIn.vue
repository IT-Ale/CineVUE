<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import * as Api from '../utils/apis.js'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)

const handleLogin = async () => {
  if (!username.value || !password.value) {
    message.value = "Inserisci username e password"
    isError.value = true
    return
  }

  try {
    const result = await Api.login({ username: username.value, password: password.value })
    if (result.user) {
      authStore.login(result.user)
      message.value = "Login effettuato con successo!"
      isError.value = false
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } else {
      message.value = result.error || "Errore durante il login"
      isError.value = true
    }
  } catch (error) {
    message.value = "Errore di connessione"
    isError.value = true
  }
}
</script>

<template>
  <div class="login-container">
    <article>
      
      <!-- Inizio del riquadro di login -->
      <div class="login-box">
        
        <!-- Il titolo ora è DENTRO il riquadro -->
        <h2>Accedi a Cineva</h2>
        
        <form @submit.prevent="handleLogin">
          <div>
            <label for="username">Username:<br></label>
            <input 
              type="text" 
              id="username" 
              name="username"
              v-model="username"
              maxlength="20"
            >
          </div>

          <br>

          <div>
            <label for="password">Password:<br></label>
            <input 
              type="password" 
              id="password" 
              name="password"
              v-model="password"
            >
          </div>

          <br>

          <button type="submit" class="login-btn">Accedi</button>

          <div v-if="message" :class="isError ? 'error-msg' : 'success-msg'" style="margin-top: 15px;">
            {{ message }}
          </div>
        </form>
      </div>
      <!-- Fine del riquadro -->

    </article>
  </div>
</template>

<style scoped>
/* Stili spostati in main.css */
</style>
