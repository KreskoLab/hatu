<template>
  <v-app>

    <v-navigation-drawer 
      v-model="drawer"
      floating
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="white" clipped-left fixed flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <span>POOK</span>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-office-building',
          title: 'Новобудови',
          to: '/'
        },
        {
          icon: 'mdi-home-modern',
          title: 'Таунхауси',
          to: '/townhouse'
        },
        {
          icon: 'mdi-home',
          title: 'Котеджні містечка',
          to: '/cottage'
        },
        {
          icon: 'mdi-hard-hat',
          title: 'Девелопери',
          to: '/inspire'
        }
      ],
      title: 'Nuxt-Ria'
    }
  }
}
</script>

<style>

</style>
