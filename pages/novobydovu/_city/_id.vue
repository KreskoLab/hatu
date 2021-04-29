<template>
  <v-container>
    <v-row class="mt-2" justify="space-between" v-if="!$fetchState.pending">

      <v-col :order="isMobile ? '2' : '1'">
        <h1 class="text-h4 font-weight-medium">{{novobudova.name}}</h1>
        <h3 class="font-weight-medium">{{novobudova.location}}</h3>

        <div class="mt-4">
          <v-btn color="grey lighten-3" depressed :href="novobudova.site" target="_blank">
            <v-icon left>mdi-link-variant</v-icon>
            <span>Сайт</span>
          </v-btn>
          <v-btn color="grey lighten-3 ml-2" depressed>
            <v-icon left>mdi-phone</v-icon>
            <span>Телефон</span>
          </v-btn>
        </div>

        <div class="mt-6">
          <span class="text-h5">від</span>
          <span class="text-h4 green--text text--darken-1 ml-1">{{novobudova.priceUSD}} $</span>
          <p>{{novobudova.priceM2}} $ за м² актуально на {{novobudova.lastPriceDate}}</p>
        </div>

        <v-card elevation="0">
          <v-list-item three-line>
            <v-list-item-content>
              <p class="overline mb-4">
                Проєкт від {{novobudova.developer.name}}
              </p>
              <v-list-item-title class="text-body-1 mb-1">
                <p>У девелопера {{novobudova.developer.newbuildCount}} ЖК</p>
                <p>Продано {{novobudova.developer.soldCount}} ЖК</p>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar class="my-auto">
              <v-img :src="novobudova.developer.logo"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

      </v-col>

      <v-col cols="12" sm="6" md="8" :order="isMobile ? '1' : '2'">
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in novobudova.images"
            :key="i"
            :src="item"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    await this.$axios.$get(`novostroyka/uk/${this.$route.params.id}/noRender/`)
    .then((res) => {
      var monthNames = ["січ", "лют", "берез", "квіт", "трав","черв","лип", "серп", "верес", "жовт", "лист","груд"]
      this.novobudova = {
        name: res.newbuild.name,
        site: 'https://' + res.newbuild.hostName,
        developer: {
          name: res.developer.name_uk,
          logo: res.developer.logoCircle,
          newbuildCount: res.developer.newbuildCount,
          soldCount: res.developer.soldCount
        },
        lastPriceDate: new Date(res.newbuild.lastPriceDate).getDay() + ' ' + monthNames[new Date(res.newbuild.lastPriceDate).getMonth()],
        priceM2: res.newbuild.priceUSD,
        priceUSD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Number(res.newbuild.priceUSD.replace(/\s/g, '') * res.newbuild.areaMin)).slice(0, -3).slice(1),
        location: res.city[0].accusative + ',' + ' ' + res.area.name + ' р-н',
        images: Object.values(res.photos).map(item => item.img_620x460)
      }
    })
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  data() {
    return {
      novobudova: {},
      showPhone: false
    }
  },
  head: {
    title: 'Prikol'
  }
}
</script>
