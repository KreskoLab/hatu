<template>
  <v-container>
    <h1 class="text-h4">Новобудови {{$route.params.city}}</h1>
    <v-row class="mt-2">
      <v-col cols="12" sm="6" md="4" v-for="(item,i) in buildings" :key="item.i">
        <CardNovobudova :novobudova="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$axios.$get(`novostroyki/${this.$route.params.city}/noRender/`)
    .then((res) => {
      this.buildings = res.banners.map(item => {
        return {
          name_uk: item.name_uk,
          id: item.newbuildId,
          img: item.img_620x460,
          logoCircle: item.logoCircle,
          street: item.street,
          release: item.release.quarter + ' квартал' + ' ' + item.release.year,
          site: 'https://' + item.hostName,
          link: item.finalUrl.slice(4).slice(0,-1),
          developer: item.developerName,
          type: item.buildClassText,
          priceUSD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Number(item.priceUSD.replace(/\s/g, '') * item.areaMin)).slice(0, -3)
        }
      })
    })
  },
  data() {
    return {
      buildings: []
    }
  },
  head: {
    title: 'Prikol'
  }
}
</script>
