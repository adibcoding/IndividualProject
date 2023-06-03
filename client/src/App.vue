<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return {
            // center: { lat: 51.093048, lng: 6.842120 },
            // markers: [
            //     {
            //         position: {
            //             lat: 51.093048, lng: 6.842120
            //         },
            //     }
            // ],
            // address: ''
        }
    },
    methods: {
        // async getAddressFrom() {
        //     try {
        //         const { data } = await axios.get(url)
        //         console.log(data)
        //     } catch (err) {
        //         console.log(err)

        //     }

        // },
        // async handleSubmit() {
        //     try {
        //         let geocoder = new google.maps.Geocoder()
        //         geocoder.geocode({ 'address': this.address }, (res, status) => {
        //             if (status == 'OK') {
        //                 console.log(res[0])
        //             }
        //         })
        //     } catch (err) {
        //         console.log(err)
        //     }
        // },
        // setPlace() {

        // }
        // async getGoogleLib() {
        //     try {
        //         const { data } = await axios({
        //             url: 'http://localhost:3000/massages',
        //             method: 'get'
        //         })
        //         console.log(data)
        //     } catch (err) {
        //         console.log(err)
        //     }
        // },
        // async initMap() {
        //     const { Map } = await google.maps.importLibrary("maps");
        //     map = new Map(document.getElementById("map"), {
        //         center: { lat: -34.397, lng: 150.644 },
        //         zoom: 8,
        //     });
        // },
        async geocode() {
            try {
                let location = `Brighta Kost Foresta Studento L10/10 BSD - 087871642807, Pagedangan, Tangerang Regency, Banten`
                const { data } = await axios({
                    url: `http://localhost:3000/massages`,
                    method: 'post',
                    data: {
                        location
                    }
                })
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        this.geocode()


    },
    mounted() {

        // new google.maps.places.Autocomplete(
        //     document.getElementById("autocomplete")
        // )
    }
}

</script>

<template>
    halo
    <div id="map"></div>
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
