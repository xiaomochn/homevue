<template>
    <div>

        <waterfall class="page" ref="waterfall"
                   :column-width="200"
                   :column-count="auto"
                   :column-gap="normal"
                   @loadmore="loadmore"
                   loadmoreoffset=3000

        >
            <header style="height: 80"></header>
            <refresh class="refres" @refresh="onrefresh" @pullingdown="pullingdown"
                     :display="refreshing ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text>刷新</text>
            </refresh>

            <header class="header" ref="header">
                <text>设备链接状态deviceId:{{deviceId }}</text>
                <div class="bannerPhotoWrap">
                    <image class="bannerPhoto" v-for="photo in items" :src="photo.src"></image>
                </div>
            </header>
            <header class="sheader" ref="header1">
                <text>子设备</text>
            </header>
            <cell v-for="(item, index) in items" :key="item.src" class="cell" ref="index">
                <div class="item" @click="onDeviceClick(index)">
                    <image class="img" :src=item.src></image>
                    <text>点击给第{{index}}个设备发信息</text>
                </div>
            </cell>
            <cell class="cell">
                <div class="item">
                    <image class="img" src="../img/My.png"></image>
                    <text>点击添加设备</text>
                </div>
            </cell>
            <cell class="cell" @click="to12306">
                <div class="item">
                    <image class="img" src="../img/My.png"></image>
                    <text>写着玩的 12306查票</text>
                </div>
            </cell>

            <div ref="fixed" class="fixedItem" @click="scroll2Nex">
                <text class="fixedText">bot</text>
            </div>
        </waterfall>
        <navigationBar :letftButtonClick="menuClick" title="首页"
                       imagesrc="../img/My.png"
                       style="width: 750px;height: 80px;position: absolute;top: 0;left: 0px"></navigationBar>
    </div>


</template>

<style scoped>
    .img {
        width: 200px;
        height: 200px;
    }

    .page {
        margin-left: 16px;
        margin-right: 16px;
    }

    .cell {
        padding-top: 6px;
        padding-bottom: 6px;
    }

    .item {
        align-items: center;
    }

    .sheader {
        position: sticky;
        padding-bottom: 6;
    }

    .indicator {
        color: #888888;
        height: 40;
        width: 40;
        margin-right: 30;
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

    .fixedItem {
        position: fixed;
        width: 78;
        height: 78;
        background-color: #00cc99;
        right: 32;
        bottom: 32;
        border-radius: 39;
        align-items: center;
        justify-content: center;
    }

    .refres {
        flex-direction: column;
        align-items: center;
        height: 100;
        width: 750;
    }

    .bannerPhotoWrap {
        width: 449;
        height: 305;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: space-between;
    }

    .bannerPhoto {
        width: 137;
        height: 137;
        margin-bottom: 6;
    }
</style>
<script>
    // import navigationBar from '../component/navigationBar.vue'

    import xbuiness from '../utilModules/xbuinessModule'
    import navigationBar from '../component/navigationBar.vue'

    const modal = weex.requireModule('modal')
    const globalEvent = weex.requireModule('globalEvent')
    const stream = weex.requireModule('stream')
    import sha1m from '../js/sha1.min'

    export default {
        name: "home",
        components: {navigationBar},
        data: {
            src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
            columnWidth: '300',
            refreshing: false,
            apiCloudid: '',
            deviceId: '',// 和推送用一个id
            menuClick: {
                click: function () {
                    xbuiness.openURL('module/showuser')
                    return true
                }
            },
            items: [
                {
                    src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
                    name: 'Thomas Carlyle',
                    desc: 'Genius only means hard-working all one\'s life',
                    behaviourName: 'Change width',
                    behaviour: 'changeColumnWidth',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
                    desc: 'The man who has made up his mind to win will never say "impossible "',
                    behaviourName: 'Change gap',
                    behaviour: 'changeColumnGap'
                }
            ]

        },
        mounted() {

            globalEvent.addEventListener("onReadPortEvent", (params) => {// 读到串口数据
                // if (this.shwoTimer) {
                //     // this.lists.splice(this.lists.length, 1, {userNickname: '读到数据' + params.commond})
                //     // let businessLauncherModule = weex.requireModule('businessLauncher')
                //     // businessLauncherModule.addUser(params.userId, params.userNickname, 0)
                //     // this.uploadUser(params);
                // }

            });
            globalEvent.addEventListener("ongetJpush", (params) => {// 拿到极光推送的数据
                // if (this.shwoTimer) {
                //     this.lists.splice(this.lists.length, 1, {userNickname: '读到数据' + params.commond})
                //     // let businessLauncherModule = weex.requireModule('businessLauncher')
                //     // businessLauncherModule.addUser(params.userId, params.userNickname, 0)
                //     // this.uploadUser(params);
                // }

            });
            this.register()
            xbuiness.getDeviceId(deviced => {
                this.deviceId = deviced
            })

        }
        ,
        methods: {

            loadmore: function () {
                console.log('receive loadmore event')
            }
            ,
            onrefresh(event) {
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
            }
            ,
            to12306:function() {
                xbuiness.openURL('module/home_12306')
            },
            scroll2Nex: function () {
                weex.requireModule('dom').scrollToElement(this.$refs.header)
            }
            ,
            menuClick: function () {
                xbuiness.openURL('module/showuser')
            }
            ,
            onDeviceClick: function (index) {
                xbuiness.writeStr2Port('device' + index)

            }
            ,
            register: function () {
                xbuiness.getString("apiCloudid", apiCloudid => {
                    if (!apiCloudid.replace(/(^s*)|(s*$)/g, "").length == 0) {
                        this.apiCloudid = apiCloudid
                        return
                    }
                    xbuiness.getDeviceId(did => {
                        stream.fetch({
                            method: "GET",
                            url: 'https://d.apicloud.com/mcm/api/device?filter={"where":{"did":"' + did + '"},"limit":1}',
                            type: 'json',
                            headers: sha1m.getttt()
                        }, res => {
                            if (res.ok) {
                                if (res.data.length < 1) {
                                    xbuiness.getDeviceId(did => {
                                        xbuiness.getDeviceName(name => {
                                            stream.fetch({
                                                method: "POST",
                                                url: 'https://d.apicloud.com/mcm/api/device',
                                                type: 'json',
                                                headers: sha1m.getttt(),
                                                body: '{"did": "' + did + '","name":"' + name + '" }'
                                            }, res => {
                                                if (res.ok) {
                                                    this.registerZdevice(res.data.id, '锁1', 'lock', '001')
                                                    this.apiCloudid = res.data.id
                                                    xbuiness.setString("apiCloudid", res.data.id)
                                                    modal.toast({
                                                        message: "首次打开注册成功注册成功",
                                                        duration: 0.3
                                                    })
                                                }
                                            })
                                        })

                                    })
                                } else {
                                    this.apiCloudid = res.data[0].id
                                    xbuiness.setString("apiCloudid", res.data[0].id)
                                }
                            }
                        })
                    })

                })


            }
            ,
            registerZdevice(did, name, type, deviceid) {
                stream.fetch({
                    method: "POST",
                    url: 'https://d.apicloud.com/mcm/api/dvicesmode',
                    type: 'json',
                    headers: sha1m.getttt(),
                    body: '{"device(uz*R*id)": "' + did + '","name":"' + name + '" ,"type":"' + type + '","deviceid":"' + deviceid + '"}'
                }, res => {

                })
            }

        }

    }
</script>
