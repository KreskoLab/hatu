<template>
  <v-card>
    <v-img class="white--text align-end" height="210px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)" :src="novobudova.img">
      <v-card-title>{{novobudova.name_uk}}</v-card-title>
    </v-img>

    <v-card-subtitle class="text-truncate pb-0">
      {{novobudova.street}}
    </v-card-subtitle>

    <v-card-text class="text--primary pb-0">
      <span class="text-h6 font-weight-regular">від {{novobudova.priceUSD}}</span>
      <div class="mt-1 text-body-2 font-weight-regular">
        <v-icon small>mdi-trophy-variant</v-icon>
        {{novobudova.type}} 
        <v-icon small class="ml-2">mdi-excavator</v-icon>
        {{novobudova.release}}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text :href="novobudova.site" target="_blank">
        Сайт
      </v-btn>

      <v-btn color="orange" text nuxt :to="`/novobydovu/${this.$route.params.city}/${novobudova.link}`">
        Детальніше
      </v-btn>

      <v-spacer></v-spacer>

      <v-avatar>
        <img
          :src="novobudova.logoCircle"
          :alt="novobudova.developer"
        >
      </v-avatar>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    novobudova: Object
  },
  methods: {
    info() {
      this.$store.commit('setNovobudovaLink', this.novobudova.link)
      this.$router.push(`/novobydovu/${this.$route.params.city}/${this.novobudova.id}`)
    }
  }
}
</script>

