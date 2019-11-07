import React, { Component } from "react";
import axios from "axios";
export default class Read extends Component {
    constructor(){
        super();
        this.goToPage=this.goToPage.bind(this);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);

    }
  state = {
    images: null,
    isOpen: false,
    pageNum:0
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  previous(){
      if(this.state.pageNum!=0){
          this.setState({pageNum: this.state.pageNum-1});

      }else{
          alert("this is the first page in the chapter")
      }
  }
  next(){
    if(this.state.images&&this.state.pageNum!=this.state.images.length-1){
        this.setState({pageNum: this.state.pageNum+1});
        
    }
    else{
        alert("this is the last page in the chapter")
    }
   
}
goToPage(i){
    this.setState({
        pageNum: i
    })
}
  componentDidMount() {
    axios
      .get(
        `https://www.mangaeden.com/api/chapter/${this.props.match.params.id}/`
      )
      .then(res => {
        console.log(res);
        this.setState({ images: res.data.images.reverse() });
      })
      .catch(error => console.log(error));
  }
  componentWillUnmount() {}
  render() {
    console.log("images");
    console.log(this.images);
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    let isFave = this.props.faves.includes();
    return (
      <div className="text-center mt-10">
          <h2>{this.props.title}</h2>
        <div
          class="btn-group mt-10"
          role="group"
          aria-label="Button group with nested dropdown"
          
        >
          <button type="button" class="btn btn-secondary" onClick={this.previous}>
            Previous
          </button>
          <button type="button" class="btn btn-secondary" onClick={this.next}>
            Next
          </button>

          <div class="btn-group" role="group" onClick={this.toggleOpen}>
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              
            >
              Page {this.state.pageNum}
            </button>
            <div className={menuClass} aria-labelledby="btnGroupDrop1">
              {this.state.images &&
                this.state.images.map((image, i) => (
                  <button class="dropdown-item" onClick={()=>this.goToPage(i)} >
                    {i}
                  </button>
                ))}
             
            </div>
          </div>
        </div>

        {this.state.images &&
          <div className="text-center m-10">
            <img
              src={`https://cdn.mangaeden.com/mangasimg/${this.state.images[this.state.pageNum][1]}`}
            />
            </div>
          }
      </div>
    );
  }
}
