import Vue from 'vue'
import weex from 'weex-vue-render'

weex.init(Vue)
weex.registerModule('businessLauncher', {
    greeting() {
        console.log('Hello, nice to meet you. I am your guide.')
    },
    farewell() {
        console.log('Goodbye, I am always at your service.')
    },

    getDeviceId(callback) {
        console.log('Goodbye, I am always at your service.')
    },

    getString(k, callback) {
        console.log('Goodbye, I am always at your service.')
    },

    setString(k, v) {
        console.log('Goodbye, I am always at your service.')
    },

    // 获取对象
    getObjectString(k, callback) {
        console.log('Goodbye, I am always at your service.')
    },
    // 存对象
    setObject(k, v) {
        console.log('Goodbye, I am always at your service.')
    },

    getDeviceName(callback) {
        console.log('Goodbye, I am always at your service.')
    },

    sendMessageToid(uid, message) {
        console.log('Goodbye, I am always at your service.')
    },

    openURL(path) {
        console.log('Goodbye, I am always at your service.')
    },

    backPage() { // 后退
        console.log('Goodbye, I am always at your service.')
    },
    writeStr2Port(commond) { // 后退
        console.log('Goodbye, I am always at your service.')
    }

})

const App = require('../../src/module/home.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
