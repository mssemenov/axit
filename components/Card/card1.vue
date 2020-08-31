<template>
    <b-col cols="12" sm="8" lg="4" 
        class="text-center d-flex flex-column 
        justify-content-center align-items-center">
        <div 
            class="mt-2 px-3 py-2 text-center mb-4 _w-icons
            rounded-circle _border-ff8b38 _border-3 border"> 
            <font-awesome-icon  class="_text-ff8b38 _fz-1-5"
                :icon="icons"
            />
          </div>
        <h2 class="mb-3">{{ title }}</h2>    
        <p class="_text-86878b">{{text }}</p>
    </b-col>
</template>

<script>
export default {
    props:{
        icons:{
            type: String,
        },
        title:{
            type: String,
        },
        text:{
            type: String,
        }
    }
}
</script>

<style>

</style>