<template>
    <div class="continer">


        <wxc-minibar title=""
                     background-color="#00000000"
                     text-color="#FFFFFF"
                     right-text="  完 成"
                     @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                     @wxcMinibarRightButtonClicked="minibarLeftButtonClick"
                     style="opacity: 0.5"></wxc-minibar>
        <div class="a-input-div" :style="{height:screenHeight-50}">
            <image class="aimage" resize="contain" :src="imgSrc" :style="{height:screenHeight}"/>
            <textarea :style="{height:screenHeight-50}"
                      class="a-input"
                      rows="30"
                      @input="onChange"
                      placeholder=""/>

        </div>


    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";

    import xbuiness from '../../utilModules/xbuinessModule'

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
            addWorld() {

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
        left: 20px;
        width: 700px;
        height: 1000px;
        background-color: transparent;
        color: white;
        fount-weight: bold;
    }

    .aimage {
        width: 750px;
        position: absolute
    }
</style>