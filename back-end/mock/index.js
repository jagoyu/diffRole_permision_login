const express = require('express')

const app = express()

const vipLogin = require('./data/vip_login.json')
const adminLogin = require('./data/admin_login.json')
const url = require('url')

//其实应该用post,为了方便用get演示
app.get("/login",(req,res) => {
  const user = url.parse(req.url,true).query.user
  if(user === 'admin') {
    res.send(adminLogin)
  } else{
    res.send(vipLogin)
  }
})

app.listen(3300,() => {
  console.log('服务器运行在3300');
})