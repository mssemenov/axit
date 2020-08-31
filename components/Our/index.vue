<template>
    <VSection>
        <b-container>
            <TitleSection
                title="WHAT OUR CUSTOMERS ARE SAYING"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <b-row>
                <CardOur 
                    v-for="(data, index) in Our"
                    :key="index" 
                    :Text="data.Text"
                    :Name="data.Name"  
                    :Position="data.Position"
                    :Img="data.Img"   
                />
            </b-row>
        </b-container>
    </VSection>
</template>

<script>
import CardOur from "@/components/Card/card-our"
import VSection from "@/components/Section/index"
import TitleSection from "@/components/CenterTitle/index"
export default {
    data() {
        return {
            Our: [
                {
                    Text: `Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Doloribus 
                        accusamus expedita repellat similique 
                        odio aspernatur ex, architecto eaque 
                        quo suscipit.`,
                    Name: "Jeremy H.",
                    Position: "Manager",
                    Img: "avatar_2_u231_214.png"    
                },
                  {
                    Text: `Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Doloribus 
                        accusamus expedita repellat similique 
                        odio aspernatur ex, architecto eaque 
                        quo suscipit.`,
                    Name: "Jeremy H.",
                    Position: "Freelancer",
                    Img: "avatar_2_u231_214.png"    
                },
                  {
                    Text: `Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Doloribus 
                        accusamus expedita repellat similique 
                        odio aspernatur ex, architecto eaque 
                        quo suscipit.`,
                    Name: "Susan W.",
                    Position: "Photographer",
                    Img: "avatar_2_u231_214.png"    
                },
            ]
        }
    },
    components: {
        VSection,
        TitleSection,
        CardOur
    },
}
</script>

<style>

</style>