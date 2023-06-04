<script>
import { useMainStore } from '../stores';



export default {
    name: 'home',
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

<template>
    <div class="bgImage d-flex align-items-center justify-content-center">
        <div class="w-25 h-25 d-flex align-items-center justify-content-center bg-transparent">
            <h4 class="text-center"
                style="color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                "We care for you and we're here to relieve your pain with our special massage"</h4>
        </div>
    </div>
    <div class="blank-div">

    </div>

    <div class="features d-flex flex-column mt-3">
        <h1 class="text-center">Our Features</h1>
        <div class="feature-list d-flex justify-content-evenly mt-3">
            <div class="feature-container shadow p-3 bg-body-tertiary rounded">
                <h4 class="text-center">Master</h4>
                <p>We are masters at our work and master at stealing your money, don't hesitate to come to us for the good
                    old massage. If you ever get confused on how to burn your money, just come to our place.</p>
            </div>
            <div class="feature-container shadow p-3 bg-body-tertiary rounded">
                <h4 class="text-center">Special Oil</h4>
                <p>Our massage oil isn't just some old regular massage oil, it is handcrafted by the most expert of experts.
                    Every single drop contains goodness that can soothe your body.</p>
            </div>
            <div class="feature-container shadow p-3 bg-body-tertiary rounded">
                <h4 class="text-center">Cozy</h4>
                <p>Our place is built by hand by the most intellectual engineer and the most artistic architect in the
                    world. Once you get inside, you'll be sleeping immediately relieving all the soreness and tiredness from
                    real life.</p>
            </div>


        </div>


    </div>
</template>

<style>
.bgImage {
    background-image: url(https://www.birminghamtimes.com/wp-content/uploads/2019/11/LifeTouch-Message26.jpg);
    height: 70vh;
    max-width: 100vw;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
}
.blank-div{
    height: 70vh;
}
.feature-container {

    min-height: 10vw;
    width: 20vw;
}</style>
