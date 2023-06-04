<script>
import { mapActions, mapState} from 'pinia';
import { useMainStore } from '../stores';


export default {
    name: 'massages',
    data() {
        return {

        }
    },
    computed: {
        ...mapState(useMainStore, ["massages", "detailMassage"])
    },
    methods: {
        ...mapActions(useMainStore, ["handleFetchMassages", "handleFetchDetail"])
    },
    created(){
        this.handleFetchMassages()
    }
}
</script>

<template>
    <div class="bg-body-tertiary"
        style="position: absolute; top: 0; height: 60px; width: auto; min-width: 100%; z-index: -1;">
    </div>
    <div class="d-flex justify-content-center">
        <div class="w-75">
            <div class="d-flex flex-column mt-3">
                <form class="d-flex justify-content-center mb-3">
                    <div class="input-container">
                        <input type="text" name="text" class="input" placeholder="search...">
                        <span class="icon">
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                    <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                                        stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <!-- <div class="mb-3">
                                                                    <label for="exampleFormControlInput1" class="form-label">Search Massage:</label>
                                                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                                                        placeholder="Insert the name of the massage">
                                                                    <div>
                                                                        <button type="submit" class="btn btn-primary mt-3">Search</button>
                                                                    </div>
                                                                </div> -->
                </form>
                <div style="min-height: 75vh;">
                    <div class="d-flex justify-content-center column-gap-5 row-gap-5 flex-wrap">
                        
                        <div class="cards" v-for="massage in massages">

                            <a @click.prevent="handleFetchDetail(massage.id)" href=""><img class="cards-img"
                                :src="massage.imgUrl"
                                alt=""></a>

                            <div class="cards-info">
                                <p class="text-title">{{ massage.title }}</p>
                                <p class="text-body"><b>Duration: </b>{{ massage.duration }} Minutes</p>
                            </div>
                            <div class="cards-footer">
                                <span class="text-title">Rp {{massage.price}}</span>
                                <div class="cards-button">
                                    <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path
                                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                                        </path>
                                        <path
                                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                                        </path>
                                        <path
                                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.input-container {
    width: 25%;
    position: relative;
}

.icon {
    position: absolute;
    right: 10px;
    top: calc(50% + 5px);
    transform: translateY(calc(-50% - 5px));
}

.input {
    width: 100%;
    height: 40px;
    padding: 10px;
    transition: .2s linear;
    border: 2.5px solid black;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.input:focus {
    outline: none;
    border: 0.5px solid black;
    box-shadow: -5px -5px 0px black;
}

.input-container:hover>.icon {
    animation: anim 1s linear infinite;
}

@keyframes anim {

    0%,
    100% {
        transform: translateY(calc(-50% - 5px)) scale(1);
    }

    50% {
        transform: translateY(calc(-50% - 5px)) scale(1.1);
    }
}

.cards {
    width: 190px;
    height: auto;
    padding: .8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.cards-img {
    background-color: #ffcaa6;
    height: 10vh;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
}

.cards-info {
    padding-top: 10%;
}

svg {
    width: 20px;
    height: 20px;
}

.cards-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
}

/*Text*/
.text-title {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
}

.text-body {
    font-size: .9em;
    padding-bottom: 10px;
}

/*Button*/
.cards-button {
    border: 1px solid #252525;
    display: flex;
    padding: .3em;
    cursor: pointer;
    border-radius: 50px;
    transition: .3s ease-in-out;
}

/*Hover*/
.cards-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.cards-button:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
}</style>
