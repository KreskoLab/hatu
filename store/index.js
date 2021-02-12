  export const state = () => ({
    city: {
      name: "Київ",
      code: "kvartiry-kiev"
    }
  })
  
  export const mutations = {
    updateCity(state, newCity){
      this.$cookies.set('city', newCity)
      state.city = newCity
    }
  }

  export const actions = {
    check ({ commit, state }) {
      if( !this.$cookies.get('city') ){
        commit('updateCity', state.city)
      }
      else{
        commit('updateCity', this.$cookies.get('city'))
      }
    }
  }

  export const getters = {
    getCity: (state) => {
      return state.city
    }
  }