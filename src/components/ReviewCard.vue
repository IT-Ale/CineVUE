<script>
export default {
  props: {
    titolo: {
      type: String,
      required: true
    },
    commento: {
      type: String,
      required: true
    },
    voto: {
      type: Number,
      required: true
    },
    num_like: {
      type: Number,
      default: 0
    },
    num_dislike: {
      type: Number,
      default: 0
    }
  }
}
</script>

<template>
  <article class="newsCard">
    <h4 class="review-content">{{ titolo }}</h4>
    <p class="review-content">
      {{ commento }}
    </p>
    <p><b>Giudizio: {{ voto }}/5</b> - <b>Likes: {{ num_like }}</b> - <b>Dislikes: {{ num_dislike }}</b></p>
  </article>
</template>

<style scoped>
.newsCard {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}
</style>
