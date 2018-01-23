<template>
    <div class="wrapper" >
        <image :src="logoUrl" class="logo" @click="tohome"></image>
        <text class="title" @click="update">Hello {{target}}</text>
        <text class="desc">Now, let's use vue to build your weex app.</text>
        <text @click="totest"> totest</text>
    </div>
</template>

<style>
    .wrapper {
        align-items: center;
        margin-top: 120px;
    }

    .title {
        padding-top: 40px;
        padding-bottom: 40px;
        font-size: 48px;
    }

    .logo {
        width: 360px;
        height: 156px;
    }

    .desc {
        padding-top: 20px;
        color: #888;
        font-size: 24px;
    }
</style>

<script>
    export default {
        data: {
            logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
            target: 'World'
        },
        methods: {
            update: function (e) {
                let businessLauncherModule = weex.requireModule('businessLauncher')
                console.log(businessLauncherModule)
                businessLauncherModule.openURL('showuser', null, false, true)
            },
            tohome: function () {
                let businessLauncherModule = weex.requireModule('businessLauncher')
                console.log(businessLauncherModule)
                businessLauncherModule.openURL('home', null, false, true)
                // console.log('target:', 'tohome')
            },
            totest:function () {
                let businessLauncherModule = weex.requireModule('businessLauncher')
                console.log(businessLauncherModule)
                businessLauncherModule.openURL('test3', null, false, true)
            }
        }
    }
</script>