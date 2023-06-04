<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores';

export default {
    name: 'massagereview',
    data() {
        return {

        }
    },
    computed: {
        ...mapState(useMainStore, ["detailMassage"])
    },
    methods: {
        ...mapActions(useMainStore, ["handleFetchDetail"])
    },
    created(){
        console.log(this.$route)
        this.handleFetchDetail(this.$route.params.id)
    }
}
</script>

<template>
    <div class="bg-body-tertiary"
        style="position: absolute; top: 0; height: 60px; width: auto; min-width: 100%; z-index: -1;">
    </div>
    <div class="d-flex justify-content-center mt-3">
        <div class="w-75">
            <div class="d-flex flex-column">
                <div class="d-flex mb-5">
                    <div style="width: 30vw;overflow: hidden;box-shadow: -16px 18px 24px 15px rgba(51,49,49,0.15);">
                        <img style="width: 30vw;"
                            :src="detailMassage.imgUrl" alt="">
                    </div>
                    <div style="margin-left: 3vw;">
                        <h1>{{ detailMassage.title }}</h1>
                        <p>Price: Rp {{ detailMassage.price }}</p>
                        <p>Description: {{detailMassage.description}}</p>
                    </div>

                </div>
                <hr>
                <div class="review d-flex flex-column align-items-center">
                    <h1>Reviews</h1>
                    <div class="card py-3 border-0 w-75" style="background-color: #f8f9fa;">
                        <div class="d-flex flex-start w-100">
                            <img class="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                                height="40" />
                            <div class="form-outline w-100">
                                <textarea class="form-control" id="textAreaExample" rows="4" placeholder="Message"
                                    style="background: #fff;"></textarea>

                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-2 pt-1">
                            <button type="button" class="btn btn-primary btn-sm">Post Review</button>
                            <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
                        </div>
                    </div>
                    <section>
                        <div class="container my-5 py-5">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12 col-lg-10 col-xl-8">
                                    <div class="card" style="width: auto;">
                                        <div class="card-body">
                                            <div class="d-flex flex-start align-items-center">
                                                <img class="rounded-circle shadow-1-strong me-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                                                    alt="avatar" width="60" height="60" />
                                                <div>
                                                    <h6 class="fw-bold text-primary mb-1">Lily Coleman</h6>
                                                    <p class="text-muted small mb-0">
                                                        Shared publicly - Jan 2020
                                                    </p>
                                                </div>
                                            </div>

                                            <p class="mt-3 mb-4 pb-2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                                            </p>

                                            <div class="small d-flex justify-content-start">
                                                <a href="#!" class="d-flex align-items-center me-3">
                                                    <i class="far fa-thumbs-up me-2"></i>
                                                    <p class="mb-0">Like</p>
                                                </a>
                                                <a href="#!" class="d-flex align-items-center me-3">
                                                    <i class="far fa-comment-dots me-2"></i>
                                                    <p class="mb-0">Comment</p>
                                                </a>
                                                <a href="#!" class="d-flex align-items-center me-3">
                                                    <i class="fas fa-share me-2"></i>
                                                    <p class="mb-0">Share</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="container my-5 py-5">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12 col-lg-10 col-xl-8">
                                    <div class="card" style="width: auto;">
                                        <div class="card-body">
                                            <div class="d-flex flex-start align-items-center">
                                                <img class="rounded-circle shadow-1-strong me-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                                                    alt="avatar" width="60" height="60" />
                                                <div>
                                                    <h6 class="fw-bold text-primary mb-1">Lily Coleman</h6>
                                                    <p class="text-muted small mb-0">
                                                        Shared publicly - Jan 2020
                                                    </p>
                                                </div>
                                            </div>

                                            <p class="mt-3 mb-4 pb-2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                                            </p>

                                            <div class="small d-flex justify-content-start">
                                                <a href="#!" class="d-flex align-items-center me-3">
                                                    <i class="far fa-thumbs-up me-2"></i>
                                                    <p class="mb-0">Like</p>
                                                </a>
                                                <a href="#!" class="d-flex align-items-center me-3">
                                                    <i class="far fa-comment-dots me-2"></i>
                                                    <p class="mb-0">Comment</p>
                                                </a>
                                                <a href="#!" class="d-flex align-items-center me-3">
                                                    <i class="fas fa-share me-2"></i>
                                                    <p class="mb-0">Share</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    </div>
</template>

<style></style>
