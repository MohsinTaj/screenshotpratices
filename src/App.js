import React from 'react'
import Todo from './Components/Todo';
import html2canvas from 'html2canvas';
import './index.css'
const CaptureImage=()=>{
  html2canvas(document.getElementById("photo")).then(function(canvas){
    var a=document.createElement('a')
    a.href=canvas.toDataURL("Pictures").replace("","")
    a.download="screenshot";
    a.click();
  })
}
const CaptureImage1=()=>{
  html2canvas(document.body).then(function(canvas){
    var a=document.createElement('a')
    a.href=canvas.toDataURL("Pictures").replace("","")
    a.download="screenshot";
    a.click();
  })
}
function App() {
    return (
        <>
        <body>
                <div>
                <button className="btn-btn-default" id="button" onClick={CaptureImage1} >screenshot</button>
                <button className="btn-btn-default" id="button" onClick={CaptureImage} >screenshot_only_todo</button>
                <div id='photo'>
            <Todo/>
            </div>
        </div>
        </body>
        </>

    )

}

export default App;
