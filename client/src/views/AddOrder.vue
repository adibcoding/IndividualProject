<script>

import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'


export default {
    name: 'addorder',
    data() {
        return {
            booking: {

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
    <div class="bg-body-tertiary"
        style="position: absolute; top: 0; height: 60px; width: auto; min-width: 100%; z-index: -1;">
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center" style="height: 100vh;">
        <div class="w-50 border border-2 rounded p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 class="text-center">Booking Form</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Location</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Booking Date</label>
                    <input type="date" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="mt-3">

            </div>


        </div>
    </div>
</template>

<style></style>
