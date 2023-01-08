import React from 'react';
import { Navbar , Hero , Footer } from './components';
import { hero } from './data/travigodata';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero hero={hero}/>
      <Footer/>
    </div>
  );
};

export default App;