
import { useEffect } from 'react';
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'



function App() {


  const initList = [
    {name: "task1", desc: "desc1"},
    {name: "task2", desc: "desc2"}
  ];



  return (
    <div className="App">
      <Header />
      <TaskList list={initList} />
    </div>
  )
}

export default App
