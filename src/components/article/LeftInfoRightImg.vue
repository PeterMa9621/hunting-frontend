<template>
    <div class="row">
        <div class="col row">
            <div class="col-5 my-auto">
                <h2>{{msg}}</h2>
            </div>
            <div class="col-7">
                <div class="row justify-content-center">
                    <div class="polaroid">
                        <img :src="pic" alt="" width="100%">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "left-info-right-img",
        props: ['msg', 'pic']
    }
</script>

<style scoped>
    div.polaroid {
        width: 80%;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-bottom: 25px;
        z-index: 1;
    }
</style>