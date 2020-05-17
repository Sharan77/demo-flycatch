import React from 'react';
import { createBrowserHistory } from 'history';
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css'
import HomePage from './pages/home_page'
import BlogListPage from './pages/blog_list_page'
import BlogPageComments from './pages/blog_page_comments'

const history = createBrowserHistory();

class App extends React.Component {

  render() {
    return (
      <>
      <Router history={history} >
        <Switch>
          <Route exact path="/post/:id" component={BlogPageComments}/>
          <Route exact path="/post" component={BlogListPage}/>
          <Route exact path="/" component={HomePage}/>
          <Redirect to="/" />
        </Switch>
      </Router>
      </>
    )
  }
}

export default App;
