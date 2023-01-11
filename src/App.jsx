import React from 'react';
import { Navbar , Hero , Memory, Explore , Footer } from './components';
import { hero , navlinks , memory , placesAPI} from './data/travigodata';

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Footer/>
    </div>
  );
};

export default App;