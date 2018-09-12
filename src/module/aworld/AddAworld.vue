<template>
    <div class="continer">


        <wxc-minibar title=""
                     background-color="#00000000"
                     text-color="#FFFFFF"
                     right-text="完成"
                     @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                     @wxcMinibarRightButtonClicked="minibarRightButtonClick"
                     style="opacity: 0.5"></wxc-minibar>
        <div class="a-input-div" :style="{height:screenHeight-50}">
            <image class="aimage" resize="contain" :src="imgSrc" :style="{height:screenHeight}"/>
            <textarea :style="{height:screenHeight-50}"
                      class="a-input"
                      rows="0"
                      placeholder="啊;是的会计法;三六九等发;埃里克惊世毒妃;阿拉基;埃里克森江东父老;埃及水电费;阿克苏江东父老;阿世纪东方;阿里看见舒服多了;埃及水电费拉进来看见了解了;就  拉近了看了解拉开距离框架了就拉进来看见李经理"/>

        </div>


    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";

    const animation = weex.requireModule('animation')

    const modal = weex.requireModule('modal');

    export default {
        components: {navigationBar, WxcButton, WxcPopup, WxcMinibar},
        name: "home-aworld",
        data() {
            return {
                screenHeight: 1000,
                textHeight: 300,
                imgSrc: "http://10.5.19.26:8445/app/kaolaweb/kaolaapp/creditloan/theme/0fc94f73-8930-450f-93f2-bd958eca8c78.png"
            }
        },

        mounted() {
            this.screenHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750
        },
        methods: {
            addWorld() {

            },
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