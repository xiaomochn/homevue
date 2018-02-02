<template>
    <div class="navsize">

        <image style="width: 60px; height: 60px " :src=imagesrc @click="onBackClick"></image>
        <div style="justify-content: center ;align-items: center; width: 640px;height: 80px;flex-direction: row;position: relative;top: 0;left: 0">
            <text style="color: #3142f5">{{title}}</text>
        </div>
    </div>
</template>

<script>
    import xbuinessModule from '../utilModules/xbuinessModule'

    export default {
        name: 'navigationBar',
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            onBackClick() {
                console.log(this.letftButtonClick)
                if (!this.letftButtonClick.click()) {
                    xbuinessModule.backPage()
                }
            }

        },
        props: {
            imagesrc: {default: '../img/left_arrow.png'},
            title: {default: '页面'},
            letftButtonClick: {
                default: {
                    click() {
                        return false
                    }
                }
            },
        }
    }
</script>

<style>


    .navsize {

        top: 0;
        left: 0;
        flex-direction: row;
        align-items: center;
        height: 80px;
        width: 750px;

    }
</style>