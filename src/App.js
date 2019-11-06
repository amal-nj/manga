import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Link ,NavLink} from "react-router-dom";
import axios from 'axios';
import Home from './comp/Home';
import MangaList from './comp/MangaList';
import Read from './comp/Read';
import MyManga from './comp/MyManga';
export default class App extends Component {
  constructor(){
    super();
    this.toggleFave=this.toggleFave.bind(this);
    this.toggleCurrent=this.toggleCurrent.bind(this);
    this.toggleWant=this.toggleWant.bind(this);
  }
  state={
    faves: [],
    currentRead: [],
    want2Read: []
  }
  toggleFave(manga){
    let index=this.state.faves.includes(manga);
    let faves=[...this.state.faves];
    if(index>0){
      faves.splice(index, 1);
      console.log(`removing ${manga.a} from my favorites list`);
     
    }
    else{
      faves.push(manga);
      console.log(`adding ${manga.a} to my favorites list`);

    }
    this.setState({faves});

  }

  toggleCurrent(manga){
    let index=this.state.currentRead.includes(manga);
    let current=[...this.state.currentRead];
    if(index>0){
      current.splice(index, 1);
      console.log(`removing ${manga.a} from my currently reading list`);
     
    }
    else{
      current.push(manga);
      console.log(`adding ${manga.a} to my currently reading list`);

    }
    this.setState({currentRead: current});

  }

  
  toggleWant(manga){
    let index=this.state.want2Read.includes(manga);
    let want=[...this.state.want2Read];
    if(index>0){
      want.splice(index, 1);
      console.log(`removing ${manga.a} from my want to read list`);
     
    }
    else{
      want.push(manga);
      console.log(`adding ${manga.a} to my want to read list`);

    }
    this.setState({want2Read: want});

  }

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
          <Route exact path="/list" render={(props) => <MangaList {...props} toggleFave={this.toggleFave} toggleWant={this.toggleWant} toggleCurrent={this.toggleCurrent}/>} />
          <Route path="/read/:id" component={Read} />
          <Route exact path="/myManga" render={(props) => <MyManga {...props} toggleFave={this.toggleFave} toggleWant={this.toggleWant} toggleCurrent={this.toggleCurrent}/>} />

        </Switch>
      </Router>
      </div>
    )
  }
}
