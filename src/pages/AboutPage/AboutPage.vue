<template>
    <div>
        <div style="background-color: #e1e1e1;">
            <div class="mt-2 container" style="transform: translateY(40px)">
                <h1>About US</h1>
                <p>Hunting World is a MineCraft mod server.</p>
                <p>You can feel free to enjoy in the world that we built.</p>
            </div>
            <div style="background-color: white; height: 180px; transform: rotate(-5deg) translateY(100px);"></div>
        </div>
        <div style="transform: translateY(-20px)">
            <div class="mt-2 container" style="transform: translateY(40px)">
                <h1>Contact US</h1>
                <p>If you have any question, please feel free to contact us.</p>
                <p>Email: majingyuan2000@gmail.com</p>
            </div>
            <div style="background-color: white; height: 180px; transform: rotate(-5deg) translateY(100px);"></div>
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

</style>