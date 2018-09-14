<template>
    <div @viewappear="onAppear" @viewdisappear="onDisappear">

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
                <text class="timertext">添加新用户或卡</text>
            </header>
        </list>
        <navigationBar title="已注册用户" righttext="添加" :rightButtonClick="onrightButtonClick"
                       style="width: 750px;height: 80px;position: absolute;top: 0;left: 0px"></navigationBar>


    </div>
</template>

<script>
    import dialog from '../utilModules/dialog'
    import navigationBar from '../component/navigationBar.vue'
    import buiness from '../utilModules/xbuinessModule'

    export default {
        name: "showuser",
        components: {navigationBar},
        data: {
            // lists: [{"userNickname": "当前没有用户"}]
            lists: [],
            onrightButtonClick: {
                click: function () {
                    buiness.openURL('module/addUser')
                    return true
                }
            }
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
                    if (data.res == 'right') {
                        let businessLauncherModule = weex.requireModule('businessLauncher')
                        businessLauncherModule.deleteUser(this.lists[itemnum].userId)
                        this.lists.splice(itemnum, 1)
                    }
                })
            },
            toAddUser() {
                buiness.openURL('module/addUser')
            },
            onAppear() {
                console.log("appear")
                let businessLauncherModule = weex.requireModule('businessLauncher')
                businessLauncherModule.getUserList(data => {
                    const tempList = JSON.parse(data)
                    if (this.lists.length != tempList.length) {
                        console.log("变了")
                        this.lists = tempList
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .timertext {
        margin-left: 30px;
        font-size: 26px;
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

    .navspace {
        height: 80px;
        width: 750px;

    }

    .cell {
        align-items: center;
        justify-content: center;
        padding-top: 6px;
        padding-bottom: 6px;
    }

</style>