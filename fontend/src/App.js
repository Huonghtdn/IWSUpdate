import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './component/Nav'

import Home from './component/AllNews'
import NewsInCat from './component/NewsInCat';
import OneNews from './component/OneNews';
import NewsByTags from './component/NewsByTags';

export default class App  extends Component {
    render(){
      return(
        <Router>
          <Nav></Nav>

         <Route path='/' exact component={Home}></Route>
         <Route path='/category/:id'  exact component={NewsInCat}></Route>
         <Route path='/news/:id' exact component={OneNews}></Route>
         <Route path='/tags/:id/news' component={NewsByTags}></Route>
        </Router>
      );
    }
}

