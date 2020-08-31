<template>
  <b-row>
      <b-col cols="1" class="mb-3 mb-lg-0 mr-4">
          <div class="d-flex justify-content-center align-items-center  w-25 mt-2
            rounded-circle _border-ff8b38 _border-3 border py-2 px-3"> 
            <font-awesome-icon  class="_text-ff8b38"
                :icon="'download'"
            />
          </div>
           <!-- cloud-download -->
      </b-col>
      <b-col cols="9">
          <h4>{{ title }}</h4>
          <p> {{ text }} </p>
      </b-col>
  </b-row>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
        },
        text:{
            type: String,
        },
    }
}
</script>

<style>

</style>