import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatPeople from './img/cat_people.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img src={CatPeople} className="logo react" style={{ width: '100vw' , height : '100%'}} />

      </div>
      <h1>แมวชีส</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
