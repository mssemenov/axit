<template>
    <b-col cols="12" lg="4" class="text-center mb-4 mb-lg-0">
        <div class="bg-dark text-white px-0">
            <h3 class="py-3 border-bottom">
                {{ title }}
            </h3>
            <p class="_fz-2 mb-0">$
                <span class="_fz-3-2 font-weight-bold">
                    {{ price }}  
                </span>
            </p>
            <span class="_text-cccccc pb-3 d-block">{{ description}}</span>
            <hr class="_bg-ff8b38 _border-5 m-0" v-if="!popular"/>
            <div class="_bg-ff8b38 py-2" v-if="popular">OUR MOST POPULAR</div>
        </div>
        <b-list-group>
            <b-list-group-item  class="_text-86878b"
                v-for="(list, index) in lists" 
                :key="index">
                {{ list }}
            </b-list-group-item>
        </b-list-group>
    </b-col>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        },
        price:{
            type:String,
        },
         description:{
            type:String,
        },
        popular:{
            default: false,
        },
        lists:{

        },
    }
}
</script>

<style>

</style>