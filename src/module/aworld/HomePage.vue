<template>
    <div class="continer" @appear="appear" @disappear="disappear">
        <div ref="space1" class="space" style="opacity: 0">
            <image class="aimage" resize="cover" :src="aworlds[1].aimage" :style="{height:screenHeight}"/>
            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">{{aworlds[1].aworld}}</text>
            </div>
        </div>
        <div ref="space0" @click="minibarRightButtonClick" class="space">
            <image class="aimage" resize="cover" :src="aworlds[0].aimage" :style="{height:screenHeight}"/>
            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">{{aworlds[0].aworld}}</text>
            </div>
        </div>

        <div ref="spaceleft" @click="spaceleftOff" class="space-left" :style="{visibility:spaceleftVisibility }">
            <div class="aworld-div" :style="{height:screenHeight}">
                <text class="aworld">
你一定有一句话想对谁说
你一定有一些秘密却想让谁知道
在这里
你可以尽情的呐喊
在这里
你可以尽情倾诉
一句告白
一声呐喊
在这里发布的消息
会立即显示在
所有正在使用这个App的屏幕上
直到被其他人替换
                </text>
            </div>
        </div>
        <div style="flex-direction: row;opacity: 0.5">
            <image class="addWorld" src="../../img/tutorial_button.png" @click="spaceleftOn"/>
            <div style="flex: 1"></div>
            <image class="addWorld" src="../../img/add_device_butto.png" @click="addWorld"/>
        </div>
    </div>
</template>

<script>
    import {WxcButton, WxcPopup, WxcMinibar} from 'weex-ui';
    import navigationBar from "../../component/navigationBar.vue";
    import xbuiness from '../../utilModules/CommonModule'
    import sha1m from '../../js/sha1.min'

    const animation = weex.requireModule('animation')
    const stream = weex.requireModule('stream')
    const modal = weex.requireModule('modal');

    export default {
        components: {navigationBar, WxcButton, WxcPopup, WxcMinibar},
        name: "home-aworld",
        data() {
            return {
                aworlds: [
                    {
                        aworld: "",
                        aimage: "",
                        ref: this.$refs.space0,
                        id: "1"
                    },
                    {
                        aworld: "考拉征信2",
                        aimage: "",
                        ref: this.$refs.space1,
                        id: ""
                    },
                ],
                currentIndex: 0,// 本地 两条里边的
                screenHeight: 1000,
                spaceleftVisibility: "hidden",
                timer: "",
                currentItemIndex: 0,// 服务器 index
            }
        },

        mounted() {
            this.aworlds[0].ref = this.$refs.space0
            this.aworlds[1].ref = this.$refs.space1
            this.screenHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750

        },
        destroyed() {

        },
        methods: {
            minibarRightButtonClick() {

                const current = this.getCurrentItem()
                const next = this.getNextItem()
                const space1 = current.ref;
                const space2 = next.ref;

                if (next.id == "" || current.id == next.id) return;
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
                }, () => {
                    // modal.toast({message: 'animation finished.'})

                })

            },
            setCurrent() {
                stream.fetch({
                    method: "GET",
                    url: 'https://d.apicloud.com/mcm/api/aworlds?filter={"where":{},"order":"updatedAt%20DESC","skip":0,"limit":1}',
                    type: 'json',
                    headers: sha1m.getttt(),
                }, res => {
                    if (res.ok && res.data.length > 0) {
                        const next = this.getCurrentItem()
                        next.aworld = res.data[0].des
                        next.aimage = res.data[0].img
                        next.id = res.data[0].id
                    }
                })
            },
            disappear(){
                clearInterval(this.timer)
            },
            appear(){

                this.setCurrent()

                this.timer = setInterval(() => {
                    this.minibarRightButtonClick()
                    this.getaddWorld()
                }, 5000)
            },
            getaddWorld() {

                stream.fetch({
                    method: "GET",
                    url: 'https://d.apicloud.com/mcm/api/aworlds?filter={"where":{},"order":"updatedAt%20DESC","skip":0,"limit":1}',
                    type: 'json',
                    headers: sha1m.getttt(),
                }, res => {
                    if (res.ok && res.data.length > 0) {
                        const next = this.getNextItem()
                        next.aworld = res.data[0].des
                        next.aimage = res.data[0].img
                        next.id = res.data[0].id

                        if (!isNaN(res.data[0].index)) {
                            xbuiness.setString("currentItemIndex", res.data[0].index + 1 + "")
                        }

                    }
                })
            },
            addWorld() {
                xbuiness.openURL('module/aworld/AddAworld')
            },
            getCurrentItem() {
                return this.aworlds[this.currentIndex]
            },
            getNextItem() {
                return this.aworlds[(this.currentIndex + 1) % 2]
            },
            spaceleftOn() {

                if (this.spaceleftVisibility == "visible") {
                    this.spaceleftOff()
                    return
                }
                const space = this.$refs.spaceleft
                this.spaceleftVisibility = "visible"
                animation.transition(space, {
                    styles: {
                        opacity: '1',
                    },
                    duration: 300, //ms
                    timingFunction: 'ease',
                    delay: 0 //ms
                }, function () {
                    // modal.toast({message: 'animation finished.'})
                })
            },
            spaceleftOff() {
                const space = this.$refs.spaceleft
                // this.spaceleftVisibility = "hidden"
                animation.transition(space, {
                    styles: {
                        opacity: '0',
                    },
                    duration: 300, //ms
                    timingFunction: 'ease',
                    delay: 0 //ms
                }, () => {
                    this.spaceleftVisibility = "hidden"
                })
            },
        }
    }
</script>

<style scoped>
    .aworld {
        width: 750px;
        font-size: 40px;
        color: white;
        text-align: center;
        line-height: 60px;
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

    .space-left {
        top: 0;
        left: 0;
        width: 750px;
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
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

    .continer {
        background-image: linear-gradient(to bottom right, #339bce, #35cc89);
    }
</style>