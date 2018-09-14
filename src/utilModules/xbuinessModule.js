const bunessModule = weex.requireModule('businessLauncher')

class xbuinessModule {
    static getDeviceId(callback) {
        bunessModule.getDeviceId(callback)
    }

    static getString(k, callback) {
        bunessModule.getString(callback, k)
    }

    static setString(k, v) {
        bunessModule.setString(k, v)
    }

    static backByNum(n) {// 返回几层
        bunessModule.backByNum(n)
    }

    // 获取对象
    static getObjectString(k, callback) {
        bunessModule.getString(v => {
            callback(JSON.parse(v))
        }, k)
    }

    // 存对象
    static setObject(k, v) {
        bunessModule.setString(k, JSON.stringify(v))
    }

    static getDeviceName(callback) {
        bunessModule.getDeviceName(callback)
    }

    static sendMessageToid(uid, message) {
        bunessModule.sendMessageToid(uid, message)
    }

    static openURL(path, parm) {
        bunessModule.openURL(path, parm)
    }


    static backPage() { // 后退
        bunessModule.onBackClick()
    }

    static writeStr2Port(commond) { // 后退
        bunessModule.WriteStr2Port(commond)
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

export default xbuinessModule
