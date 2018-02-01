<template>
    <div>


        <list>
            <header class="navspace">

            </header>
            <cell class="cell" v-for="(v ,k) in lists">

                <div class="panel" @click="deleteUser(k)">
                    <text class="timertext">昵称:</text>
                    <text class="timertext">{{v.userNickname}}</text>
                </div>
            </cell>
            <header class="cell" @click="toAddUser">
                <text class="timertext">添加新用户</text>
            </header>
        </list>
        <div class="navsize">

            <image style="width: 60px; height: 60px " src="../img/left_arrow.png" @click="onBackClick"></image>
            <div style="justify-content: center ;align-items: center; width: 640px;height: 80px;flex-direction: row;position: relative;top: 0;left: 0">
                <text style="color: #3142f5">已注册用户</text>
            </div>
        </div>
    </div>
</template>

<script>
    import dialog from '../utilModules/dialog'

    import buiness from '../utilModules/xbuinessModule'
    export default {
        name: "showuser",
        data: {
            // lists: [{"userNickname": "当前没有用户"}]
            lists: []
        },
        mounted() {
            let businessLauncherModule = weex.requireModule('businessLauncher')
            businessLauncherModule.getUserList(data => {
                this.lists = JSON.parse(data)
            })
        },
        methods: {
            deleteUser(itemnum) {
                console.log("itemclick" + itemnum)
                dialog.showTwoBtnAlertDialog('删除该用户', '删除该用户的信息', '不删除', '删除', data => {
                    if (data.res = 'right') {
                        let businessLauncherModule = weex.requireModule('businessLauncher')
                        businessLauncherModule.deleteUser(this.lists[itemnum].userId)
                        this.lists.splice(itemnum, 1)
                    }
                })
            },
            toAddUser(){
                buiness.openURL('module/addUser')
            },
            onBackClick() {
                buiness.backPage()
            }
        }
    }
</script>

<style scoped>
    .timertext {
        margin-left: 30;
        font-size: 26;
        color: #0088fb;
        font-weight: bold;
    }

    .panel {
        flex-direction: row;
        width: 600px;
        height: 100px;
        margin-left: 10;
        margin-top: 8;
        margin-right: 10;

        align-items: center;
        border-width: 2;
        border-style: solid;
        border-color: #afddff;
        background: azure;
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
    .cell {
        align-items: center;
        justify-content:center;
        padding-top: 6px;
        padding-bottom: 6px;
    }

</style>