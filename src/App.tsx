import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Posts} from "./components/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, RouteChildrenProps
} from "react-router-dom";
import {PostDetails} from "./components/postDetails";
import {RouteComponentProps} from "react-router/ts4.0";

function App() {
  return (
    <div className="App">
        <Router>
            <Link to={'/posts'}>posts</Link>
            <Route exact path={'/posts'} render={()=> <Posts/>}/>
            <Route path={'/posts:id'} render={(props:RouteComponentProps)=> <PostDetails {...props}/>}/>
        </Router>
    </div>
  );
}

export default App;
