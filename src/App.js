import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route component={Homepage} path='/' exact/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
