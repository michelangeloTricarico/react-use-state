import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons.jsx'
import Card from './components/card.jsx'
import languages from './data/languages.js'

function App() {
  const [count, setCount] = useState(0)
  let actualLanguageId = 1

  return (
    <>
      <header style={{ backgroundColor: "#f2f2f2", textAlign: "left", padding: "1rem"}}><h1 style={{fontSize: "2rem"}}>Learn Web Development</h1></header>
      <main>
        <div className="row">
          <div className="col">
            <Buttons data={languages}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card description="languages"/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
