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
        bunessModule.getString( v => {
            callback(JSON.parse(v))
        },k)
    }

    // 存对象
    static setObject(k, v) {

        bunessModule.setString(k, JSON.stringify(v))
    }
    static getDeviceName(callback) {
        bunessModule.getDeviceName( callback)
    }
    static sendMessageToid(uid,message){
        bunessModule.sendMessageToid(uid,message)
    }

}

export default xbuinessModule