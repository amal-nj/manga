import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="text-center home" >
          <div className="title">
          <h1>Manga Eden</h1>
          <h3>Read Manga Everwhere</h3>
          </div>
   
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdna.artstation.com/p/assets/covers/images/001/634/576/large/ricardo-rodriguez-novo-efeito3-2.jpg?1449849179" className="d-block w-100" alt="..." />
             

    
          </div>
        </div>{" "}
      </div>
      </div>
    );
  }
}
