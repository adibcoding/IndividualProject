<script>

import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores'
import { RouterLink} from 'vue-router'


export default {
    name: 'register',
    data() {
        return {
            register: {
                email: '',
                password: ''
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions(useMainStore, ["handleRegister"])
    }
}


</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center" style="height: 100vh;">
        <div class="w-50 border border-2 rounded p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 class="text-center">Register Form</h1>
            <form @submit.prevent="handleRegister(register)">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="register.email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="register.password">
                </div>
                <div class="mb-3">
                    <RouterLink to="/login">Login</RouterLink>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="mt-3">

            </div>
        </div>
    </div>
</template>

<style>

</style>
