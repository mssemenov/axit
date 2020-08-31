<template>
  <VSection class="banner_footer">
        <b-container>
            <div class="text-center">
                <h2 class="text-white">STYLISH AXURE DESIGN</h2>
                <hr class="_bg-ff8b38 _w-10 _border-3 mt-4 mb-3 mx-auto">
                <p class="_text-86878b mb-4">Use the sections you need, remove the ones you don't. Create gorgeous prototypes faster than ever!</p>
                <b-button size="lg" class="bg-transparent border _border-3 py-2 px-4 font-weight-bolder">Download</b-button> 
            </div>
      </b-container>
  </VSection>
</template>

<script>
import VSection from "@/components/Section/index"
export default {
    components: {
        VSection,
    },
}
</script>
<style>
.banner_footer{
        /* min-height: calc(100vh - 57px); */
        background-image: url("~static/img/layers1.png");
        background-repeat: no-repeat;
        background-size: cover; 
}
</style>