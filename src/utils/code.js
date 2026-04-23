import { ref } from 'vue'

let clickCount = 0;

export function attivaContatoreClick() {
  document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 10) {
      alert("Ti sta piacendo il nostro sito, lascia una recensione!");
    }
  });
}


// Funzione esterna per la pagina delle Recensioni
export function gestisciRecensione() {
  const testoDescrizione = ref('');
  
  // Esportiamo la variabile così la pagina può usarla
  return {
    testoDescrizione
  }
}

// Funzione esterna per la pagina di Login
export function gestisciLogin() {
  const username = ref('');
  
  // Esportiamo la variabile così la pagina può usarla
  return {
    username
  }
}