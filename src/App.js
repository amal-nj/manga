import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./comp/Home";
import MangaList from "./comp/MangaList";
import Read from "./comp/Read";
import MyManga from "./comp/MyManga";
export default class App extends Component {
  constructor() {
    super();
    this.toggleFave = this.toggleFave.bind(this);
    this.toggleCurrent = this.toggleCurrent.bind(this);
    this.removeCurrent=this.removeCurrent.bind(this);
    this.toggleWant = this.toggleWant.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }
  state = {
    faves: [],
    currentRead: [],
    want2Read: [],
    search: ""
  };

  toggleFave(manga) {
    let faves = [...this.state.faves];
    let checkFaves = faves.map(item => JSON.stringify(item));
    let index = checkFaves.indexOf(JSON.stringify(manga));
    console.log("index: " + index);
    if (index >= 0) {
      faves.splice(index, 1);
      console.log(`removing ${manga.a} from my favorites list`);
    } else {
      faves.push(manga);
      console.log(`adding ${manga.a} to my favorites list`);
    }
    this.setState({
      faves: faves
    });
  }

  removeCurrent(manga) {
    let current = [...this.state.currentRead];
    let checkCurrent = current.map(item => JSON.stringify(item));
    let index = checkCurrent.indexOf(JSON.stringify(manga));
    current.splice(index, 1);
    console.log(`removing ${manga.a} from my current list`);

    this.setState({
      currentRead: current
    });
  }

  toggleCurrent(manga) {
    let current = [...this.state.currentRead];
    let checkCurrent = current.map(item => JSON.stringify(item));
    let index = checkCurrent.indexOf(JSON.stringify(manga));
    if (index < 0) {
      current.push(manga);
      console.log(`adding ${manga.a} to my currently reading list`);
      this.setState({
        currentRead: current
      });
    }
  }

  toggleWant(manga) {
    let want = [...this.state.want2Read];
    let checkWant = want.map(item => JSON.stringify(item));
    let index = checkWant.indexOf(JSON.stringify(manga));
    if (index >= 0) {
      want.splice(index, 1);
      console.log(`removing ${manga.a} from my want to read list`);
    } else {
      want.push(manga);
      console.log(`adding ${manga.a} to my want to read list`);
    }
    this.setState({
      want2Read: want
    });
  }

  updateSearch(e) {
    console.log(e.type);
    this.setState({
      search: document.getElementById("search").value
    });
    console.log(this.state.search);
  }

  resetSearch(e) {
    this.setState({
      search: ""
    });
    console.log(this.state.search);
    document.getElementById("search").value = "";
  }

  render() {
    console.log("I'm updating");
    console.log(this.state.faves);
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Manga Eden
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/list"
                    onClick={this.resetSearch}
                  >
                    MangaList
                  </Link>
                </li>
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      name="search"
                      id="search"
                      onChange={this.updateSearch}
                    />
                    <Link to="/list">
                      <button
                        className="btn btn-dark my-2 my-sm-0"
                        type="submit"
                        onClick={this.updateSearch}
                      >
                        Search
                      </button>
                    </Link>
                  </form>
                </li>
              </ul>
              <Link className="nav-link" to="/myManga">
                MyManga
              </Link>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/list"
              render={props => (
                <MangaList
                  {...props}
                  toggleFave={this.toggleFave}
                  toggleWant={this.toggleWant}
                  toggleCurrent={this.toggleCurrent}
                  faves={this.state.faves}
                  want2Read={this.state.want2Read}
                  search={this.state.search}
                  resetSearch={this.resetSearch}
                />
              )}
            />
            <Route
              path="/read/:id/:manga"
              render={props => (
                <Read
                  {...props}
                  toggleFave={this.toggleFave}
                  faves={this.state.faves}
                />
              )}
            />
            <Route
              exact
              path="/myManga"
              render={props => (
                <MyManga
                  {...props}
                  toggleFave={this.toggleFave}
                  toggleWant={this.toggleWant}
                  removeCurrent={this.removeCurrent}
                  faves={this.state.faves}
                  want2Read={this.state.want2Read}
                  currentRead={this.state.currentRead}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
