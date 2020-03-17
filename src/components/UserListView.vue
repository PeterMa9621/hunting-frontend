<template>
  <div class="container">

    <div class="card">
      <div class="card-header">
        Home page
      </div>
      <div class="card-body">
        <div class="card card-body" v-for="user in users" :key="user.id">
          <div class="row">
            <div class="col-2 my-auto">
              <img src="https://photolemur.com/img/home/top-slider/after-1440.jpg" width="100%">
            </div>
            <div class="col-10">
              <div class="row justify-content-between">
                <small>{{user.username}}</small>
                <small>{{user.created_at}}</small>
              </div>
              <div class="row">
                {{user.email}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import UserService from "../services/UserService";

export default {
  name: 'UserListView',
  props: {
    msg: String
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUser() {
      UserService.getUser().then((response) => {
        this.users = response;
      });
    }
  },
  created() {
    this.getUser();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
