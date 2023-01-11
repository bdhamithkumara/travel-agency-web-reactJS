import React from 'react';
import { Navbar , Hero , Memory, Explore , Footer, Advertise } from './components';
import { hero , navlinks , memory , placesAPI , brands} from './data/travigodata';

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Advertise brands={brands}/>
      <Footer/>
    </div>
  );
};

export default App;