<template>
    <div>
        <image class="imgsize" src="https://vuejs.org/images/logo.png" @click="adduser"></image>
        <text>{{noteMessage}}</text>

        <text v-if="shwoTimer" class="timertext">{{timerCode}}</text>
        <list class="list">
            <cell class="cell" v-for="(k ,num) in lists" @click="itmeClick(num)">
                <div class="panel">
                    <text class="text"> {{k.userNickname}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>

    import dialog from './utilModules/dialog'

    const globalEvent = weex.requireModule('globalEvent')
    export default {
        name: "home",
        data: {
            noteMessage: "点击图片添加用户",
            lists: [{userId:'1',userNickname:'12'}],
            timerCode: -1,
            timerCodet: -1,
            shwoTimer: false
        },

        mounted() {

            globalEvent.addEventListener("onnewuser", (params) => {
                if (this.shwoTimer) {
                    this.lists.splice(this.lists.length, 1,params)
                    let businessLauncherModule = weex.requireModule('businessLauncher')
                    businessLauncherModule.addUser(params.userId, params.userNickname, 0)
                }

            });

        },
        methods: {
            startTimer(run) {
                if (run) {
                    this.timerCode = 30
                    this.shwoTimer = true
                    this.timerCodet = setInterval(() => {
                        this.timerCode = this.timerCode - 1
                        if (this.timerCode <= 0) {
                            clearInterval(this.timerCodet)
                            this.shwoTimer = false
                            this.noteMessage = "点击图片添加用户"
                        }
                    }, 1000)
                } else {
                    clearInterval(this.timerCodet)
                    this.shwoTimer = false
                    this.timerCode = -1

                }


            },
            adduser() {
                if (this.noteMessage == "点击停止添加用户") {
                    this.noteMessage = "点击图片添加用户"
                    this.startTimer(false)
                } else {
                    this.noteMessage = "点击停止添加用户"
                    this.startTimer(true)
                }
            },
            itmeClick(num) {
                console.log("itemclick" + num)
                dialog.showTwoBtnAlertDialog('删除该用户', '删除该用户的信息', '不删除', '删除', data => {
                    if (data.res = 'right'){
                        let businessLauncherModule = weex.requireModule('businessLauncher')
                        businessLauncherModule.deleteUser(this.lists[num].userId)
                    }
                })
            }

        }
    }
</script>

<style scoped>
    .imgsize {
        margin: 20;
        width: 300;
        height: 300;

    }

    .timertext {
        margin-left: 30;
        font-size: 26;
        color: #0088fb;
        font-weight: bold;
    }


    .panel {
        width: 600px;
        height: 100px;
        margin-left: 10;
        margin-top: 8;
        margin-right: 10;
        flex-direction: column;
        justify-content: center;
        border-width: 2;
        border-style: solid;
        border-color: #afddff;
        background: azure;
    }
</style>