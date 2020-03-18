<template>
    <div class="row">
        <div class="col-md-4" v-for="album in albums" v-bind:key="album.id">
            <album :pic="album.pic" :msg="'Test'"></album>
        </div>
    </div>
</template>

<script>
    import Album from "./Album";
    export default {
        name: "album-list",
        props: ['albums'],
        components: {
            Album
        }
    }
</script>

<style scoped>

</style>