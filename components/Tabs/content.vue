<template>
  <b-row>
    <b-col cols="12" lg="6" class="pl-4 pt-2 order-last order-lg-0">
      <h3 class="mb-4"> {{title}}</h3>
      <p class="mb-5 _text-86878b">{{text}}</p>
      <b-button class="_bg-ff8b38 border-0 py-3 px-4">Download</b-button>
    </b-col>
    <b-col  cols="12" lg="6" class="text-right">
      <b-img fluid  :src="'img/' + img"></b-img>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props:{
    title:{
      type: String
    },
    text:{
      type: String
    },
    img:{
      type: String
    }
  }
}
</script>

<style>

</style>