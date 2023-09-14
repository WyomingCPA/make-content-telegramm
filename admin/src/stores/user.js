import { defineStore } from 'pinia'
import { useApi } from '../api/useAPI.js'
import axios from 'axios'
const api = useApi()

export const useUserStore = defineStore({
  id: 'user',

  state: () =>
    JSON.parse(localStorage.getItem('USER_INFO')) ?? {
      id: null,
      name: 'guest',
      email: null,
    },

  actions: {
    updateState(payload) {
      let newUserState = { ...this.state, ...payload }
      localStorage.removeItem('USER_INFO')
      localStorage.setItem('USER_INFO', JSON.stringify(newUserState))
      this.$reset()
    },

    async storeInfo() {
      let { data: userInfo } = await axios.get('api/user', { withCredentials: true })
      localStorage.setItem('USER_INFO', JSON.stringify(userInfo))
      this.$reset()
    },
  },
})
