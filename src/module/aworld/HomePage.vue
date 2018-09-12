<template>
    <div class="continer">

        <div ref="space1" class="space" style="opacity: 0">
            <image class="aimage" resize="contain" :src="aworlds[1].aimage" :style="{height:screenHeight}"/>
            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">{{aworlds[1].aworld}}</text>
            </div>
        </div>
        <div ref="space0" @click="minibarRightButtonClick" class="space">
            <image class="aimage" resize="contain" :src="aworlds[0].aimage" :style="{height:screenHeight}"/>
            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">{{aworlds[0].aworld}}</text>
            </div>
        </div>
        <div style="flex-direction: row;opacity: 0.5">
            <text style="color: #ffffff;font-size: 80px;padding-left: 30px;padding-top: 20px">?</text>
            <div style="flex: 1"></div>
            <text style="color: #ffffff;font-size: 80px;padding-left: 30px;padding-top: 20px;padding-right: 20px"
                  @click="addWorld">+
            </text>
        </div>
        <!--<wxc-minibar title=""-->
        <!--use-default-return=false-->
        <!--background-color="#00000000"-->
        <!--text-color="#FFFFFF"-->
        <!--right-text="更多"-->
        <!--@wxcMinibarLeftButtonClicked="minibarLeftButtonClick"-->
        <!--@wxcMinibarRightButtonClicked="minibarRightButtonClick"-->
        <!--style="opacity: 0.5"></wxc-minibar>-->
    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";
    import xbuiness from '../../utilModules/xbuinessModule'
    const animation = weex.requireModule('animation')

    const modal = weex.requireModule('modal');

    export default {
        components: {navigationBar, WxcButton, WxcPopup, WxcMinibar},
        name: "home-aworld",
        data() {
            return {
                aworlds: [
                    {
                        aworld: "考拉征信1",
                        aimage: "http://10.5.19.26:8445/app/kaolaweb/kaolaapp/creditloan/theme/0fc94f73-8930-450f-93f2-bd958eca8c78.png",
                        ref: this.$refs.space0
                    },
                    {
                        aworld: "考拉征信2",
                        aimage: "http://10.5.19.26:8445/app/kaolaweb/kaolaapp/creditloan/theme/3ca16bb2-54cd-491a-929a-4c48818dcdd7.png",
                        ref: this.$refs.space1
                    },
                ],
                currentIndex: 0,
                screenHeight: 1000

            }
        },

        mounted() {
            this.aworlds[0].ref = this.$refs.space0
            this.aworlds[1].ref = this.$refs.space1
            this.screenHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750
        },
        methods: {
            minibarRightButtonClick() {

                var space1 = this.getCurrentItem();
                var space2 = this.getNextItem();
                this.currentIndex = (this.currentIndex + 1) % 2
                animation.transition(space1, {
                    styles: {
                        opacity: '0'
                    },
                    duration: 800, //ms
                    timingFunction: 'ease',
                    delay: 0 //ms
                }, function () {
                    // modal.toast({message: 'animation finished.'})
                })
                animation.transition(space2, {
                    styles: {
                        opacity: '1'
                    },
                    duration: 800, //ms
                    timingFunction: 'ease',
                    delay: 0 //ms
                }, function () {
                    // modal.toast({message: 'animation finished.'})
                })
            },
            addWorld() {
                xbuiness.openURL('module/aworld/AddAworld')
            },
            getCurrentItem() {
                return this.aworlds[this.currentIndex].ref
            },
            getNextItem() {
                return this.aworlds[(this.currentIndex + 1) % 2].ref
            },
        }
    }
</script>

<style scoped>
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
    .continer{
        background-image: linear-gradient(to bottom right , #339bce, #35cc89);
    }
</style>