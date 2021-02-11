<template>
  <div>

    <div class="columns is-multiline is-mobile m-4">

        <div class="column is-3" v-for="(building,i) in buildings" :key="building.i">
            <Card :item="building" />
        </div>

    </div>

    <Pagination :count="total" class="mx-5 mb-2" />
    
  </div>
</template>

<script>

export default {
  async fetch(){
    //await this.$axios.$get(`domria/${this.city.code}/noRender/?page=${Number(this.$route.query.page)}`)
    await this.$axios.
    $get(this.$route.query.page == 1 ? `domria/${this.city.code}/noRender/` : `domria/${this.city.code}/noRender/?page=${Number(this.$route.query.page)}`)
    .then((res) => {
      this.buildings = res.banners
      this.total = res.count
    })
  },
  data(){
    return{
      buildings: [],
      total: null
    }
  },
  computed: {
    city(){
      return this.$store.getters.getCity
    }
  },
  watch: {
    city(){
      this.$fetch()
    },
    $route(to, from) {
      this.$fetch()
    }
  }
}
</script>

<style>

</style>
