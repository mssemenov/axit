<template>
  <VSection>
      <b-container>
          <TitleSection
                title="CONTACT US"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
         <b-form class="bg-white mt-0 rounded-bottom row mt-5">
            <b-col cols="12" lg="6">
                <ElemForm addClass="mb-4" placeholder="Name" name="name" />
                <ElemForm addClass="mb-4" placeholder="Email" name="email" />
                <ElemForm addClass="" placeholder="Password" name="password" />
            </b-col>
            <b-col cols="12" lg="6" class="mt-3 mt-lg-0">
                <b-textarea class="border-top-0 border-left-0 border-right-0 border-bottom h-100" placeholder="Message"></b-textarea>
            </b-col>
            <b-button class="_bg-ff8b38 mx-auto border-0 py-3 text-center _fz-1-5 mt-5" no-resize>Send Message</b-button>
        </b-form>   
      </b-container>
  </VSection>
</template>

<script>
import ElemForm from "@/components/ElemForm/index"
import TitleSection from "@/components/CenterTitle/index"
import VSection from "@/components/Section/index"
export default {
    components: {
        VSection,
        TitleSection,
        ElemForm
    },
}
</script>

<style>

</style>