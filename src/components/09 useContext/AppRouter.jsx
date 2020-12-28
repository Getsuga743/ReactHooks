import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/users" component={LoginPage} />
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
// switch es el padre de las rutas, y a su vez el router es el padre de este y el navbar
// la idea es crear un componente q tengan una variable la cual pueda ser distribuida a sus hijos
