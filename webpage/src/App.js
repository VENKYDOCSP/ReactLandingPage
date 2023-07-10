import './App.css';
import Banner from './containers/Banner';
import NavBar from './containers/NavBar';
import About from './containers/About';
import Shop from './containers/Shop';
import Error from './containers/Error'
import {  Route, Router, Routes } from 'react-router-dom';
import NewNews from './containers/NewNews';



function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
      {/* <Routes>
      <Route path="/about" element={<About/>} />
      <Route path='/shop' element={<Shop/>}/>

      </Routes> */}

    <Routes>
        
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/home' element={<Banner></Banner>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Error />} />
        <Route path="/project" element={<Error />} />
        <Route path="/news" element={<NewNews />} />
      </Routes>



    </div>
  );
}

export default App;
