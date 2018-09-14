<template>
    <div class="continer">
        <wxc-minibar title=""
                     background-color="#00000000"
                     text-color="#FFFFFF"
                     right-text="完成"
                     @wxcMinibarLeftButtonClicked="addWorld"
                     @wxcMinibarRightButtonClicked="addWorld"
                     style="opacity: 0.5"></wxc-minibar>
        <div @click="minibarRightButtonClick" class="space">
            <image class="aimage" resize="contain" :src="imgSrc" :style="{height:screenHeight}"/>
            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">{{inputWorld}}</text>
            </div>
        </div>

    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";

    const stream = weex.requireModule('stream')
    const modal = weex.requireModule('modal');
    import xbuiness from '../../utilModules/xbuinessModule'
    import sha1m from '../../js/sha1.min'


    export default {
        components: {navigationBar, WxcButton, WxcPopup, WxcMinibar},
        name: "home-aworld",
        data() {
            return {
                screenHeight: 1000,
                textHeight: 300,
                imgSrc: "",
                inputWorld: ""
            }
        },

        mounted() {
            this.screenHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750
        },
        methods: {
            addWorld() {

                xbuiness.getString("currentItemIndex", v => {
                    const parm = {

                        "title": "",
                        "des": this.inputWorld,
                        "img": this.imgSrc,
                        "did": "default",
                        "index": v,
                    }
                    console.log(parm)
                    stream.fetch({
                        method: "POST",
                        url: 'https://d.apicloud.com/mcm/api/aworlds',
                        type: 'json',
                        headers: sha1m.getttt(),
                        body: parm
                    }, res => {
                        if (res.ok) {
                            xbuiness.backByNum(2)
                        } else {

                        }
                    })
                })

            },
        }
    }
</script>

<style scoped>

    .continer {
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
    }

    .aworld {
        width: 750px;
        fount-size: 40px;
        color: #717171;
        text-align: center;
    }

    .aworld-div {
        align-items: center;
        flex-direction: row;
        width: 750px;
    }

    .aimage {
        width: 750px;
        position: absolute
    }

    .space {

        position: absolute
    }

    .continer {
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
    }
</style>