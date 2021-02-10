<template>
  <div>

    <div class="columns is-multiline is-mobile m-4">

        <div class="column is-3" v-for="(building,i) in buildings" :key="building.i">
            <Card :item="building" />
        </div>

    </div>
    
  </div>
</template>

<script>
export default {
  async fetch(){
    await this.$axios.$get('https://dom.ria.com/uk/novostroyki/kvartiry-kiev/noRender/')
    .then((res) => {
      this.buildings = res.banners
    })
  },
  data(){
    return{
      buildings: []
    }
  }
}
</script>

<style>

</style>
