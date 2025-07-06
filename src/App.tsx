
import { useState } from 'react'
import './App.css'

function App() {
  const [eqn,seteqn] = useState("0");

  const onNumClickHandle = (num: string) => {
    const operators = "+-*/";
    const lastChar = eqn.charAt(eqn.length - 1);
    if (operators.includes(num) && operators.includes(lastChar)) return;

    if (eqn === "0" && "*/+".includes(num)) return;

    if (eqn === "0" && !"*/+".includes(num)) {
      seteqn(num);
      return;
    }

    seteqn(eqn + num);
  }
  const evaluate = () => {
    const res = eval(eqn).toString();
    seteqn((res));
  }
  
  return (
    <>
      <h1 className='bg-purple-500 text-center text-5xl p-4 mt-6 text-white font-bold border-2 rounded-2xl mx-auto max-w-[500px]'>Calculator</h1>
      <div className="realmain">
      <div className="text">{eqn}</div>
      <div className="main">
        
        <div className="nums">
          <div className="row">
            <div onClick={()=>onNumClickHandle('7')} className="cell">7</div>
            <div onClick={()=>onNumClickHandle('8')} className="cell">8</div>
            <div onClick={()=>onNumClickHandle('9')} className="cell">9</div>
          </div>
          <div className="row">
            <div onClick={()=>onNumClickHandle('4')} className="cell">4</div>
            <div onClick={()=>onNumClickHandle('5')} className="cell">5</div>
            <div onClick={()=>onNumClickHandle('6')} className="cell">6</div>
          </div>
          <div className="row">
            <div onClick={()=>onNumClickHandle('1')} className="cell">1</div>
            <div onClick={()=>onNumClickHandle('2')} className="cell">2</div>
            <div onClick={()=>onNumClickHandle('3')} className="cell">3</div>
          </div>
          <div className="row">
            <div onClick={()=>onNumClickHandle('0')} className="cell">0</div>
          </div>
        </div>
        <div className="operators">
          
            <div className="oprow">
                <div onClick={()=>onNumClickHandle('+')} className="cell">+</div>
                <div onClick={()=>onNumClickHandle('-')} className="cell">-</div>
            </div>
            <div className="oprow">
              <div onClick={()=>onNumClickHandle('*')} className="cell">*</div>
              <div onClick={()=>onNumClickHandle('/')} className="cell">/</div>
            </div>
            <div className="oprow">
            <div onClick={evaluate} className="cell">=</div>
            <div onClick={()=>{seteqn("0")}} className="cell">AC</div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
