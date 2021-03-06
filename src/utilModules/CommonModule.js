const commonModule = weex.requireModule('CommonModule')

class CommonModule {
    static getDeviceId(callback) {
        commonModule.getDeviceId(callback)
    }

    static getString(k, callback) {
        commonModule.getString(callback, k)
    }

    static setString(k, v) {
        commonModule.setString(k, v)
    }

    static backByNum(n) {// 返回几层
        commonModule.backByNum(n)
    }
    static uploadFile(path,callback) {//
        commonModule.uploadFile(path,callback)
    }

    // 获取对象
    static getObjectString(k, callback) {
        commonModule.getString(v => {
            callback(JSON.parse(v))
        }, k)
    }

    // 存对象
    static setObject(k, v) {
        commonModule.setString(k, JSON.stringify(v))
    }

    static getDeviceName(callback) {
        commonModule.getDeviceName(callback)
    }

    static sendMessageToid(uid, message) {
        commonModule.sendMessageToid(uid, message)
    }

    static openURL(path, parm) {
        commonModule.openURL(path, parm)
    }


    static backPage() { // 后退
        commonModule.onBackClick()
    }

    static PickeImage(callback) { // 后退
        commonModule.PickeImage(callback)
    }
}

if (typeof weex.registerModule == 'function')
    weex.registerModule('businessLauncher', {
        greeting() {
            console.log('greeting')
        },
        farewell() {
            console.log('farewell')
        },

        getDeviceId(callback) {
            console.log('getDeviceId')
        },

        getString(k, callback) {
            console.log('getString')
        },

        setString(k, v) {
            console.log('setString')
        },

        // 获取对象
        getObjectString(k, callback) {
            console.log('getObjectString')
        },
        // 存对象
        setObject(k, v) {
            console.log('setObject')
        },

        getDeviceName(callback) {
            console.log('getDeviceName')
        },

        sendMessageToid(uid, message) {
            console.log('sendMessageToid')
        },

        openURL(path) {
            console.log('openURL')
        },

        backPage() { // 后退
            console.log('backPage')
        },
        writeStr2Port(commond) { // 后退
            console.log('writeStr2Port')
        }

    })

export default CommonModule
