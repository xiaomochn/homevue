<template>
    <div>

        <navigationBar></navigationBar>
        <waterfall class="page" ref="waterfall"
                   :column-width="300"
                   :column-count="auto"
                   :column-gap="normal"
                   @scroll="recylerScroll"
                   @loadmore="loadmore"
                   loadmoreoffset=3000
        >
            <refresh class="refres" @refresh="onrefresh" @pullingdown="pullingdown"
                     :display="refreshing ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text>刷新</text>
            </refresh>
            <header class="header" ref="header">
                <text>header</text>
                <div class="bannerPhotoWrap">
                    <image class="bannerPhoto" v-for="photo in items" :src="photo.src"></image>
                </div>
            </header>
            <header class="sheader" ref="header1">
                <text>sheader</text>
            </header>
            <cell v-for="(item, index) in items" :key="item.src" class="cell" ref="index">
                <div class="item">

                    <image class="img" :src=item.src></image>
                </div>
            </cell>
            <header class="sheader" ref="header1">
                <text>sheader</text>
                <text>contentOffset{{contentOffset}}</text>
            </header>
            <div ref="fixed" class="fixedItem" @click="scroll2Nex">
                <text class="fixedText">bot</text>
            </div>
        </waterfall>

    </div>


</template>

<script>
    import navigationBar from '../component/navigationBar.vue'

    export default {
        name: "home",
        data: {
            src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
            columnWidth: '300',
            contentOffset: 0,
            refreshing: false,
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
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg',
                    desc: 'There is no such thing as a great talent without great will - power',
                    behaviourName: 'Change count',
                    behaviour: 'changeColumnCount'
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1DCh8PFXXXXX7aXXXXXXXXXXX-370-370.jpg',
                    name: 'Addison',
                    desc: 'Cease to struggle and you cease to live',
                    behaviourName: 'Show scrollbar',
                    behaviour: 'showScrollbar',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1ACygPFXXXXXwXVXXXXXXXXXX-370-370.jpg',
                    desc: 'A strong man will struggle with the storms of fate',
                    behaviourName: 'Listen appear',
                    behaviour: 'listenAppear',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1IGShPFXXXXaqXVXXXXXXXXXX-370-370.jpg',
                    name: 'Ruskin',
                    desc: 'Living without an aim is like sailing without a compass',
                    behaviourName: 'Set scrollable',
                    behaviour: 'setScrollable',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1xU93PFXXXXXHaXXXXXXXXXXX-240-240.jpg',
                    behaviourName: 'waterfall padding',
                    behaviour: 'setPadding',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB19hu0PFXXXXaXaXXXXXXXXXXX-240-240.jpg',
                    name: 'Balzac',
                    desc: 'There is no such thing as a great talent without great will - power',
                    behaviourName: 'listen scroll',
                    behaviour: 'listenScroll',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1ux2vPFXXXXbkXXXXXXXXXXXX-240-240.jpg',
                    behaviourName: 'Remove cell',
                    behaviour: 'removeCell',
                },
                {
                    src: 'https://gw.alicdn.com/tps/TB1tCCWPFXXXXa7aXXXXXXXXXXX-240-240.jpg',
                    behaviourName: 'Move cell',
                    behaviour: 'moveCell',
                }
            ]

        },
        methods: {
            recylerScroll: function (e) {
                this.contentOffset = e.contentOffset.y
            },
            loadmore: function () {
                console.log('receive loadmore event')
            },
            onrefresh(event) {
                this.refreshing = true
                this.refreshText = "loading..."
                setTimeout(() => {
                    this.refreshing = false
                    this.refreshText = '↓   pull to refresh...'
                }, 2000)
            },
            scroll2Nex:function () {
                weex.requireModule('dom').scrollToElement(this.$refs.header)
            },

        }

    }
</script>

<style scoped>
    .img {
        width: 304px;
        height: 705px;
    }

    .page {
        background-color: #0088fb;
    }

    .cell {

        padding-top: 6px;
        padding-bottom: 6px;
    }

    .item {
        background-color: #afddff;
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
    .fixedItem {
        position: fixed;
        width:78;
        height:78;
        background-color:#00cc99;
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
        flex-wrap:wrap;

        justify-content: space-between;
    }
    .bannerPhoto {
        width: 137;
        height: 137;
        margin-bottom: 6;
    }
</style>