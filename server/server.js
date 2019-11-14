const express = require('express');
const mongoose = require('mongoose')
const server = express();

server.use('/api/user', require('./routers/userRouter'));
//链接数据库
mongoose.connect('mongodb://lovalhost:27071', (error) => {
    if (error) {
        console.log('链接数据库失败')
        console.log(error);
    } else {
        console.log('链接数据成功')
        //启动成功
        server.listen('9000', (error) => {
            if (!error) {
                console.log('服务器启动成功');
            } else {
                console.log('服务器启动失败');
                console.log(error)
            }
        })
    }
})