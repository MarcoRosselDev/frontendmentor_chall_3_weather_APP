import { useRef } from 'react';
import './App.css'

function App() {

  const myRef = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  async function playMp3() {
    const e = await myRef.current.play()
    console.log(e);
    //myRef.current.play();
  }

  function pl() {
    myRef2.current.play()
  }
  function p2() {
    myRef3.current.play()
  }

  return (
    <>
      <button id="playButton" onClick={playMp3}>play audio</button>
      <button id="playButton" onClick={pl}>play audio 2</button>
      <button id="playButton" onClick={p2}>play audio 3</button>
      <audio ref={myRef} src="src/dump/Heater-1.mp3" id="myAudio"></audio>
      <audio ref={myRef2} src="src/dump/Heater-2.mp3" id="myAudio"></audio>
      <audio ref={myRef3} src="src/dump/Heater-3.mp3" id="myAudio"></audio>
    </>
  )
}

export default App
