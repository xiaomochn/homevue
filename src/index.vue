<template>
    <div class="wrapper">
        <image :src="logoUrl" class="logo" @click="tohome"></image>
        <text class="title" @click="update">Hello {{target}}</text>
        <text class="desc">Now, let's use vue to build your weex app.</text>
        <text @click="totest"> totest</text>
        <text v-if="notregisted" class="registerc" @click="register"> register</text>
        <text class="registerc" @click="callwxjs"> callwxjs</text>
    </div>
</template>

<style>
    .wrapper {
        align-items: center;
        margin-top: 120px;
    }

    .registerc {
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
    const stream = weex.requireModule('stream')
    const modal = weex.requireModule('modal')
    import sha1m from './js/sha1.min'
    import xbuinessModule from './utilModules/xbuinessModule'

    export default {
        data: {
            logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
            target: 'World',
            notregisted: false
        },
        mounted() {
            xbuinessModule.getDeviceId(did => {
                stream.fetch({
                    method: "GET",
                    url: 'https://d.apicloud.com/mcm/api/device?filter={"where":{"did":"' + did + '"},"limit":1}',
                    type: 'json',
                    headers: sha1m.getttt()
                }, res => {
                    console.log("11111111" + JSON.stringify(res.data))
                    if (res.ok) {
                        if (res.data.length < 1) {
                            this.notregisted = true
                        } else {
                            xbuinessModule.setString("did", res.data[0].id)
                        }
                    }
                })
            })

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
            totest: function () {
                let businessLauncherModule = weex.requireModule('businessLauncher')
                console.log(businessLauncherModule)
                businessLauncherModule.openURL('test3', null, false, true)
            },
            callwxjs: function () {
                console.log("111111111112")
                xbuinessModule.sendMessageToid('currentuser', 'getup')
            },
            register: function () {
                xbuinessModule.getDeviceId(did => {
                    xbuinessModule.getDeviceName(name => {
                        stream.fetch({
                            method: "POST",
                            url: 'https://d.apicloud.com/mcm/api/device',
                            type: 'json',
                            headers: sha1m.getttt(),
                            body: '{"did": "' + did + '","name":"' + name + '" }'
                        }, res => {
                            console.log("11111111" + JSON.stringify(res.data))
                            if (res.ok) {
                                console.log("111111" + res.data.id)
                                this.noteMessage = false
                                modal.toast({
                                    message: "注册成功",
                                    duration: 0.3
                                })
                                xbuinessModule.setString("did", res.data.id)
                            }
                        })
                    })

                })

            }
        }
    }
</script>