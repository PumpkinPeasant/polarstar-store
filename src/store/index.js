import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    SET_CURRENT_USER(state, userInfo) {
      state.currentUser = userInfo;
    }
  },
  actions: {
    SIGN_UP(context, signUpInfo) {
      axios.post('http://192.168.0.7:5001/api/auth/signUp', signUpInfo).then(() => {
        axios.get('http:///api/account/info').then(response => {
          context.commit('SET_CURRENT_USER', response.data)
        }).catch()
      }).catch()
    },
    SIGN_IN(context, signInInfo) {
      axios.post('http://192.168.0.7:5001/api/auth/signIn', signInInfo).then(() => {
        axios.get('http:///api/account/info').then(response => {
          context.commit('SET_CURRENT_USER', response.data)
        }).catch()
      }).catch()
    }
  },
  modules: {
  }
})
