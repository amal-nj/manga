import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
        <div className="card card-list">
          <img src={"https://cdn.mangaeden.com/mangasimg/" + this.props.manga.im} className="card-img-top" alt={this.props.manga.t+" cover"} />
          <div className="card-body">
            <h5 className="card-title">{this.props.manga.a}</h5>
            <button className="btn btn-dark" onClick={this.props.onViewDetails}>
              Details
            </button>
          </div>
        </div>
    );
  }
}
