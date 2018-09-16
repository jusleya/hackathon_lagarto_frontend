import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//Components
import Footer      from './components/Footer';
import Header      from './components/Header';
import ScrollToTop from './components/ScrollToTop';

//Views
import Contact  from './views/Contact';
import Delation from './views/Delation';
import Home     from './views/Home';

const Main = () => (
  <Router>
    <ScrollToTop>
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/denuncie' component={Delation} />
          <Route exact path='/contato' component={Contact} />
        </Switch>
        <Footer />
      </main>
    </ScrollToTop>
  </Router>
);

export default Main;