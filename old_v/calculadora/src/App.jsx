import { useState } from 'react';
import './App.css'

function App() {

  // this gona be like this :   [123,1111,0,-123,-0.1231]
  // para luego aplicar el methodo const suma = arr.reduce((acumulador, numero) => acumulador + numero, 0)
  const [arr, setArr] = useState([])
  // para eso necesito operar directamente los / * . en el input actual
  const [input, setInput] = useState("0")
  const [pibote, setPibote] = useState([0, "+"])

  // estacion para trabajar con una variable global
  // para operaciones con ( / * - + ) y aplicarlo al valor previo
  function handleBtn(event) {
    const id = event.target.id
    switch (id) {
      case "decimal":
        setInput(previo => {
          if (previo.includes(".")) {
            return previo
          } else if (previo.length == 1 && previo[0] == "0") {
            return  previo + "0."
          } else {
            return  previo.length == 2 && previo[0] == "-" && previo[1] == "0" ? "-0." : previo + "."
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
        setInput(previo => {
          if (previo.length == 1 && previo[0] == "0") {
            return "0"
          } else if (previo.length == 1 && previo[0] == "-") {
            return "-0"
          } else {
            return previo + "0"
          }
        })
        break;
      case "divide":
        // si 123/ ? dejarlo asi
        {
          const ultimoOperador = pibote[1]
          if (ultimoOperador === "+" && pibote[0] !== 0) {

            // si 123*+- ? cambiarlo a 123/ y esperar el siguiente input
          } else if (ultimoOperador === "*" || ultimoOperador === "-" || ultimoOperador === "+" || ultimoOperador === "/") {
            pibote[0] = Number(input)
            pibote[1] = "/"
          }
        }
        // si 123 ? aplicar 123/ y esperar el siguiente input
      break;
      case "multiply":
      break;
      case "subtract":
        if (input === "0") {
          setInput("-")
        } else if (input !== "0" && pibote[0] === 0) {
          pibote[0] = Number(input)
          pibote[1] = "-"
        } else if (input !== "0" && pibote[0] > 0 ) {
          switch (pibote[1]) {
            case "-":
              setArr(prev => [...prev, pibote[0]])
              pibote[0] = Number(input)
              pibote[1] = "-"
              setInput("-")
              break;
            case "+":
              setArr(prev => [...prev, pibote[0]])
              pibote[0] = Number(input)
              pibote[1] = "-"
              setInput("-")
              break;
            case "*":
              setArr(prev => [...prev, Number(input) * pibote[0]])
              setInput("-")
            break;
            case "/":
              setArr(prev => [...prev, pibote[0] / Number(input) ])
              setInput("-")
            break;
            default:
              break;
          }
        }
      break;
      case "add":
        if (input === "0") {
          setInput("0")
        } else if (input !== "0" && pibote[0] === 0) {
          pibote[0] = Number(input)
          pibote[1] = "+"
        } else if (input !== "0" && pibote[0] > 0 ) {
          switch (pibote[1]) {
            case "+":
              setArr(prev => [...prev, pibote[0]])
              pibote[0] = Number(input)
              pibote[1] = "+"
              setInput("0")
              break;
            case "*":
              setArr(prev => [...prev, Number(input) * pibote[0]])
              setInput("0")
            break;
            case "/":
              setArr(prev => [...prev, pibote[0] / Number(input) ])
              setInput("0")
            break;
            default:
              break;
          }
        }
      break;
      case "clear":
        setArr([])
        setInput([])
      break;
      case "equals":
        // sumar arr con arr.reduce y sumarle input actual
        // actualizar input que sea esta suma
        // actualizar arr con solo esta suma
      break;
      default:
        break;
    }
  }
  /* 
  const [arr, setArr] = useState([])
  const [input, setInput] = useState("0")
  */

  return (
    <>
      <div id='main-div'>
        <p id='display'>{arr}</p>
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
