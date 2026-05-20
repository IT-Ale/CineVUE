import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  function login(userData) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
  }

  function loadUserFromStorage() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  return { user, login, logout, loadUserFromStorage }
})
