<template>
    <div>
        <text @click="testPost">{{getzzsfa}}</text>
    </div>

</template>

<script>
    import sha1m from "./js/sha1.min"

    const stream = weex.requireModule('stream');
    const POST_URL = 'http://httpbin.org/post';
    export default {
        name: "test2",
        data: {},
        computed: {
            getzzsfa() {
                let appKey = sha1m.getttt()
                return appKey
            }
        },
        methods: {

            testPost() {
                stream.fetch({
                    method: 'GET',
                    url: "https://d.apicloud.com/mcm/api/comment_item/5a668f4702c0c03948a2dbed",
                    type:'json',
                    headers:sha1m.getttt()
                }, ret=> {
                    if(!ret.ok){
                        this.postResult = "request failed";
                    }else{
                        console.log('get:'+JSON.stringify(ret));
                        this.postResult = JSON.stringify(ret.data);
                    }
                },response=>{
                    console.log('get in progress:'+response.length);
                    this.postResult = "bytes received:"+response.length;
                });
            }
        }
    }
</script>

<style scoped>

</style>