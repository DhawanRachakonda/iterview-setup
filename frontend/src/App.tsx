import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PingPong() {
  const [message, setMessage] = useState('');
  const ping = async () => {
    setMessage('')
    const promiseResponse = await fetch("https://silver-carnival-4w6p9wr4vpvfjw69-8080.app.github.dev/api/ping");
    const response = await promiseResponse.json();
    setMessage(response.message);
  }

  return <><p>Message: {message}</p><button onClick={ping}>Ping</button></>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <PingPong />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
