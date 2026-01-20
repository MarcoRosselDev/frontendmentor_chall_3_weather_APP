import { useState } from 'react'
import './App.css'

function App() {
  const [display , setDisplay] = useState("0")

  function handleBtn(button) {
    if (button === "AC") {
      setDisplay("0")
    } else if (button === "=") {
      /* eval es muy riesgoso y costoso, mala ida utilizarlo 
      const result = eval(display).toString();
      setDisplay(result)
      */
    } else if (button === "/" || button === "*" || button === "-" || button === "+") { 
      setDisplay( prev => {

        /* comporovamos que el ultimo item no es uno de los operadores */
        const check = prev[prev.length - 1]
        if (check === "/" || check === "-" || check === "+") {
        
          let ret = [...prev]
          ret.pop()
          ret.push(button)

          return ret.join("")
        } else {
          return prev + button
        }
      })
    } else {
      setDisplay(prev => prev == "0" ? button : prev.toString() + button.toString())
    }
  }

  return (
    <>
      <div id='main-div'>
        <p id='display'>{display}</p>
        <div id='buttons'>
          <div id='first'>
            <button id='one' onClick={() => handleBtn("1")}>1</button>
            <button id='two' onClick={() => handleBtn("2")}>2</button>
            <button id='three' onClick={() => handleBtn("3")}>3</button>
            <button id="divide" onClick={() => handleBtn("/")}>/</button>
          </div>
          <div id='second'>
            <button id='four' onClick={() => handleBtn("4")}>4</button>
            <button id='five' onClick={() => handleBtn("5")}>5</button>
            <button id='six' onClick={() => handleBtn("6")}>6</button>
            <button id="multiply" onClick={() => handleBtn("*")}>*</button>
          </div>
          <div id='third'>
            <button id='seven' onClick={() => handleBtn("7")}>7</button>
            <button id='eight' onClick={() => handleBtn("8")}>8</button>
            <button id='nine' onClick={() => handleBtn("9")}>9</button>
            <button id="subtract" onClick={() => handleBtn("-")}>-</button>
          </div>
          <div id='fourth'>
            <button id='zero' onClick={() => handleBtn("0")}>0</button>
            <button id="decimal" onClick={() => handleBtn(".")}>.</button>
            <button id="add" onClick={() => handleBtn("+")}>+</button>
          </div>
          <div id='fifth'>
            <button id="equals" onClick={() => handleBtn("=")}>=</button>
            <button id="clear" onClick={() => handleBtn("AC")}>AC</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
