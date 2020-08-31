<template>
  <b-container>
    <b-row class="row py-4 align-items-center">
        <b-col cols=12  lg="4">
            <h3>Social Media</h3>
            <p class="_text-86878b">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Aenean euismod bibendum laoreet.</p>
        </b-col>
        <b-col  lg="8" cols="12" class="text-center">
          <font-awesome-icon  
            v-for="(data, index) in icons" 
            :key="index" 
            class="mr-3 _text-cccccc" 
            size="3x" 
            
            :icon="[data.prefix, data.icon]"
          />  
        </b-col>
    </b-row>
  </b-container>
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