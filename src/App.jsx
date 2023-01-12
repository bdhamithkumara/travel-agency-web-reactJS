import React from 'react';
import { Navbar , Hero , Memory, Explore , Footer, Advertise, Pricing, Banner } from './components';
import { hero , navlinks , memory , placesAPI , brands , pricingapi , bannerAPI} from './data/travigodata';

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Advertise brands={brands}/>
      <Pricing pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI}/>
      <Footer/>
    </div>
  );
};

export default App;