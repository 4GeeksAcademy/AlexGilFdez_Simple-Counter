import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";


let seconds = 0;
setInterval (()=> {
    console.log(seconds);
   const one = Math.floor(seconds /1) %10; 
   const two = Math.floor(seconds /10) %10; 
   const three = Math.floor(seconds /100) %10; 
   const four = Math.floor(seconds /1000) %10; 
   const five = Math.floor(seconds /10000) %10; 
    ReactDOM.createRoot(document.getElementById('app')).render(<Home uno= {one} dos= {two} tres= {three} cuatro= {four} cinco= {five}/>);
    seconds++
}, 1000)


