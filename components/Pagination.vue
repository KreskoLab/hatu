<template>
<b-pagination v-model="page" :total="count" :per-page="24"  order="is-centered">

    <b-pagination-button
        slot-scope="props"
        :page="props.page"
        :id="`page${props.page.number}`"
        tag="nuxt-link"
        :to="`/?page=${props.page.number}`">
        {{ (props.page.number) }}
    </b-pagination-button>

    <b-pagination-button slot="previous" slot-scope="props" :page="props.page" tag="nuxt-link" :to="`/?page=${props.page.number}`">
      <b-icon icon="chevron-left"></b-icon>
    </b-pagination-button>

    <b-pagination-button slot="next" slot-scope="props" :page="props.page" tag="nuxt-link" :to="`/?page=${props.page.number}`">
      <b-icon icon="chevron-right"></b-icon>
    </b-pagination-button>            
    
</b-pagination>   
</template>

<script>
export default {
  props: ['count'],
  computed:{
    page(){
      if (!this.$route.query.page){
        return this.$route.query.page = 1
      }
      else{
        return Number(this.$route.query.page)
      }
    }
  }
}

</script>