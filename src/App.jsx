
import { useEffect } from 'react';
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Button, Flex, ListItem, UnorderedList, useColorMode } from '@chakra-ui/react';



function App() {


  const initList = [
    {name: "task1", desc: "desc1"},
    {name: "task2", desc: "desc2"}
  ];

  const { toggleColorMode } = useColorMode();

  return (
    <Flex ml="100px" alignContent="center" direction="column">
      <Flex>
        <Header />
        <Button bgColor="transparent" m="15px" mt="5px" _hover={{bgColor:"wheat", }} onClick={toggleColorMode}>🌓</Button>
      </Flex>
      <BrowserRouter>
        <nav>
          <Flex ml="20px">
            <UnorderedList >
              <ListItem  textDecoration="underline" color="blue.600"><Link to="/">Home</Link></ListItem>
              <ListItem  textDecoration="underline" color="blue.600"><Link to="/task">Tasks</Link></ListItem>
              <ListItem  textDecoration="underline" color="blue.600"><Link to="/about">About us</Link></ListItem>
            </UnorderedList>
          </Flex>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={< About />}></Route>
          <Route path="/task" element={< TaskList />}></Route>
        </Routes>
      </BrowserRouter>
    </Flex>
  )
}

export default App
