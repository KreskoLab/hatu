<template>
  <v-row justify="start" align="center">
    <v-col cols="12" sm="6" md="4" v-for="(item,i) in cities" :key="item.i">
      <v-card nuxt :to="`/novobydovu/${item.link}`">
        <v-img
          :src="item.img"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
          height="200px"
        >
          <v-card-title>
            <span class="">{{item.name}}</span> 
          </v-card-title>
          <v-card-subtitle>
            <span class="text-subtitle-2 grey--text text--lighten-4">{{item.count}} об'єктів</span> 
          </v-card-subtitle>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async fetch() {
    await this.$axios.$get('cities/mainPage/?langId=4&pathname=/uk/novostroyki/')
    .then((res) => {
      var temp_arr = res.catalog.seo.tabs[0].content.map(city => {
        return {
          name: city.name,
          count: city.count,
          img: '/images/' + city.href.replace('/uk/novostroyki/', '').slice(0, -1) + '.jpg',
          link: city.href.replace('/uk/novostroyki/', '').slice(0, -1)
        }
      })
      this.cities = temp_arr.sort((a,b) => b.count - a.count)
    })
  },
  data() {
    return {
      cities: []
    }
  },
  head: {
    title: 'Prikol'
  }
}
</script>
