import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './components/home/Home';
import './App.css'
import Search from './components/search/Search';



const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App