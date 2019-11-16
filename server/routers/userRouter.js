const express = require('express');
const User = require('../model/user');
const router = new express.Router();

const SMSClient = require('@alicloud/sms-sdk')
const accessKeyId = 'LTAI4FpyZsiRktYikorKECFs'
const secretAccessKey = 'elmef1NYo9uVw0L3yhaN54CGYm56B7'
//初始化sms_client
let smsClient = new SMSClient({
    accessKeyId,
    secretAccessKey
})

//发送验证码
router.get('/send_code', (req, response) => {
    //获取电话号码

    // new Thread().sleep(10000);

    const {
        tel
    } = req.query;
    //随机验证码

    const randomNUM = function () {
        let result = Math.floor(Math.random() * 1000000).toString();
        while (result.length < 6) {
            result = '0' + result;
        }
        return result;
    }
    const tepCode = randomNUM();
    //发送信息
    if (tel) {
        smsClient.sendSMS({
            PhoneNumbers: tel, //必填:待发送手机号,支持以逗号分隔的形式进行批量调用，目前从前端获取手机号码
            SignName: '旅行分享小站', //必填:短信签名-可在短信控制台中找到
            TemplateCode: 'SMS_176943943', //必填:短信模板-可在短信控制台中找到
            TemplateParam: `{"code":"${tepCode}"}` //可选:模板中的变量替换JSON串,目前不用
        }).then(function (res) {
            let {
                Code
            } = res;
            console.log(res);
            response.json({
                message: "手机发送成功",
                code: 0,
                data: tepCode
            })

            // if (Code === 'OK') {
            //     //处理返回参数
            //     // console.log(res)
            //     CodeSc.add(tel, tepCode)
            //         .then(function () {
            //             console.log('成功创建表格');
            //             response.json({
            //                 message: "验证码已发送",
            //                 code: 0,
            //                 data: tepCode

            //             })
            //         })
            //         .catch((error) => {
            //             response.json({
            //                 code: -2, //数据库问题
            //                 message: error.message
            //             })
            //         })
            // }
        }, function (err) {
            console.log(err);
            response.json({
                message: '手机发送失败',
                code: -1
            })
        })
    } else {
        response.json({
            message: '需要电话号码发送验证码',
            code: -1
        })
    }


});



//登录
router.post('/login', (req, res) => {
    const {
        tel,
        value
    } = req.body;
    console.log(1111);

    console.log(tel, value);

    User.findByTel(tel)
        .then(result => {
            if (result) {
                res.json({
                    code: 0,
                    message: '登录成功'
                });
            } else {
                res.json({
                    code: -1,
                    message: '该账号不存在'
                });
            }
        })
})

// 注册
router.post('/regiester', (req, res) => {
    const {
        tel,
        password
    } = req.body;
    User.add(tel, password)
        .then((userInfo) => {
            res.json({
                code: 0,
                message: 'ok'
            })
        })
        .catch((error) => {
            res.json({
                code: -1,
                message: error.message
            })
        })
});





module.exports = router;

// module.exprots = router;