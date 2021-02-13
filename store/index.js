  export const state = () => ({
    city: {
      name: "Київ",
      code: "kvartiry-kiev"
    },
    sort: 2
  })
  
  export const mutations = {
    updateCity(state, newCity){
      this.$cookies.set('city', newCity)
      state.city = newCity
    },
    updateSort(state, newSort){
      state.sort = newSort
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
    },
    getSort: (state) => {
      return state.sort
    }
  }