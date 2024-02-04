import './css/App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Background from './Background.js'
import Jeonghan from './components/Jeonghan.js'
import Soobin from './components/Soobin.js'
import DrugSearch from './components/DrugSearch.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background />} />
        <Route path="/jeonghan" element={<Jeonghan />} />
        <Route path="/drugsearch" element={<DrugSearch />} />
        <Route path="/soobin" element={<Soobin/>}/>
      </Routes>
    </BrowserRouter>
  );
}
        
    // <div className="App">
    //  <header className="App-header">
      /*  {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */ //}
      //  <Navbar />
      //  <p>Hello</p>
    //  </header>
   // </div>

export default App;
