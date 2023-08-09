import React,{useState} from 'react';
import './App.css';

const App=()=> {
  const[result,setResult]=useState("");
  const clickHandlar=(event)=>{
    setResult(result.concat(event.target.value))
  }
const clearDisplay=()=>{
  setResult("");
}
const calculate=()=>{
  setResult(eval(result).toString());
}
// const sqRoot = ()=>{
//   setResult(Math.sqrt(result))
// }
  return (
    <div className="calc">
      <input type="text" placeholder ="0" id="answer" value={result}/>
      <input type="button" value="7" className="button" onClick={clickHandlar}/> 
      <input type="button" value="8" className="button" onClick={clickHandlar}/>
      <input type="button" value="9" className="button" onClick={clickHandlar}/>
      <input type="button" value="+" className="button" onClick={clickHandlar}/>
      <input type="button" value="4" className="button" onClick={clickHandlar}/>
      <input type="button" value="5" className="button" onClick={clickHandlar}/>
      <input type="button" value="6" className="button" onClick={clickHandlar}/>
      <input type="button" value="-" className="button" onClick={clickHandlar}/>
      <input type="button" value="1" className="button" onClick={clickHandlar}/>
      <input type="button" value="2" className="button" onClick={clickHandlar}/>
      <input type="button" value="3" className="button" onClick={clickHandlar}/>
      <input type="button" value="*" className="button" onClick={clickHandlar}/>
      <input type="button" value="0" className="button" onClick={clickHandlar}/>
      <input type="button" value="/" className="button" onClick={clickHandlar}/>
      <input type="button" value="%" className="button" onClick={clickHandlar}/>
      <input type="button" value="=" className="button " onClick={calculate}/>
      <input type="button" value="AC" className="button button1" onClick={clearDisplay}/>
    </div>
  );
}

export default App;
