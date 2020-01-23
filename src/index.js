import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Films from './components/Films/Films';
import FilmDetails from './components/FilmDetails/FilmDetails';

ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route exact path='/' component={Films}/>
      <Route exact path='/film/:title' component={FilmDetails}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
