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
    let index = this.state.faves.indexOf(manga);
    let faves = [...this.state.faves];
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

  toggleCurrent(manga) {
    let index = this.state.currentRead.indexOf(manga);
    let current = [...this.state.currentRead];
    if (index >= 0) {
      current.splice(index, 1);
      console.log(`removing ${manga.a} from my currently reading list`);
    } else {
      current.push(manga);
      console.log(`adding ${manga.a} to my currently reading list`);
    }
    this.setState({
      currentRead: current
    });
  }

  toggleWant(manga) {
    let index = this.state.want2Read.indexOf(manga);
    let want = [...this.state.want2Read];
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
          {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/list" onClick={this.resetSearch}>
              MangaList
            </Link>
            <form action="">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                onChange={this.updateSearch}
              />
              <br />
              <Link to="/list">
                <input type="submit" value="Go" onClick={this.updateSearch} />
              </Link>
            </form>
            <Link to="/myManga">MyManga</Link>
          </nav> */}
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/list" >
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
          {/* <ul class="nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                to="/list"
                onClick={this.resetSearch}
              >
                MangaList
              </Link>
            </li>
            <li class="nav-item">
              <form action="" class="nav-link active">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  onChange={this.updateSearch}
                />
                <br />
                <Link to="/list">
                  <input type="submit" value="Go" onClick={this.updateSearch} />
                </Link>
              </form>
            </li>
            <li class="nav-item">
              <Link to="/myManga">MyManga</Link>
            </li>
          </ul> */}

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
                  title={this.state.currentRead[this.state.currentRead.length-1].t}
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
                  toggleCurrent={this.toggleCurrent}
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
