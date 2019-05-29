import React from 'react';
import Home from '../components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SinglePost from '../containers/SinglePost';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/posts/:id" component={SinglePost}/>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
