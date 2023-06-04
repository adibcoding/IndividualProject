import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000'
export const useMainStore = defineStore('useMainStore', {
    state: () => ({
        isLogged: localStorage.getItem('access_token') ? true : false,
        massages: [],
        detailMassage: {}
    }),
    getters: {

    },
    actions: {
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
        },
        async handleLogin(obj){
            try {
                const {email, password} = obj
                const {data} = await axios({
                    url: `${BASE_URL}/login`,
                    method: 'post',
                    data:{
                        email, password
                    }
                })
                console.log(data)
                localStorage.setItem('access_token', data.access_token)
                this.router.push('/massages')
                this.handleFetchMassages()

            } catch (err) {
                console.log(err)
            }
        },
        async handleRegister(obj){
            try {
                const {email, password} = obj
                const {data} = await axios({
                    url: `${BASE_URL}/register`,
                    method: 'post',
                    data:{
                        email, password
                    }
                })
                console.log(data)
                this.handleLogin(obj)

            } catch (err) {
                console.log(err)
            }
        },
        async handleFetchMassages(){
            try {
                const {data} = await axios({
                    url: `${BASE_URL}/massages`,
                    method: 'get'
                })
                console.log(data.massages)
                this.massages = data.massages

            } catch (err) {
                console.log(err)
            }
        },
        async handleFetchDetail(id){
            try {
                const {data} = await axios({
                    url: `${BASE_URL}/massages/${id}`,
                    method: 'get'
                })
                console.log(data.massage)
                this.router.push(`/massages/${id}`)
                this.detailMassage = data.massage

            } catch (err) {
                console.log(err)
            }
        }
    },
})