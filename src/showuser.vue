<template>
    <div>

        <text>1111</text>
        <list>
            <cell class="cell" v-for="(v ,k) in lists">
                <div class="panel" @click="deleteUser(k)">
                    <text class="timertext">昵称</text>
                    <text class="timertext">{{v.userNickname}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
    import dialog from './utilModules/dialog'

    export default {
        name: "showuser",
        data: {
            lists: [{"userNickname": "11"}, {"userNickname": "11"}]
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