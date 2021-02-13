<template>
  <div>

    <div v-if="$fetchState.pending">
      <b-loading :is-full-page="false" :active="true"></b-loading>
    </div>

    <div v-else>

      <div class="columns is-multiline is-mobile m-4 is-hidden-mobile">

          <div class="column is-3" v-for="(building,i) in buildings" :key="building.i">
              <Card :item="building" />
          </div>

      </div>

      <div class="columns is-multiline m-4 is-hidden-tablet">

          <div class="column" v-for="(building,i) in buildings" :key="building.i">
              <Card :item="building" />
          </div>

      </div>

      <Pagination :count="total" class="mx-5 mb-2" />
      
    </div>

  </div>
</template>

<script>

export default {
  async fetch(){
    await this.$axios.
      $get(this.$route.query.page == 1 ? 
      `domria/${this.city.code}/noRender/?sortType=${this.sort}` : 
      `domria/${this.city.code}/noRender/?page=${Number(this.$route.query.page)}&sortType=${this.sort}`)
    .then((res) => {
      this.buildings = res.banners.map( item => ({
        name: item.name,
        img: item.img_620x460,
        logoCircle: item.logoCircle,
        priceUSD: item.priceUSD,
        buildClassText: item.buildClassText,
        areaMin: item.areaMin 
      }))
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
    },
    sort(){
      return this.$store.getters.getSort
    }
  },
  watch: {
    city(){
      this.$router.push('/')
    },
    sort(){
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
