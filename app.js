const express = require('express')

const app = express();
const port = 5000

app.get('/',(req,res)=>{
    res.json({
      status: "Success",
      message: 'Test application is running'
    })
  })
  
  app.get('/hello',(req,res)=>{
    res.json({
      status: "Success",
      message: 'This is hello route'
    })
  })
  
  app.listen(port)