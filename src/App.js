import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Pricing from './pages/pricing/Pricing';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route component={Homepage} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Pricing} path='/pricing' />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
