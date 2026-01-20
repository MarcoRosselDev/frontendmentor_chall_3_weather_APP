import { useState } from 'react';
import './App.css'

function App() {

  const [nums, setNums] = useState([])
  const [input, setInput] = useState("0")

  function handleBtn(event) {
    const id = event.target.id
    switch (id) {
      case "decimal":
        setInput(previo => {
          if (previo.includes(".")) {
            return previo
          } else {
            return previo.length == 1 && previo[0] == "0"? "0.": previo + "."
          }
        })
        break;
      case "one":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "1": previo + "1")
        break;
      case "two":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "2": previo + "2")
        break;
      case "three":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "3": previo + "3")
        break;
      case "four":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "4": previo + "4")
        break;
      case "five":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "5": previo + "5")
        break;
      case "six":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "6": previo + "6")
        break;
      case "seven":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "7": previo + "7")
        break;
      case "eight":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "8": previo + "8")
        break;
      case "nine":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "9": previo + "9")
        break;
      case "zero":
        setInput(previo => previo.length == 1 && previo[0] == "0"? "0": previo + "0")
        break;
      case "divide":
        setNums(prev => {
          let check = [...prev]
          let last = check[check.length - 1]
          if ( (last == "/" || last == "*" || last == "+" || last == "-") && input == "0" ) {
            check[check.length - 1] = "/"
            return check
          } else {
            return [...prev, Number(input), "/"]
          }
        })
        setInput("0")
      break;
      case "multiply":
        setNums(prev => {
          let check = [...prev]
          let last = check[check.length - 1]
          if ( (last == "/" || last == "*" || last == "+" || last == "-") && input == "0" ) {
            check[check.length - 1] = "*"
            return check
          } else {
            return [...prev, Number(input), "*"]
          }
        })
        setInput("0")
      break;
      case "subtract":
        setNums(prev => {
          let check = [...prev]
          let last = check[check.length - 1]
          if ( (last == "/" || last == "*" || last == "+" || last == "-") && input == "0" ) {
            check[check.length - 1] = "-"
            return check
          } else {
            return [...prev, Number(input), "-"]
          }
        })
        setInput("0")
      break;
      case "add":
        setNums(prev => {
          let check = [...prev]
          let last = check[check.length - 1]
          if ( (last == "/" || last == "*" || last == "+" || last == "-") && input == "0" ) {
            check[check.length - 1] = "+"
            return check
          } else {
            return [...prev, Number(input), "+"]
          }
        })
        setInput("0")
      break;
      case "clear":
        setNums([])
        setInput("0")
      break;
      case "equals":
        setNums(prev => {
          let check = [...prev]
          let last = check[check.length - 1]
          if ( (last == "/" || last == "*" || last == "+" || last == "-") && input == "0" ) {
            check.pop()
            let lastArray = check;
            let acumulador = 0
            let ecuation = ``

            check 
          } else {
            let lastArray = [...prev, Number(input)]
          }
        }) 
      break;
      default:
        break;
    }

    /*
    if (button === "AC") {
      
     } else if (button === "=") {
      
    } else if (button === "/" || button === "*" || button === "-" || button === "+") { 
      
    } else {
    
    } */
  }

  return (
    <>
      <div id='main-div'>
        <p id='display'>{nums}</p>
        <p>{input}</p>
        <div id='buttons'>
          <div id='first'>
            <button id='one' onClick={handleBtn}>1</button>
            <button id='two' onClick={handleBtn}>2</button>
            <button id='three' onClick={handleBtn}>3</button>
            <button id="divide" onClick={handleBtn}>/</button>
          </div>
          <div id='second'>
            <button id='four' onClick={handleBtn}>4</button>
            <button id='five' onClick={handleBtn}>5</button>
            <button id='six' onClick={handleBtn}>6</button>
            <button id="multiply" onClick={handleBtn}>*</button>
          </div>
          <div id='third'>
            <button id='seven' onClick={handleBtn}>7</button>
            <button id='eight' onClick={handleBtn}>8</button>
            <button id='nine' onClick={handleBtn}>9</button>
            <button id="subtract" onClick={handleBtn}>-</button>
          </div>
          <div id='fourth'>
            <button id='zero' onClick={handleBtn}>0</button>
            <button id="decimal" onClick={handleBtn}>.</button>
            <button id="add" onClick={handleBtn}>+</button>
          </div>
          <div id='fifth'>
            <button id="equals" onClick={handleBtn}>=</button>
            <button id="clear" onClick={handleBtn}>AC</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
