const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

//No need to do app.get('/',(req,res)=>{...})  . The express will serve by default file index.html from root dir declared in app.use(express.static('dir'))

const PORT =  5000

app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`)
} )