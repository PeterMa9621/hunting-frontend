<template>
    <div>
        <div style="background-color: #343a40">
            <div class="container" style="transform: translateY(40px);">
                <h1 class="about">About US</h1>
                <p class="about">Hunting World is a MineCraft mod server.</p>
                <p class="about">You can feel free to enjoy in the world that we built.</p>
            </div>
            <div class="page-split"></div>
        </div>
        <div style="transform: translateY(-20px)">
            <div class="mt-2 container" style="transform: translateY(40px)">
                <h1 class="contact">Contact US</h1>
                <p class="contact">If you have any question, please feel free to contact us.</p>
                <p class="contact">Email: majingyuan2000@gmail.com</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                screenWidth: 0
            }
        },
        created() {
            window.addEventListener("resize", this.myEventHandler);
        },
        destroyed() {
            window.removeEventListener("resize", this.myEventHandler);
        },
        methods: {
            myEventHandler(e) {
                this.screenWid = e.target.innerWidth;
            }
        }
    }
</script>

<style scoped>
    h1.about {
        color: wheat;
    }
    p.about {
        color: navajowhite;
    }
    h1.contact {
        color: black;
    }
    p.contact {
        color: #919191;
    }
    div.page-split {
        background-color: white;
        height: 20vh;
        transform: skewY(-5deg) translateY(10vh);
    }
</style>