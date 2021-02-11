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
    nuxtServerInit ({ state }) {
      if( !this.$cookies.get('city') ){
        this.$cookies.set('city', state.city)
      }
      state.city = this.$cookies.get('city')
    }
  }

  export const getters = {
    getCity: (state) => {
      return state.city
    }
  }