<template>
    <div class="background">
        <div class="form-group">
            <h1>
                Download the latest version
            </h1>
            <p>
                Minecraft v1.10.2
            </p>
            <a class="btn btn-outline-light" href="https://google.ca/">Download</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "download-page",
        data() {
            return {
                windowHeight: 0
            }
        },
        methods: {

        },
        created() {
        }
    }
</script>

<style scoped>
    div.background {
        padding-top: 100px;
        padding-bottom: 100px;
        color: #fff;
        background-color: #343a40;
        text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, .5);
    }
</style>