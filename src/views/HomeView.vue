<script>
import ReviewCard from '@/components/ReviewCard.vue'
import * as Api from '@/utils/apis.js'

export default {
  components: {
    ReviewCard
  },
  data() {
    return {
      reviews: []
    }
  },
  methods: {
    async getReviews() {
      try {
        const data = await Api.getReviews()
        this.reviews = data
      } catch (error) {
        console.error("Errore nel caricamento delle recensioni:", error)
      }
    }
  },
  mounted() {
    this.getReviews()
  }
}
</script>

<template>
  <div class="col-12">
    <div id="intro">
      <h1>Benvenuti su Cineva</h1>
      <p>
        Su <i>Cineva</i> potete scrivere recensioni su <u>film e serie TV</u> 
        e condividere i vostri pensieri con la <b>community</b>!
      </p>
    </div>
  </div>

  <aside class="col-2">
    <!-- Spazio vuoto o menu laterale -->
  </aside>

  <main class="col-8">
    <h2 class="review-title">Recensioni in evidenza</h2>

    <!-- Filtriamo per voto > 3 come richiesto dall'esercizio della Lezione 8 -->
    <div v-for="review in reviews" :key="review.id">
      <ReviewCard 
        v-if="review.voto > 3"
        :titolo="review.titolo"
        :commento="review.commento"
        :voto="review.voto"
        :num_like="review.num_like"
        :num_dislike="review.num_dislike"
      />
    </div>

    <h2 class="review-title" style="margin-top: 30px;">Tutte le recensioni</h2>
    <ReviewCard 
      v-for="review in reviews" 
      :key="'all-'+review.id"
      :titolo="review.titolo"
      :commento="review.commento"
      :voto="review.voto"
      :num_like="review.num_like"
      :num_dislike="review.num_dislike"
    />
  </main>

  <aside class="col-2">
    <!-- Spazio per banner pubblicitari o suggerimenti -->
  </aside>
</template>
