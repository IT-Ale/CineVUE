<script setup>
import { RouterLink } from 'vue-router'
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

    <article class="newsCard">
      <h4 class="review-content">MommyDemi - "Ancora"? No grazie</h4>
      <p class="review-content">Ma davvero? Davvero Mikey Madison ha portato a casa l’Oscar per la miglior attrice protagonista mentre The Substance e una straordinaria Demi Moore sono state ignorate? Siamo
      davanti all'ennesima dimostrazione che l’Academy è un circo autoreferenziale, più interessato a seguire mode del momento che a premiare il vero talento</p>
      <p><b>Giudizio:</b> 1/5 - <b>Likes:</b> 1.2k - <b>Dislikes:</b> 392</p>
    </article>

    <article class="newsCard">
      <h4 class="review-content">CinephilePaul - "The Bear" è pura ansia (meravigliosa)</h4>
      <p class="review-content">
        Carmy Berzatto non è solo uno chef, è il ritratto del trauma generazionale servito su un piatto d'argento. 
        La regia ti fa sentire l'odore del grasso e il rumore delle stampanti delle comande fin dentro le ossa. 
        Se non avete ancora visto la seconda stagione, state perdendo il miglior pezzo di televisione degli ultimi dieci anni. 
        Date tutti gli Emmy a Jeremy Allen White, subito!
      </p>
      <p><b>Giudizio:</b> 5/5 - <b>Likes:</b> 2.5k - <b>Dislikes:</b> 45</p>
    </article>

    <article class="newsCard">
      <h4 class="review-content">RetroGamer99 - "Joker 2": Un musical? Davvero?</h4>
      <p class="review-content">
        Hanno preso tutto quello che c'era di sporco, cattivo e reale nel primo film e l'hanno trasformato in un 
        duetto canoro infinito. Lady Gaga è sprecata e Joaquin Phoenix sembra quasi annoiato dal suo stesso personaggio. 
        Capisco la voglia di decostruire il mito, ma qui hanno decostruito anche la pazienza degli spettatori. 
        Un sequel che nessuno aveva chiesto e che nessuno ricorderà.
      </p>
      <p><b>Giudizio:</b> 2/5 - <b>Likes:</b> 800 - <b>Dislikes:</b> 1.5k</p>
    </article>
  </main>

  <aside class="col-2">
    <!-- Spazio per banner pubblicitari o suggerimenti -->
  </aside>
</template>

