// import { useState } from 'react'
// import samLogo from './assets/samosa.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <h1>Samosa Selector</h1>
//       <h2>Count: 0</h2>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={samLogo} className="logo" alt="Vite logo" />
//         </a>
        
// <div class = "container">
//     <div class="box"></div>
//     <div class="box"></div>
//     <div class="box"></div>
// </div>

//       </div>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count</h2>
        <img className="samosa"
        src="/samosa.png"
        alt="Sambusa"></img>


      </div>


    </div>
  )
}

export default App
