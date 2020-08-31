<template>
    <VSection>
        <b-container>
            <TitleSection
                title="WHY THIS IS AWESOME"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <b-row class="mt-5 justify-content-center">
                <Card 
                    title="Thoughtful Design" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Aenean euismod bibendum laoreet. Proin gravida 
                        dolor sit amet lacus accumsan et viverra."
                    icons="lightbulb"
                />
                 <Card 
                    title="Well Crafted" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Aenean euismod bibendum laoreet. Proin gravida 
                        dolor sit amet lacus accumsan et viverra."
                    icons="keyboard"
                />
                 <Card 
                    title="Easy to Customize" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Aenean euismod bibendum laoreet. Proin gravida 
                        dolor sit amet lacus accumsan et viverra."
                    icons="bolt"
                /> 
            </b-row>
        </b-container>
    </VSection>
</template>

<script>
import VSection from "@/components/Section/index"
import TitleSection from "@/components/CenterTitle/index"
import Card from "@/components/Card/card1"
export default {
 components: {
     Card,
     TitleSection,
     VSection
 },
}
</script>

<style>

</style>