<template>
    <div class="continer">

        <text style="margin-top: 100px" @click="start"> start</text>

        <text style="margin-top: 100px" @click="stop"> stop</text>

    </div>
</template>

<script>

    const stream = weex.requireModule('stream')
    const modal = weex.requireModule('modal');
    import sha1m from '../../js/sha1.min'


    export default {
        components: {},
        name: "home-aworld",
        data() {
            return {
                aibizhilist: [],
                aibizhiindex: 0,
                webindex:0,
            }
        },

        mounted() {

        },
        methods: {

            start() {
                modal.toast({
                    'message': '开始',
                    'duration': 1
                });
                this.getAibizhi()

            },
            getAibizhi() {
                this.aibizhiindex = 0
                stream.fetch({
                    method: "GET",
                    url: 'https://d.apicloud.com/mcm/api/aworlds?filter={"where":{},"order":"updatedAt%20DESC","skip":0,"limit":1}',
                    type: 'json',
                    headers: sha1m.getttt(),
                }, res => {
                    if (res.ok && res.data.length > 0) {
                        const skip = res.data[0].index
                        this.webindex = skip
                        stream.fetch({
                            method: "GET",
                            type: "json",
                            url: "http://service.aibizhi.adesk.com/v3/homepage?limit=30&skip=" + skip + "&adult=false&did=864293036920656&first=0&order=hot",
                        }, res => {
                            console.log(res)
                            this.aibizhilist = res.data.res.vertical

                            this.timer = setInterval(() => {
                                this.addWorld()
                            }, 5000)
                        })
                    }
                })
            },
            stop() {
                modal.toast({
                    'message': '停止',
                    'duration': 1
                });
                clearInterval(this.timer)
            },

            addWorld() {
                if (this.aibizhiindex > 28) {

                    this.getAibizhi()
                    clearInterval(this.timer)
                    return
                }
                if (this.aibizhilist[this.aibizhiindex] && this.aibizhilist[this.aibizhiindex].img) {

                    this.commitItem(this.aibizhilist[this.aibizhiindex].img, "des", this.webindex)
                    this.aibizhiindex += 1
                    this.webindex+=1
                }
            },
            commitItem(url, des, i) {

                const parm = {

                    "title": "",
                    "des": des,
                    "img": url,
                    "did": "default",
                    "index": i,
                }

                stream.fetch({
                    method: "POST",
                    url: 'https://d.apicloud.com/mcm/api/aworlds',
                    type: 'json',
                    headers: sha1m.getttt(),
                    body: parm
                }, res => {
                    if (res.ok) {
                        this.showLoading = false
                    } else {

                        modal.toast({
                            'message': '提交出错请重试',
                            'duration': 1
                        });
                        return

                    }
                })
            }
        }
    }
</script>

<style scoped>


</style>