<template>
    <div class="container">
        <user-list-view></user-list-view>
    </div>
</template>

<script>
    import UserListView from "../../components/listview/UserListView";

    export default {
        name: "admin-page",
        components: {
            UserListView
        },
        created() {
        }
    }
</script>

<style scoped>

</style>