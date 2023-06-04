<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Footers from './components/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'


export default {
    name: 'App',
    data() {
        return {
        }
    },
    methods: {

    },
    created() {
        console.log(this.$route)
    },
    mounted() {

        // new google.maps.places.Autocomplete(
        //     document.getElementById("autocomplete")
        // )
    },
    components:{Navbar, Footers}
}

</script>

<template>
    <Navbar/>
    <RouterView/>
    <Footers/>
    
    <!-- <GMapMap ref="myMarker" :center="{ lat: 51.093048, lng: 6.842120 }" :zoom="7" map-type-id="terrain"
                                                style="width: 100vw; height: 900px">
                                                <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" />
                                            </GMapMap> -->




    <!-- <form @submit.prevent="handleSubmit()">
                    <input type="text" id="autocomplete" v-model="address">
                    <button type="submit">Search</button>
                </form> -->


    <!-- <form @submit.prevent="handleSubmit">
                        <GMapAutocomplete placeholder="This is a placeholder" @place_changed="setPlace">
                        </GMapAutocomplete>
                        <input type="text">
                        <button type="submit">Search</button>
                    </form>
                    <div id="map"></div> -->
</template>

<style></style>
