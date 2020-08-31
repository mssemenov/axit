<template>
  <VSection class="bg-light">
      <b-container>
            <b-tabs 
                content-class="col-9 ml-lg-auto mt-5 mt-lg-0 mx-auto mx-lg-0" 
                class="d-flex flex-column flex-lg-row"
                nav-class="d-flex flex-row flex-lg-column justify-content-center border-0" 
                active-nav-item-class="_bg-ff8b38" 
            >
                <b-tab 
                    v-for="(data, index) in tabs" :key="index"
                    title-link-class="_bg-black _hover-bg-ff8b38 px-5 py-5 text-center text-white" 
                    :title="data.tab">
                        <Vuecontent 
                            :title="data.title"
                            :text="data.text"
                            :img="data.img"
                        />
                </b-tab>
            </b-tabs>
      </b-container>
  </VSection>
</template>

<script>
import VSection from "@/components/Section/index"
import Vuecontent from "./content"
export default {
    data() {
        return {
            tabs:[
                {tab: "Tabs1", title:"Tabs with transitioning.", 
                text:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.`,
                    img:"image_right_u255_70.png"
                },
                {
                    tab: "Tabs2", 
                    title:"Tabs transitioning effets", 
                    text:`Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut et magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation nisi ut aliquip ex ea commodo
                        consequat.`,
                    img:"sinij-gorod.svg"
                },
                {
                    tab: "Tabs3", 
                    title:"Tabs with  effets transitioning", 
                    text:`Lorem ipsum dolor amet, consectetur adipisicing elit, sed do eiusmod
                        eiusmod incididunt amet et magna aliqua. Ut enim ad aliqua veniam,
                        quis nostrud eiusmod consectetur ut aliquip ex ea commodo
                        consequat.`,
                    img:"1.svg"
                },
                
            ]
        }
    },
    components:{
        Vuecontent,
        VSection
    }
}
</script>

<style>

</style>