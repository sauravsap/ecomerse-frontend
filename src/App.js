import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/home-index";
import Header from './Component/Header/header-index';
function App() {
  return (

   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
     {/* <Route path="/" exact ={true} component={<Header/>} /> */} 
   </Routes>
   </BrowserRouter>

   
  );
}


export default App;
