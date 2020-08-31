<template>
   <b-input 
        class="border-top-0 border-left-0 border-right-0 border-bottom" 
        v-bind:class="addClass"
        :placeholder="placeholder" 
        :name="name">
    </b-input>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
        },
        name: {
            type: String,
        },
        addClass:{

        },
    },
}
</script>

<style>

</style>