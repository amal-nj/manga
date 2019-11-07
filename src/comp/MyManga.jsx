import React, { Component } from "react";
export default class MyManga extends Component {
  render() {
    console.log(this.props.faves);
    return (
      <div className="my-manga">
        <div class="card info-card text-center">
          <h3 class="card-header">Favorites</h3>
          <div class="card-body">
            {this.props.faves.map(manga => (
              <div>
                <h4>{manga.t}</h4>
                <button
                  className="btn btn-dark"
                  onClick={() => this.props.toggleFave(manga)}
                >
                  Remove From Favorites
                </button>
              </div>
            ))}
          </div>
        </div>
        <div class="card info-card text-center">
          <h3 class="card-header">currently Reading</h3>
          <div class="card-body">
            {this.props.currentRead.map(manga => (
              <div>
                <h4>{manga.t}</h4>
                <button
                  className="btn btn-dark"
                  onClick={() => this.props.toggleCurrent(manga)}
                >
                  Remove From currently Reading
                </button>
              </div>
            ))}
          </div>
        </div>
        <div class="card info-card text-center">
          <h3 class="card-header">Want To Read</h3>
          <div class="card-body">
            {this.props.want2Read.map(manga => (
              <div>
                <h4>{manga.t}</h4>
                <button className="btn btn-dark" onClick={() => this.props.toggleWant(manga)}>
                  Remove From Want To Read
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}
