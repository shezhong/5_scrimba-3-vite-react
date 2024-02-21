import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LionSticker from './LionSticker.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div>
        <p>Do you want to pet lion?
        </p>

        <button id="button" class="button" onClick={() => setCount((count) => count + 1)}>
        <div>
        <p>he has been pet {count} times</p>
        <img 
            src={LionSticker} 
            className="Lion" 
            alt="Lion Photo"
            style={{maxWidth: 500, width: 400}}
        />
        </div>
        </button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          keep petting him!!!
        </button>

      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
