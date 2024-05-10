import React from 'react'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     <NavBar />
     <Header/>
     <Feature />
     <Offer />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
