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

    static openURL(path) {
        bunessModule.openURL(path, null, false, true)
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

export default xbuinessModule
