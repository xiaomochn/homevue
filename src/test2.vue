<template>
    <div>
        <text>{{getzzsfa}}</text>
    </div>

</template>

<script>
    // import  sha1m from "./js/sha1.min"

    export default {
        name: "test2",
        data: {},
        computed: {
            getzzsfa() {
                let now = Date.now();

                // let ccc = sha1m.hex_sha1('1232')
                // let appKey = hex_sha1("A6968565094002" + "UZ" + "62FB16B2-0ED6-B460-1F60-EB61954C823B" + "UZ" + now) + "." + now
                return "33113"
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>