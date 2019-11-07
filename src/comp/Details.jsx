import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Details extends Component {
  state = {
    details: null
  };

  isSet = false;
  componentDidUpdate() {
    if (this.props.manga) {
      axios
        .get(`https://www.mangaeden.com/api/manga/${this.props.manga.i}/`)
        .then(res => {
          console.log(res);
          if (!this.isSet || res.data.alias != this.state.details.alias) {
            console.log("hello");
            this.isSet = true;
            this.setState({ details: res.data });
          }
        })
        .catch(error => console.log(error));
    }
  }
  render() {
    let chapterList = "";
    let details = "Nothing is selected";
    if (this.state.details) {
      chapterList = this.state.details.chapters.map(chapter => (
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <Link to={`/read/${chapter[3]}/${this.props.current.t}`}>
              Chapter {chapter[0]}
            </Link>
          </li>
        </ul>
      ));
      console.log("chapters");
      console.log(this.state.details.chapters);
      details = (
        <div>
          {/* {this.state.details.alias}
          <br />
          {this.state.details.author}
          <br />
          {this.state.details.artist}
          <br />
          {this.state.details.categories}
          <br />
          <Link
            to={`/read/${this.state.details.chapters[0][3]}/${
              this.props.current.t
            }`}
          >
            <button
              onClick={() => {
                this.props.toggleCurrent();
                this.props.onRead();
              }}
            >
              read
            </button>
          </Link>
          <button onClick={this.props.toggleFave}>
            {this.props.isFave ? "Remove From Favorite" : "Favorite"}
          </button>
          <button onClick={this.props.toggleWant}>
            {this.props.isWant ? "Remove From Want to Read" : "Want to Read"}
          </button>
          {chapterList} */}

          <div className="card" >
            <div className="card-body">
              <h5 className="card-title"> {this.state.details.alias}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Auther: {this.state.details.author}
              </h6>
              <img
                src={
                  "https://cdn.mangaeden.com/mangasimg/" +
                  this.state.details.image
                }
                alt=""
              />
              <div className="btn-list">
                <Link
                  to={`/read/${this.state.details.chapters[0][3]}/${
                    this.props.current.t
                  }`}
                >
                  <button
                    className=" btn btn-dark"
                    onClick={() => {
                      this.props.toggleCurrent();
                      this.props.onRead();
                    }}
                  >
                    read
                  </button>
                </Link>
                <button
                  className=" btn btn-dark"
                  onClick={this.props.toggleFave}
                >
                  {this.props.isFave ? "Remove From Favorite" : "Favorite"}
                </button>
                <button
                  className=" btn btn-dark"
                  onClick={this.props.toggleWant}
                >
                  {this.props.isWant
                    ? "Remove From Want to Read"
                    : "Want to Read"}
                </button>
              </div>
              <div class="card-header mt-5">Chapter List</div>
              {chapterList}
            </div>
          </div>
        </div>
      );
    }
    // console.log("isFvae: " +this.props.isFave);
    return <div className="details text-center">{details}</div>;
  }
}
