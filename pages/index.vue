<template>
    <main class="">
        <VueBanner/>
        <SocialMedia/>
        <Tabs/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Options/>
        <Our/>
        <BannerFooter/>
        <Contact/>
        <Footer/>
    </main>
</template>

<script>
import Tabs from "@/components/Tabs/index"
import VueBanner from "@/components/Banner/index"
import SocialMedia from "@/components/SocialMedia/index"
import Section1 from "@/components/Section/section1"
import Section2 from "@/components/Section/section2"
import Section3 from "@/components/Section/section3"
import Options from "@/components/Options/index"
import Our from "@/components/Our/index"
import BannerFooter from "@/components/Banner/banner_footer"
import Contact from "@/components/Contact/index"
import Footer from "@/components/Footer/index"
export default {
    components: {
        VueBanner,
        SocialMedia,
        Tabs,
        Section1,
        Section2,
        Section3,
        Options,
        Our,
        BannerFooter,
        Contact,
        Footer
    },
}
</script>

<style>

</style>