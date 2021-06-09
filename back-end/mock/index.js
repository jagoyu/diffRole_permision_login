const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

const url = require('url')

const vipLogin = require('./data/vip_login.json')
const adminLogin = require('./data/admin_login.json')

const adminPermission = require("./data/admin_permission.json")
const vipPermission = require("./data/vip_permission.json")




app.post("/login",(req,res) => {
  const {account, password} = req.body
  if(account === 'admin' && password === '123') {
    res.send(adminLogin)
  } else if (account === 'user' && password === '666'){
    res.send(vipLogin)
  } else {
    res.send({
      "code" : 1,
      "ErrMes" : "账号或密码错误，请重新输入"
    })
  }
})

app.post("/permission", (req, res) => {
  const user = req.body.UserToken
  console.log(user);
  if (user === 'admin') {
    res.send(adminPermission)
  } else {
    res.send(vipPermission)
  }
})

app.listen(3300,() => {
  console.log('服务器运行在3300');
})