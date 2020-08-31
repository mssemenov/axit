<template>
    <footer class="bg-dark pt-3 pb-1">
        <b-container>
            <div class="d-flex justify-content-center mb-2">
                <div class="_mx-15px"
                    v-for="(data, index) in icons" 
                    :key="index" >
                    <font-awesome-icon
                        class="_text-cccccc" 
                        size="2x" 
                        :icon="[data.prefix, data.icon]"
                    /> 
                </div>
            </div>
            <p class="_text-white-8 text-center">© 2020 Axure Themes </p>
        </b-container>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      icons:[
        {icon:"facebook-f",prefix:"fab"},
        {icon:"twitter",prefix:"fab"},
        {icon:"google-plus-g",prefix:"fab"},
        {icon:"stumbleupon",prefix:"fab"},
        {icon:"instagram",prefix:"fab"},
        {icon:"youtube",prefix:"fab"},
      ]
    }
  },
}
</script>

<style>

</style>