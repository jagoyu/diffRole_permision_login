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
  const user = req.body.account
  if(user === 'admin') {
    res.send(adminLogin)
  } else{
    res.send(vipLogin)
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