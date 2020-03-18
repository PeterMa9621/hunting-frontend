<template>
    <div class="container-fluid">
        <div class="row page-header">
            <div class="col-md-6 col-sm-12 my-auto">
                <div class="row">
                    <div class="col">
                        <h1 class="page-header">Welcome to Hunting World</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h3 class="page-header">Jump into the dark, danger and challenge world</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <router-link to="/download" class="btn btn-outline-light mt-5" style="color: wheat">Download Game</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="row justify-content-center mt-5">
                    <div class="polaroid">
                        <img src="https://photolemur.com/img/home/top-slider/after-1440.jpg" width="100%" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="row page-split"></div>
        <div class="row justify-content-center">
            <div class="container">


            </div>
        </div>
        <div class="row col">
            <left-info-right-img :msg="'Build Your Dream House'" :pic="albums[5].pic"></left-info-right-img>
            <right-info-left-img :msg="'Find Beautiful of the World'" :pic="albums[2].pic"></right-info-left-img>
            <left-info-right-img :msg="'Pick Up Your Pickaxe'" :pic="albums[4].pic"></left-info-right-img>
            <right-info-left-img :msg="'Enjoy Mining and Adventure'" :pic="albums[3].pic"></right-info-left-img>
        </div>

        <div class="row justify-content-center mt-5">
            <div class="container">
                <div class="row col justify-content-center">
                    <div>
                        <h1>Look around in the hunting world</h1>
                        <hr>
                    </div>
                </div>

                <album-list :albums="albums" class="mt-5"></album-list>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftInfoRightImg from "../../components/article/LeftInfoRightImg";
    import RightInfoLeftImg from "../../components/article/RightInfoLeftImg";
    import AlbumList from "../../components/album/AlbumList";

    export default {
        name: 'home-page',
        props: {
            msg: String,
        },
        components: {
            AlbumList,
            LeftInfoRightImg,
            RightInfoLeftImg
        },
        data() {
            return {
                news: [],
                albums: [
                    {pic: require('../../assets/img/pic1.png'), msg: 'Test1'},
                    {pic: require('../../assets/img/pic2.png'), msg: 'Test2'},
                    {pic: require('../../assets/img/pic3.jpg'), msg: 'Test3'},
                    {pic: require('../../assets/img/pic4.png'), msg: 'Test4'},
                    {pic: require('../../assets/img/pic5.png'), msg: 'Test5'},
                    {pic: require('../../assets/img/pic6.png'), msg: 'Test6'},
                ]
            }
        },
        methods: {
        },
        created() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1.page-header, h3.page-header {
        position:relative;
        color: wheat;
        z-index: 1;
    }
    div.page-header {
        position:relative;
        background-color: #343a40;
        z-index: 1;
    }

    div.polaroid {
        width: 80%;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-bottom: 25px;
        z-index: 1;
    }

    div.page-split {
        background-color: #343a40;
        height: 180px;
        transform: skewY(-5deg) translateY(-100px);
        z-index: 0;
    }
</style>
