
import './App.css'
//import Home from './pages/Home'
import Home from './pages/Home';
import Tour from './pages/Tour';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAppBar from './components/AppBar';

function App() {
 
 
  return (
    <BrowserRouter>
    <SearchAppBar></SearchAppBar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/:id" element={<Tour></Tour>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
