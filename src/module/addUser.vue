<template>
    <div>
        <image class="imgsize" src="https://vuejs.org/images/logo.png" @click="adduser"></image>
        <text>{{noteMessage}}</text>
        <text v-if="shwoTimer" class="timertext">{{timerCode}}</text>
        <list class="list">
            <header class="navspace">

            </header>
            <cell class="cell" v-for="(k ,num) in lists" @click="itmeClick(num)">
                <div class="panel">
                    <text class="text"> {{k.userNickname}}</text>
                </div>
            </cell>

        </list>
        <navigationBar title="添加用户"
                       style="width: 750px;height: 80px;position: absolute;top: 0;left: 0px"></navigationBar>

    </div>
</template>

<script>

    import dialog from '../utilModules/dialog'

    import sha1m from '../js/sha1.min'

    const globalEvent = weex.requireModule('globalEvent')
    const stream = weex.requireModule('stream')
    import xbuinessModule from '../utilModules/xbuinessModule'
    import navigationBar from '../component/navigationBar.vue'

    export default {
        name: "adduser",
        components: {navigationBar},
        data: {
            noteMessage: "点击图片添加用户",
            lists: [{userId: '1', userNickname: '新添加的用户会显示在这里'}],
            timerCode: -1,
            timerCodet: -1,
            shwoTimer: false
        },

        mounted() {
            globalEvent.addEventListener("onnewuser", (params) => {
                if (this.shwoTimer) {
                    this.lists.splice(this.lists.length, 1, params)
                    let businessLauncherModule = weex.requireModule('businessLauncher')
                    businessLauncherModule.addUser(params.userId, params.userNickname, 0)
                    this.uploadUser(params);
                }

            });
            globalEvent.addEventListener("onReadPortEvent", (params) => {
                if (this.shwoTimer) {
                    this.lists.splice(this.lists.length, 1, {userNickname: '读到数据' + params.commond})
                    if (params.commond.match("cardnum")){
                        let cardid = params.commond.substring(8)
                        let businessLauncherModule = weex.requireModule('businessLauncher')
                        businessLauncherModule.addUser(cardid, "卡"+cardid, 0)
                        this.uploadUser(params);
                    }

                }

            });

        },
        methods: {
            uploadUser(params) {
                xbuinessModule.getString("did", did => {
                    stream.fetch({
                        method: "POST",
                        url: 'https://d.apicloud.com/mcm/api/homeuser',
                        type: 'json',
                        headers: sha1m.getttt(),
                        body: '{"uuid": "' + params.userId + '","name":"' + params.userNickname + '","device(uz*R*id)":"' + did + '" }'
                    }, res => {
                        if (res.ok) {
                            console.log("111111" + res.data.id)
                            this.noteMessage = false
                        }
                    })
                })

            },
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
                    if (data.res = 'right') {
                        let businessLauncherModule = weex.requireModule('businessLauncher')
                        businessLauncherModule.deleteUser(this.lists[num].userId)
                    }
                })
            },
            onBackClick() {
                xbuinessModule.backPage()
            }

        }
    }
</script>

<style scoped>
    .imgsize {

        margin: 20;
        margin-top: 100;
        width: 300;
        height: 300;

    }

    .margtop {
        margin-top: 30px;
    }

    .timertext {
        margin-left: 30;
        font-size: 26;
        color: #0088fb;
        font-weight: bold;
    }

    .navsize {

        position: absolute;
        top: 0;
        left: 0;
        flex-direction: row;
        align-items: center;
        height: 80px;
        width: 750px;

    }

    .navspace {
        height: 80px;
        width: 750px;

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