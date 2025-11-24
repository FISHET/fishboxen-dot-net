import './App.css'
import avatar from './assets/avatar.png'

function App() {

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/tifisher" target="_blank">
          <img src={avatar} className="logo" alt="My LinkedIn" />
        </a>
      </div>
      <h1>Tom Fisher</h1>
      <h2>Experienced SDET & Quality Coach</h2>
    </>
  )
}

export default App
