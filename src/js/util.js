
import sha1m from './sha1.min'

const stream = weex.requireModule('stream')
export default {
    /**
     * 是否为空:  空字符串   undefine
     */
    isEmpty(str) {
        return (str == undefined || str == '');
    },

    post(url, parms, callback) {
        console.log("111111bg")
        stream.fetch({
            method: "POST",
            url: url,
            type: 'json',
            headers: sha1m.getttt(),
            body: this.obj2Str(parms)
        }, callback)
    },
    obj2Str(obj) {
        return obj
    }


}