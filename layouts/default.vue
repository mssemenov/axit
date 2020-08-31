<template>
  <div class="nuxt">
      <VueHeader/>
     <Nuxt />
  </div>
</template>

<script>
import VueHeader from "../components/Header/index"
export default {
  components: {
    VueHeader,
  },
}
</script>

 