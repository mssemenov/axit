<template>
    <VSection class="bg-light">
        <b-container>
            <b-row class="mx-auto mx-lg-0">
                <b-col cols="12" lg="6">
                    <h3>Standard Picture Section</h3>
                    <hr class="_bg-ff8b38 _w-10 _border-3 mx-0 mb-5">
                    <p class="_text-86878b mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan 
                        et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis 
                        natoque penatibus et magnis dis parturient montes.
                    </p>
                     <p class="_text-86878b mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
                        bibendum laoreet.
                    </p>
                </b-col>
                <b-col cols="12" lg="6">
                    <b-img src="img/image_left_sub_list_u260_90.png" fluid></b-img>
                </b-col>
            </b-row>
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

</style>