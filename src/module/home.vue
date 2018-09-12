<template>
    <div style="background-color: palegreen">

        <waterfall class="page" ref="waterfall"
                   :column-width="340"
                   :column-count="auto"
                   :column-gap="normal"
                   @loadmore="loadmore"
                   loadmoreoffset=3000

        >
            <header style="height: 150px;"></header>
            <header style="height: 270px;">
                <div style="flex-direction: row">
                    <text class="witetext normaltextsize" style="font-size: 120px;">🔐 🔓</text>
                    <div style="flex-direction: column;">
                        <text class="witetext normaltextsize">描述 1</text>
                        <text class="witetext normaltextsize">描述 2</text>
                    </div>
                </div>
                <text class="witetext normaltextsize" style="margin-top: 20px">上次开锁时间是23号17点13分</text>
            </header>
            <refresh class="refres" @refresh="onrefresh" @pullingdown="pullingdown"
                     :display="refreshing ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="witetext">刷新</text>
            </refresh>


            <cell v-for="(item, index) in items" :key="item.src" class="cell" ref="index">
                <div class="item" @click="onDeviceClick(index)">

                    <text style="width: 200px ;padding-left: 16px" class="smaltextsize">点击给第{{index}}个设备发信息</text>
                    <image style="padding-left: 17px;padding-right: 17px;padding-top: 58px;padding-bottom: 58px"
                           class="img" :src=item.src></image>
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
                <div></div>
            </cell>

            <div ref="fixed" class="fixedItem" @click="scroll2Nex">
                <text class="fixedText">bot</text>
            </div>
        </waterfall>
        <div class="header">
            <text style="width: 640px;" class="witetext">小莫的家 ></text>
            <image style="width:40px;height:40px; " src="../img/My.png" @click="toUser"></image>
        </div>


    </div>


</template>

<style scoped>
    .header {
        width: 750px;
        height: 200px;
        position: absolute;
        top: 0px;
        left: 0px;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: row;
        margin-top: 30px;
    }

    .witetext {
        color: white;
    }

    .smaltextsize {
        font-size: 26px;
    }

    .normaltextsize {
        font-size: 30px;
    }

    .img {

        width: 133px;
        height: 215px;
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

        border-radius: 4px;
        width: 350px;
        height: 216px;
        background-color: white;
        align-items: center;
        flex-direction: row;
    }

    .sheader {
        position: sticky;
        padding-bottom: 6px;
    }

    .indicator {
        color: #888888;
        height: 40px;
        width: 40px;
        margin-right: 30px;
    }

    .navsize {

        position: absolute;
        top: 0px;
        left: 0px;
        flex-direction: row;
        align-items: center;
        height: 80px;
        width: 750px;

    }

    .fixedItem {
        position: fixed;
        width: 78px;
        height: 78px;
        background-color: #00cc99;
        right: 32px;
        bottom: 32px;
        border-radius: 39px;
        align-items: center;
        justify-content: center;
    }

    .refres {
        flex-direction: column;
        align-items: center;
        height: 100px;
        width: 750px;
    }

    .bannerPhotoWrap {
        width: 449px;
        height: 305px;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: space-between;
    }

    .bannerPhoto {
        width: 137px;
        height: 137px;
        margin-bottom: 6px;
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
    import urls from "../js/urls";
    import util from "../js/util";

    export default {
        name: "home",
        components: {navigationBar},
        data: {
            src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
            columnWidth: '300',
            refreshing: false,
            apiCloudid: '',
            deviceId: '',// 和推送用一个id
            statusnlock: '',//门是否锁定
            statusnallow: '',// m门是否反锁
            nstatusopen: '',// 门是是可以开
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
                const cmd = params.commond
                if (cmd == urls.data.statusView.nstatusallow) {
                    // 门打开
                } else if (cmd == urls.data.statusView.nstatusnotallow) {
// 门关闭
                } else if (cmd == urls.data.statusView.statusnallow) {
// 门未被反锁
                } else if (cmd == urls.data.statusView.statusnlock) {
// 门以锁
                    this.statusnlock = '门以锁'
                } else if (cmd == urls.data.statusView.statusnnotallow) {
// 门反锁
                } else if (cmd == urls.data.statusView.statusnunlock) {
// 没没锁
                }

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
            this.refreshStatus()

        }
        ,
        methods: {

            refreshStatus: function () {
                xbuiness.writeStr2Port('statusn:lock\r\n')
                xbuiness.writeStr2Port('statusn:allow\r\n')
            },

            loadmore: function () {
                console.log('receive loadmore event')
            }
            ,
            onrefresh(event) {
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.register()
            }
            ,
            to12306: function () {
                xbuiness.openURL('module/aworld/HomePage')
            },
            scroll2Nex: function () {
                weex.requireModule('dom').scrollToElement(this.$refs.header)
            }
            ,
            toUser: function () {
                console.log("aaaaa")
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
                                console.log("111111re")
                                if (res.data.length < 1) {
                                    console.log("111111reres.data.length < 1")
                                    xbuiness.getDeviceName(name => {
                                        stream.fetch({
                                            method: "POST",
                                            url: 'https://d.apicloud.com/mcm/api/device',
                                            type: 'json',
                                            headers: sha1m.getttt(),
                                            body: '{"did": "' + did + '","name":"' + name + '" }'
                                        }, res1 => {
                                            console.log("111111res1")
                                            if (res1.ok) {
                                                console.log("111111res1ok")
                                                this.registerZdevice(res1.data.id, '锁1', 'lock', '001')
                                                this.apiCloudid = res1.data.id
                                                xbuiness.setString("apiCloudid", res1.data.id)
                                                modal.toast({
                                                    message: "首次打开注册成功注册成功",
                                                    duration: 0.3
                                                })
                                            }
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


            },
            registerZdevice(did, name, type, deviceid) {
                console.log("1111112")
                const parms = {
                    "device(uz*R*id)": did,
                    "name": name,
                    "type": type,
                    "deviceid": deviceid
                }
                util.post(urls.data.dvicesModeDb, parms, res => {
                    console.log("111111" + res.data)
                })
            },
            getZdevices(callback) {

            },
            addZdevices(parms) {
                xbuiness.getString("zdeviceslist", listStr => {
                    let devicess
                        = JSON.parse(listStr)
                    if (util.isEmpty(listStr)) {
                        listStr = []
                    }
                    devicess[devicess.length - 1] = parms
                })
            }


        }

    }
</script>
