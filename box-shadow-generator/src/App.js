
import './App.css';
import React,{useState} from 'react';
function App() {
  const [Hori,SetHor] = useState(10);
  const [Ver,SetVer] = useState(10);
  const [Blur,SetBlur] = useState(10);
  const [Color,SetColor] = useState("black");
  const [checkOn,setCheckOn] = useState(false);
  
  
  return (
    <>

    
    <div className="App">
        

        <div className="input">

        <label > Horizontal length</label>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>{SetHor(e.target.value)}}/>
        <label > Vertical length</label>
        <input type="range" min="-200" max="200" value={Ver} onChange={(e)=>{SetVer(e.target.value)}}/>
        <label > Blur length</label>
        <input type="range" min="0" max="200" value={Blur} onChange={(e)=>{SetBlur(e.target.value)}}/>
        <label > Color</label>
        <input type="color"  value={Color} onChange={(e)=>{SetColor(e.target.value)}}/>
        <div className="switch">
          <label >
            Outline
            <input type="checkbox" checked = {checkOn} onChange = {()=>{setCheckOn(!checkOn)}} />
           
            inset
          </label>
        </div>
        </div>
        <div className="output">
          <div className="box" style={ { boxShadow : `  ${checkOn ? "inset" : " "} ${Hori}px ${Ver}px ${Blur}px ${Color}` }}>
            <p>Box-Shadow : {Hori}px {Ver}px {Blur}px {Color}</p>
          </div>
        </div>
    </div>

    <div className="author">
      Made By Ritik Kochar
    </div>
    </>
  );
}

export default App;
