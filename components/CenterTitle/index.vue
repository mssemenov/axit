<template>
  <div class="text-center mb-4">
        <h2>{{ title }}</h2>
        <hr class="_bg-ff8b38 _w-10 _border-3 mt-4 mb-3 mx-auto">
        <p class="_text-86878b mb-0">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props:{
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