<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
 <div class="new-review-page">
   <h2>Cineva - Nuova Recensione</h2>
   <form>
      
      <div>
        <label for="titolo">Titolo: </label>
        <input type="text" id="titolo" name="titolo">
      </div>

      <br>

      
      <div>
        <label for="descrizione">Descrizione: </label>
        <textarea id="descrizione" name="descrizione" rows="1"></textarea>
      </div>

      <br>

      <div>
        <span>Tipo: </span>
        <input type="radio" id="film" name="tipologia" value="film">
        <label for="film">Film</label>
        
        <input type="radio" id="serie" name="tipologia" value="serie">
        <label for="serie">Serie TV</label>
      </div>

      <br>


      <div>
        <label for="voto">Voto:</label>
        <select id="voto" name="voto">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <br>

      <button type="submit">Pubblica</button>
    </form>
 </div>
</template>