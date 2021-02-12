<template>
    <b-navbar :mobile-burger="false" class="mx-4 mt-2">

        <template #brand>
            <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
                <img
                    src="https://www.trulia.com/images/icons/favicon-rebrand-196.png"
                >
            </b-navbar-item>
        </template>

        <template #start>

            <b-dropdown class="is-hidden-mobile" v-model="selectedCity" aria-role="list"> 

                <div class="navbar-item is-clickable" slot="trigger" role="button">
                    <b-icon icon="map-marker"></b-icon>
                    <span class="is-unselectable">{{selectedCity.name}}</span>
                </div>

                <b-dropdown-item :focusable="false" :value="city" v-for="(city,i) in cities" :key="city.i">
                    {{city.name}}
                </b-dropdown-item>

            </b-dropdown>

            <b-navbar-dropdown boxed label="Кімнат">

                <b-navbar-item class="pr-4" aria-role="listitem">
                  <b-field>
                      <p class="control">
                          <b-button>1</b-button>
                      </p>
                      <p class="control">
                          <b-button>2</b-button>
                      </p>
                      <p class="control">
                          <b-button>3</b-button>
                      </p>
                      <p class="control">
                          <b-button>4+</b-button>
                      </p>
                  </b-field>
                </b-navbar-item>

            </b-navbar-dropdown>

        </template>

    </b-navbar>
</template>

<script>
export default {
    data(){
        return{
            cities: [
                {name: 'Київ', code: 'kvartiry-kiev'},
                {name: 'Львів', code: 'lvov'},
                {name: 'Одеса', code: 'odessa'}
            ],
            selectedCity: this.$store.getters.getCity
        }
    },
    created(){
        this.$store.dispatch('check')
    },
    watch: {
        selectedCity(val){
           this.$store.commit('updateCity', val)
         }
    }
}
</script>

<style>
.dropdown-content{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem;border:1px solid #dbdbdb;border-radius:6px}
.dropdown-menu{min-width:110px!important;transition-duration:86ms;transition-property: opacity, transform}
.dropdown-item{padding:.375rem 1rem;padding-right:3rem;white-space:nowrap}
</style>
