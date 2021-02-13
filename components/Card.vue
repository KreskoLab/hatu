<template>
    <div class="card">
      <div class="card-image">
        <figure class="image is-5by4 pt-0">
          <nuxt-picture :src="item.img" placeholder />
        </figure>
      </div>
      <div class="card-content pl-4 pb-0" style="margin-top:-10px">
        <div class="media">
          <div class="media-content">
            
            <p class="title is-5 is-text-overflow mb-0">{{item.name}}</p>

            <span class="subtitle is-size-6 icon-text has-text-grey-dark mt-2 mb-0" style="font-size:11.5pt!important">
              <b-icon icon="star" />
              <span class="mt-1">{{item.buildClassText}}</span>
              <b-icon icon="ruler" />
              <span class="mt-1">{{item.areaMin}}+ м²</span>
            </span>

            <p class="subtitle is-size-6 has-text-grey-dark mt-3 mb-0" style="font-size:11.5pt!important">
              Оболонський район
            </p>

            <div class="block mt-4 mb-5">
              <span class="subtitle is-5 has-text-success-dark">${{item.priceUSD}} м²</span>
              <figure class="is-pulled-right" style="margin-top:-10px">
                <img style="border-radius: 50%" width="40" height="40" :src="item.logoCircle">
              </figure>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
.mdi-24px.mdi-set, .mdi-24px.mdi:before{
  font-size:16pt!important
}

.is-text-overflow {
  max-width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
