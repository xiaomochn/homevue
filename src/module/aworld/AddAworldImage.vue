<template>
    <div class="continer">

        <div @click="addImage" class="space">
            <image class="tab" resize="contain" src="../../img/bluetooth_off_ta.png"/>
            <image class="aimage" resize="cover" :src="imgSrc" :style="{height:screenHeight}"/>

            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">{{inputWorld}}</text>
            </div>
        </div>

        <div style="flex-direction: row;opacity: 0.5">
            <image class="addWorld" src="../../img/back_button.png" @click="back"/>
            <div style="flex: 1"></div>
            <image class="addWorld" src="../../img/authorization_success_icon.png" @click="addWorld"/>
        </div>
        <wxc-loading :show="showLoading" type="trip" loading-text="努力加载中..."></wxc-loading>
        <wxc-part-loading :show="showLoading"></wxc-part-loading>

    </div>
</template>

<script>
    import {WxcLoading, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";

    const stream = weex.requireModule('stream')
    const modal = weex.requireModule('modal');
    import xbuiness from '../../utilModules/CommonModule'
    import sha1m from '../../js/sha1.min'


    export default {
        components: {navigationBar, WxcLoading, WxcPopup, WxcMinibar},
        name: "home-aworld",
        data() {
            return {
                screenHeight: 1000,
                textHeight: 300,
                imgSrc: "",
                inputWorld: "",
                path: "",
                showLoading: false
            }
        },

        mounted() {
            this.screenHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750
        },
        methods: {
            back() {
                xbuiness.backPage()
                // xbuiness.openURL("module/util/AddImage")
            },

            addImage() {
                xbuiness.PickeImage(src => {

                    console.log(src)
                    this.imgSrc = "file:///" + src
                    this.path = src
                })
            },
            addWorld() {
                this.showLoading = true
                if (this.path == "") {
                    this.commitItem("")
                } else {
                    xbuiness.uploadFile(this.path, url => {
                        this.commitItem(url)
                    })
                }


            },
            commitItem(url) {
                xbuiness.getString("currentItemIndex", i => {

                    const parm = {

                        "title": "",
                        "des": this.inputWorld,
                        "img": url,
                        "did": "default",
                        "index": i,
                    }

                    stream.fetch({
                        method: "POST",
                        url: 'https://d.apicloud.com/mcm/api/aworlds',
                        type: 'json',
                        headers: sha1m.getttt(),
                        body: parm
                    }, res => {
                        if (res.ok) {
                            this.showLoading = false
                            xbuiness.backByNum(2)
                        } else {

                            modal.toast({
                                'message': '提交出错请重试',
                                'duration': 1
                            });
                            return

                        }
                    })
                })

            }
        }
    }
</script>

<style scoped>

    .continer {
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
    }

    .aworld {
        width: 750px;
        font-size: 40px;
        color: white;
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

    .tab {
        top: 700px;
        left: 341px;
        width: 68px;
        height: 120px;
        position: absolute
    }

    .space {

        position: absolute
    }

    .continer {
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
    }

    .addWorld {
        width: 140px;
        height: 140px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-right: 30px;
        padding-left: 30px;
    }
</style>