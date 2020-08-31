<template>
    <div class="banner d-flex align-items-center pt-lg-0 pt-4 pb-4 pb-lg-0">
            <b-container>
                <b-row class="justify-content-between">
                    <b-col cols="12" lg="5"  class="mb-5 mb-lg-0">
                        <div class="img-logo mb-4">
                            <b-img src="@/static/img/logo_43.png" fluid-grow></b-img>
                        </div>
                        <p class="text-white mb-5 _fz-2">MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</p>
                        <hr class="bg-white w-25 _border-3 mx-0 mb-5">
                        <p class="_text-white-8 font-weight-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                            accumsan et viverra justo commodo.
                        </p>
                        <b-button size="lg" class="bg-transparent border _border-3 py-2 px-4 font-weight-bolder">Download</b-button> 
                    </b-col>
                    <b-col cols="12" lg="5">
                            <div class="_bg-f5f5f5 rounded-top">
                                <h2 class="text-center mb-0 py-3">Try Your <span class="_text-ff8b38">FREE</span> Trial Today</h2>
                            </div>
                        <b-form class="bg-white mt-0 rounded-bottom">
                            <div class="d-flex flex-wrap pt-3 justify-content-center pb-4">
                                <ElemForm addClass="mb-4 col-10" placeholder="Name" name="name" />
                                <ElemForm addClass="mb-4 col-10" placeholder="Email" name="email" />
                                <ElemForm addClass="col-10" placeholder="Password" name="password" />
                            </div>
                            <b-button class="_bg-ff8b38 w-100 rounded-0 border-0 py-3 text-center _fz-1-5">Get Started</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </b-container>
    </div> 
</template>

<script>
import ElemForm from "@/components/ElemForm/index"
export default {
    components: {
        ElemForm,
    },
}
</script>

<style>
    .banner{
        min-height: calc(100vh - 57px);
        background-image: url("~static/img/layers.png");
        background-repeat: no-repeat;
        background-size: cover; 
    }
    .img-logo{
        width: 10em;
    }
</style>