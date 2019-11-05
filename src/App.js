import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Link ,NavLink} from "react-router-dom";
import axios from 'axios';
import Home from './comp/Home';
import MangaList from './comp/MangaList';
import Read from './comp/Read';
import MyManga from './comp/MyManga';
export default class App extends Component {
  render() {
    return (
      <div>
        I'm app
        <Router>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallary">Gallary</Link>
          <Link to="/contact">Contact</Link>

        </nav> */}
{/* 
        <Navbar className="Navbar" bg="dark">
          <Navbar.Brand href="#home">SEI Super Heros</Navbar.Brand>
          <Nav className="mr-auto text-left">
            <NavLink to="/" className="NavLink">Home </NavLink>
            <NavLink to="/list" className="NavLink">List </NavLink>
            <NavLink to="/heros" className="NavLink">Heros </NavLink>
          </Nav>
        </Navbar> */}
     

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/list" component={MangaList} />
          <Route path="/read/:id" component={Read} />
          <Route exact path="/myManga" component={MyManga} />

        </Switch>
      </Router>
      </div>
    )
  }
}
