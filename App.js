import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Rendervideo from './components/video';
import SlideCard from './components/Cards';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" exact> home</Route>
    //   </Routes>
    // </Router>
    <React.Fragment>
       <Navbar/>
       <div>
          <Rendervideo/>
       </div>
    <div className='container'>
      <SlideCard title="dish 1">
        <img  src='./image1.jpg' alt="image1" width={250} height={150}/>
        <p>This is the content for card 1.</p>
      </SlideCard>
      <SlideCard title="Dish 2">
        <img src='./image1.jpg' alt="image1" width={250} height={150}/>
        <p>This is the content for card 2.</p>
      </SlideCard>
      <SlideCard title="Dish 3">
        <img src='./image1.jpg' alt="image1" width={250} height={150}/>
        <p>This is the content for card 3.</p>
      </SlideCard>
      <SlideCard title="Dish 4">
         <img src='./image1.jpg' alt="image1" width={250} height={150}/>
        <p>This is the content for card 4.</p>
      </SlideCard>
    </div>
    </React.Fragment>
    
  );
}

export default App;
