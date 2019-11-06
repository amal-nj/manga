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
    let details = 0;
    if (this.state.details) {
      details = (
        <div>
          {this.state.details.alias}
          <br />
          {this.state.details.author}
          <br />
          {this.state.details.artist}
          <br />
          {this.state.details.categories}
          <br />
          <Link to={`/read/${this.state.details.chapters[0][3]}/${this.props.current.t}`}>
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
        </div>
      );
    }
    // console.log("isFvae: " +this.props.isFave);
    return (
      <div>
        I'm details
        {details}
      </div>
    );
  }
}
