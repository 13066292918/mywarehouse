import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    letter:'',
    city:window.localStorage.getItem('city1')||'广州'
  },
  mutations:{
    chageLetter(state,letter){
      state.letter=letter
    },
    chageCity(state,city){
      state.city=city
      window.localStorage.setItem('city1',city)
    }
  },

})
