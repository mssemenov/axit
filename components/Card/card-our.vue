<template>
    <b-col cols="12" lg="4" class="mb-3 mb-lg-0">
        <div class="_bg-f5f5f5 p-3 mb-4 _text-86878b">{{ Text}}</div>
        <b-row class="align-items-center">
            <b-col cols="3">
                <b-img :src="'img/' + Img "></b-img>
            </b-col>
            <b-col cols="9">
                <h5>{{ Name}}</h5>
                <p class="_text-86878b">{{Position }}</p>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
export default {
    props: {
        Text: {
            type: String,
        },
        Img: {
            type: String,
        },
        Name: {
            type: String,
        },
        Position: {
            type: String,
        },
    },
}
</script>

<style>

</style>