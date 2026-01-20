import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import {quoteData} from './data.js'

function App() {
  const [data, setData] = useState(quoteData.quotes)
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

    const randomQuote = () => {
    const randomID = Math.round(Math.random() * 102 );
    setQuote(data[randomID].quote)
    setAuthor(data[randomID].author)
  }

  useEffect(() => {
    randomQuote()
  }, [])


  return (
    <>
      <div id='quote-box'>
        <p id='text'>{quote}</p>
        <p id='author'>- {author}</p>
        <div id='bottom-div'>
        <a href={`http://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text${quote}`} target="_blank" id='tweet-quote'>tweet quote</a>
          <button id='new-quote' onClick={randomQuote}>New quote</button>
        </div>
      </div>
    </>
  )
}
// ejemplos de links de x link

// https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22The%20person%20who%20says%20it%20cannot%20be%20done%20should%20not%20interrupt%20the%20person%20who%20is%20doing%20it.%22%20Chinese%20Proverb
// https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22If%20the%20wind%20will%20not%20serve%2C%20take%20to%20the%20oars.%22%20Latin%20Proverb

export default App
