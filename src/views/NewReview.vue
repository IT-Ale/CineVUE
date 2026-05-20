<script>
import * as Api from '@/utils/apis.js'
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  data() {
    return {
      films: [],
      newReview: {
        film_id: '',
        utente_id: '', 
        voto: 5,
        commento: '',
        data: new Date().toISOString().slice(0, 10),
        num_like: 0,
        num_dislike: 0
      },
      message: '',
      isError: false
    }
  },
  methods: {
    async fetchFilms() {
      try {
        this.films = await Api.getFilms()
      } catch (error) {
        console.error("Errore nel caricamento dei film:", error)
      }
    },
    async submitReview() {
      if (!this.authStore.user) {
        this.message = "Devi effettuare il login per pubblicare una recensione."
        this.isError = true
        return
      }

      if (!this.newReview.film_id || !this.newReview.commento) {
        this.message = "Per favore, compila tutti i campi."
        this.isError = true
        return
      }

      this.newReview.utente_id = this.authStore.user.username

      try {
        const result = await Api.addReview(this.newReview)
        if (result.message) {
          this.message = result.message
          this.isError = false
          this.newReview.commento = ''
          this.newReview.film_id = ''
          this.newReview.voto = 5
        } else if (result.error) {
          this.message = "Errore: " + result.error
          this.isError = true
        }
      } catch (error) {
        this.message = "Errore durante l'invio."
        this.isError = true
      }
    }
  },
  mounted() {
    this.fetchFilms()
  }
}
</script>

<template>
  <div class="col-12">
    <div id="intro">
      <h1>Pubblica una Recensione</h1>
    </div>
  </div>

  <main class="col-12">
    <!-- Usiamo la classe new-review-page già definita nel tuo main.css per coerenza -->
    <div class="new-review-page">
      <h2>Dettagli Recensione</h2>
      
      <form @submit.prevent="submitReview">
        
        <div class="form-item">
          <label for="film_id">Film:</label>
          <select v-model="newReview.film_id" id="film_id">
            <option disabled value="">Scegli un film...</option>
            <option v-for="film in films" :key="film.id" :value="film.id">
              {{ film.titolo }}
            </option>
          </select>
        </div>

        <br>

        <div class="form-item">
          <label for="commento">Recensione:</label>
          <textarea v-model="newReview.commento" id="commento" rows="4" placeholder="Cosa ne pensi?"></textarea>
        </div>

        <br>

        <div class="form-item">
          <label for="voto">Voto:</label>
          <select v-model.number="newReview.voto" id="voto">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <br>

        <button type="submit">Pubblica</button>

        <div v-if="message" class="status-box" :class="{ 'error-msg': isError, 'success-msg': !isError }">
          {{ message }}
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
/* Stili spostati in main.css */
</style>
