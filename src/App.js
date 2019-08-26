import React from 'react';
import './App.css';
import Home from './components/Home';
import Article from './components/Article';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
        <div>
          <h1> React Article Application</h1>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/article" target="_blank">Article</Link></li>
          </ul>
          <Route exact path = "/" component={Home}></Route>
          <Route exact path = "/article" component={Article}></Route>
        </div>
      </Router>
);
export default App;
