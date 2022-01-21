import React from 'react';
import './App.css';
import {io} from 'socket.io-client'

interface HTMLImg extends HTMLElement{
  src? : any
}
const socketClient = io("http://localhost:3000")
socketClient.connect()


function App() {

const [imageData,setImageData] = React.useState('')


socketClient.on("connect", () => { console.log("connection server"); });
socketClient.on('image',(image)=>{
setImageData(image)
//console.log(imageData)
})


React.useEffect(()=>{
  
},[imageData])


  return (
    <div className="App">
      <header className="App-header">
       <p> Open CV 를 이용한 Home CCTV </p>
       <img src={`data:image/jpeg;base64,${imageData}`}  ></img>
       <p> Made by Junwoo </p>
      </header>
    </div>
  );
}

export default App;
