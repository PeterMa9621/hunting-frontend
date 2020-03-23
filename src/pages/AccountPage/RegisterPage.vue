<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
            </div>
            <div class="col-md-4 fadeInDown">
                <div class="card mt-4">
                    <div class="card-img-top">
                        <div class="row justify-content-center">
                            <img :src="require('@/assets/logo.png')" alt="">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input class="form-control" id="username" placeholder="Username" v-model="username">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" id="password" placeholder="Password" v-model="password">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" id="confirm-password" placeholder="Confirm Password" v-model="confirmPassword">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" placeholder="Email" v-model="email">
                                </div>
                                <div class="form-group">
                                    <span v-if="errorMsg" style="color: darkred">{{ errorMsg }}</span>
                                </div>
                                <button class="btn btn-primary" @click="register()">Create</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div>
                            Already have account?
                            <router-link to="/login">Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>
</template>

<script>
    import UserService from "../../services/UserService";
    import router from "../../router/Router";

    export default {
        name: "register-page",
        data() {
            return {
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                errorMsg: ''
            }
        },
        methods: {
            register() {
                UserService.addUser({
                    username: this.username,
                    password: this.password,
                    email: this.email
                }).then((response) => {
                    alert('Succeed!' + response);
                    console.log(response);
                    router.push({name: 'login'})
                }).catch((error) => {
                    this.errorMsg = error.response.data;
                    //alert(error.response.data);
                });
            }
        }
    }
</script>

<style scoped>
    .form-control{
        border-radius:0.5rem;
    }

    .btn-primary{
        border-radius:0.4rem;
        border: none;
        box-shadow: 0 10px 30px 0 rgba(95,186,233, 0.3)
    }

    .fadeInDown {
        -webkit-animation-name: fadeInDown;
        animation-name: fadeInDown;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    @-webkit-keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }

    @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }

    .card {
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        border-radius:0.5rem;
    }
</style>