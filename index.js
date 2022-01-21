const cv = require('opencv4nodejs')
const express = require('express');
const cors = require('cors')
const app = express();
const server = require('http').Server(app);
const path = require('path');
const res = require('express/lib/response');
const io = require('socket.io')(server,{
    cors:{
        origin:"*",
        methods: ["GET", "POST"]
    }
})

const webCam = new cv.VideoCapture(0)
app.use(cors())
app.get('/',()=>{
    return ('hi')
})

io.on('connection',(socket)=>{
    console.log('connected')
})

setInterval(()=>{
    const frame = webCam.read()
    const image = cv.imencode('.jpg',frame).toString('base64')
    io.emit('image',image)
},1000/20)

server.listen(3000);
