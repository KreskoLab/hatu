export const state = () => ({
    novobudovaLink: ''
})

export const mutations = {
    setNovobudovaLink(state, link) {
        state.novobudovaLink = link
    }
}

export const getters = {
    getNovobudovaLink: (state) => {
      return state.novobudovaLink
    }
}