import React from 'react';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line
export default () => {
  const Pagina404 = () => (
   <Page404 />
  )

  return (
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route exact path="/home">
        <Home />
      </Route>
    
      <Route component={Pagina404} />
    </Switch >
  );
}


