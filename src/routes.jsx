import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Views
import Home from './views/Home';
import Delation from './views/Delation';

const Main = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/denuncie' component={Delation} />
      </Switch>
      <Footer />
    </main>
  </Router>
);

export default Main;