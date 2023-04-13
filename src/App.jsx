
import { useEffect } from 'react';
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';



function App() {


  const initList = [
    {name: "task1", desc: "desc1"},
    {name: "task2", desc: "desc2"}
  ];



  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/task">Tasks</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={< About />}></Route>
          <Route path="/task" element={< TaskList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
