<template>
    <div class="card mb-4 box-shadow">
        <img class="card-img-top" style="height: 225px; width: 100%; display: block;" :src="pic">
        <div class="card-body">
            <p class="card-text">{{ msg }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "album",
        props: ['msg', 'pic']
    }
</script>

<style scoped>

</style>