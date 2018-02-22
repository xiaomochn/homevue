<template>
    <div class="navsize">

        <image style="width: 60px; height: 60px " :src=imagesrc @click="onBackClick"></image>
        <div style="justify-content: center ;align-items: center; width: 520px;height: 80px;flex-direction: row;position: relative;top: 0;left: 60px">
            <text style="color: #3142f5">{{title}}</text>
        </div>
        <text v-if="this.righttext != ''"
              style=" height: 60px;width: 100px; text-align:right; justify-content:center;align-items: center;"
              @click="onRightClick">{{righttext}}
        </text>
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
                if (!this.letftButtonClick.click()) {
                    xbuinessModule.backPage()
                }
            },
            onRightClick() {
                console.log( this.rightButtonClick)
                this.rightButtonClick.click()
            }

        },
        props: {
            imagesrc: {default: '../img/left_arrow.png'},
            title: {default: '页面'},
            righttext: '',
            letftButtonClick: {
                default: {
                    click() {
                        return false
                    }
                }
            },
            rightButtonClick: {
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