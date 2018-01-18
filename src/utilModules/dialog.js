const dialogModule = weex.requireModule('dialog');


class dialog{


    static showTwoBtnAlertDialog(title, message, leftTxt, rightTxt, callback){
        dialogModule.showTwoBtnAlertDialog(title, message, leftTxt, rightTxt, callback);
    };

};


export default dialog;
