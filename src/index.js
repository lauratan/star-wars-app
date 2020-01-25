import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CharacterDetails from './components/FilmDetails/Characters/CharacterDetails/CharacterDetails';
import Films from './components/Films/Films';
import FilmDetails from './components/FilmDetails/FilmDetails';
import './index.css';

ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route exact path='/' component={Films}/>
      <Route exact path='/film/:title' component={FilmDetails}/>
      <Route exact path='/character/:name' component={CharacterDetails}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
