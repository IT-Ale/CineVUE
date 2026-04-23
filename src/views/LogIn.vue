<script setup>
import { RouterLink } from 'vue-router'
import { gestisciLogin } from '../utils/code.js'

// 1. Accendiamo la funzione ed estraiamo la variabile reattiva
const { username } = gestisciLogin()
</script>

<template>
  <div class="login-container">
    <article>
      <h2>Accedi a Cineva</h2>
      <form @submit.prevent>
        <div>
          <label for="username">Username:<br></label>
          
          <input 
            type="text" 
            id="username" 
            name="username"
            v-model="username"
            maxlength="20"
          >
          <p v-if="username.length > 0 && username.length < 5" style="color: red; font-size: 14px;"> Inserisci almeno 5 caratteri.</p>
        </div>

        <br>

        <div>
          <label for="password">Password:<br></label>
          <input type="password" id="password" name="password">
        </div>

        <br>

        <button type="submit">Accedi</button>
      </form>
    </article>
  </div>
</template>