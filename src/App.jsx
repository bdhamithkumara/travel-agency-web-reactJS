import React from 'react';
import { Navbar , Hero , Memory, Footer } from './components';
import { hero , navlinks , memory } from './data/travigodata';

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Footer/>
    </div>
  );
};

export default App;