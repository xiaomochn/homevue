<template>
    <div>
        <wxc-minibar title="标题"
                     background-color="#009ff0"
                     text-color="#FFFFFF"
                     right-text="更多"
                     @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                     @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>

        <wxc-button text="Open Popup"
                    @wxcButtonClicked="buttonClicked">
        </wxc-button>
        <wxc-popup width="500"
                   pos="left"
                   :show="isShow"
                   @wxcPopupOverlayClicked="overlayClicked">
        </wxc-popup>
    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../component/navigationBar.vue";
    const modal = weex.requireModule('modal');

    export default {
        components: {navigationBar, WxcButton, WxcPopup, WxcMinibar},
        name: "home_12306",
        data() {
            return {
                isShow: false
            }
        },

        methods: {

            buttonClicked() {
                this.isShow = true;
                weex.requireModule('businessLauncher').getString()
                console.log("buttonClicked")
            },
            overlayClicked() {
                this.isShow = false;
            },
            minibarLeftButtonClick() {
            },
            minibarRightButtonClick() {
                modal.toast({'message': 'click rightButton!', 'duration': 1});
            }
        }
    }
</script>

<style scoped>

</style>