<template>
    <div class="continer">

        <div style="flex-direction: row;opacity: 0.5">
            <image class="addWorld" src="../../img/back_button.png" @click="back"/>
            <div style="flex: 1"></div>
            <image class="addWorld" src="../../img/authorization_success_icon.png" @click="minibarLeftButtonClick"/>
        </div>
        <div class="a-input-div" :style="{height:screenHeight-50}">
            <image class="aimage" resize="cover" :src="imgSrc" :style="{height:screenHeight}"/>
            <textarea :style="{height:screenHeight-50}"
                      class="a-input"
                      rows="30"
                      @input="onChange"
                      placeholder="输入内容,完成后可以在下一步添加一张图片"/>

        </div>


    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";

    import xbuiness from '../../utilModules/CommonModule'

    const modal = weex.requireModule('modal');

    export default {
        components: {navigationBar, WxcButton, WxcPopup, WxcMinibar},
        name: "home-aworld",
        data() {
            return {
                screenHeight: 1000,
                textHeight: 300,
                imgSrc: "",
                inputWorld:""
            }
        },

        mounted() {
            this.screenHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750
        },
        methods: {
            back() {
                xbuiness.backPage()
            },
            minibarLeftButtonClick(){
                const parm = {inputWorld:this.inputWorld}

                xbuiness.openURL("module/aworld/AddAworldImage",JSON.stringify(parm))
            },
            onChange(event){
                this.inputWorld = event.value
            }

        }
    }
</script>

<style scoped>

    .continer {
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
    }

    .a-input-div {
        width: 750px;
        flex-direction: row;
        align-items: center
    }

    .a-input {
        left: 30px;
        width: 690px;
        height: 1000px;
        color: white;
        fount-weight: bold;
        font-size: 40px;
        placeholder-color:white;
    }

    .aimage {
        width: 750px;
        position: absolute
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