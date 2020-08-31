<template>
<VSection class=" bg-light">
    <b-container>
        <TitleSection
                title="PRICING OPTIONS"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."
        />
        <b-row class="align-items-end">
            <BlogsCena
                title="Basic"
                price="0"
                description="Free for Life"
                :lists="lists.list1"
            />
            <BlogsCena
                title="Professional"
                price="19"
                description="Monthly Payment"
                popular = 1
                :lists="lists.list2"
            />
            <BlogsCena
                title="Enterprise"
                price="70"
                description="Monthly Payment"
                :lists="lists.list3"
            />
        </b-row>
    </b-container>
</VSection>
</template>

<script>
import TitleSection from "@/components/CenterTitle/index"
import BlogsCena from "@/components/Options/BlogsCena"
import VSection from "@/components/Section/index"
export default {
    components: {
        BlogsCena,
        TitleSection,
        VSection
    },
    data() {
        return {
            lists:{
                list1:
                [
                    '10 gb of bandwidth', '3 websites', 'Basic Customization', 
                    'wordpress integration', 'email support'
                ],
                list2:
                [
                    '5 gb of space', '12 websites', 'Advanced Customization', 
                    'wordpress integration', 'email support'
                ],
                 list3:
                [
                    'Unlimited space', '100 websites', 'Advanced Customization', 
                    'wordpress integration', '24/7 customer support'
                ],
            }
        }
    },
}
</script>

<style>

</style>