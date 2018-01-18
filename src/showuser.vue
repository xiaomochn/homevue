<template>
    <div>
        <text>asdfasd</text>
        <text>asdfasd</text>
        <text>asdfasd</text>
        <text>asdfasd</text>
        <text>asdfasd</text>
        <!--<list>-->
            <!--<cell class="panel" v-for="(v ,k) in list">-->
                <!--<div>-->
                    <!--<text class="timertext">{{v.userNickname}}</text>-->
                <!--</div>-->
            <!--</cell>-->
        <!--</list>-->
    </div>
</template>

<script>
    export default {
        name: "showuser",
        data() {
            list :[]
        },
        mounted() {
            // let businessLauncherModule = weex.requireModule('businessLauncher')
            // businessLauncherModule.deleteUser(this.lists[i].userId)
            // list = businessLauncherModule.getUserList()
        },
        methods() {

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