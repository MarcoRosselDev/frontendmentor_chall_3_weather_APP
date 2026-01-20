import { useEffect, useRef, useState } from 'react'
import './App.css'
import { marked } from 'marked';

function MarkdownComponent(markdownText) {
  const html = marked(markdownText);

  return (
    <div id='preview' dangerouslySetInnerHTML={{ __html: html }} />
  );
}

function App() {
  const [mark, setMark] = useState(null)  
  const myRef = useRef(null)

  function handleChange() {
    const elMutated = MarkdownComponent(marked(`${myRef.current.value}`))
    setMark(elMutated)
  }
  useEffect(() => {
    myRef.current.value = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

    `;
    handleChange()
  },[])

  return (
    <>
      <div className='main-div'>

      <textarea cols={60} rows={20} ref={myRef} name="texto" id="editor" onChange={handleChange}></textarea>
        {mark}
      </div>
    </>
  )
}

/* function App() {  

  const [text, setText] = useState("")
  const myRef = useRef(null);

  const handleChange = (e) => {
    // ojo
    console.log(e.target.value);
    setText(e.target.value);  
    // Limpiamos el timeout anterior si existe
    if (myRef.current) {
      clearTimeout(myRef.current);
    }
    
    // Configuramos un nuevo timeout
    myRef.current = setTimeout(() => {
      // Aquí tu lógica que se ejecuta después de 500ms sin cambios
      console.log('Valor final:', e.target.value);
      setText(e.target.value)
    }, 1000); // 500ms de espera
  };

  return (
    <>
      <textarea ref={myRef} name="texto" id="editor" onChange={handleChange}></textarea>
      {text}
    </>
  )
} */

export default App
