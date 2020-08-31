<template>
    <VSection>
        <b-container>
            <b-row class="mx-auto mx-lg-0">
                <b-col cols="12" lg="6">
                    <b-img fluid src="img/image_left_sub_list_u260_90.png"></b-img>
                </b-col>
                <b-col cols="12" lg="6">
                    <h3 class="mt-4 mt-lg-0">Sub list section</h3>
                    <hr class="_bg-ff8b38 _w-10 _border-3 mx-0 mb-5">
                    <p class="_text-86878b mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus 
                        accumsan et viverra justo commodo.
                    </p>
                    <Card title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enean euismod bibendum laoreet."> </Card>
                    <Card title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. enean euismod bibendum laoreet."> </Card>
                </b-col>
            </b-row>
        </b-container>
    </VSection>
</template>

<script>
import VSection from "@/components/Section/index"
import Card from "@/components/Card/index"
export default {
 components: {
     Card,
     VSection,
 },
}
</script>

<style>

</style>