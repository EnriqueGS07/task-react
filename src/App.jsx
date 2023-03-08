
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'




function App() {


  const initList = [
    {name: "task1", state:"done"},
    {name: "task2", state:"undone"}
  ];

  

  return (
    <div className="App">
      <Header />
      <TaskList list={initList} />
    </div>
  )
}

export default App
