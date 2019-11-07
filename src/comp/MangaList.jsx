import React, { Component } from "react";
import axios from "axios";
import List from "./List";
import Details from "./Details";
export default class MangaList extends Component {
  constructor() {
    super();
    this.viewMangaDetails = this.viewMangaDetails.bind(this);
  }
  state = {
    mangaArr: [],
    viewManga: null,
  };
 
  viewMangaDetails(manga) {
    this.setState({ viewManga: manga });
  }

  componentDidMount() {
    console.log("here")
    console.log(this.state.search);
    axios
      .get("https://www.mangaeden.com/api/list/0/")
      .then(res => {
        console.log(res);
        let mangaArr = [];
        res.data.manga.slice(0, 100).forEach(item => {
            if(this.props.search==""){
                if (
                    item.c.length &&
                    !(item.c.includes("Yaoi") || item.c.includes("Romance") || item.c.includes("Yuri")||item.c.includes("Ecchi")||item.c.includes("Harem"))
                ) {
                    //yes I actually had to filter it out
                    mangaArr.push(item);
                }
        }else{
            if (
                item.c.length &&
                !(item.c.includes("Yaoi") || item.c.includes("Romance") || item.c.includes("Yuri") ||item.c.includes("Ecchi")||item.c.includes("Harem"))&&(item.a==this.props.search||item.t==this.props.search)
            ) {
                //yes I actually had to filter it out
                mangaArr.push(item);
            }
        }
        });
        if(JSON.stringify(this.state.mangaArr)!=JSON.stringify(mangaArr)){
          this.setState({ mangaArr });
        }
        console.log("just now")
        console.log(mangaArr);
      })
      .catch(error => console.log(error));
      // this.props.resetSearch();
  }
  componentDidUpdate() {
    console.log("here")
    console.log(this.state.search);
    axios
      .get("https://www.mangaeden.com/api/list/0/")
      .then(res => {
        console.log(res);
        let mangaArr = [];
        res.data.manga.slice(0, 100).forEach(item => {
            if(this.props.search==""){
                if (
                    item.c.length &&
                    !(item.c.includes("Yaoi") || item.c.includes("Romance") || item.c.includes("Yuri")||item.c.includes("Ecchi")||item.c.includes("Harem"))
                ) {
                    //yes I actually had to filter it out
                    mangaArr.push(item);
                }
        }else{
            if (
                item.c.length &&
                !(item.c.includes("Yaoi") || item.c.includes("Romance") || item.c.includes("Yuri") ||item.c.includes("Ecchi")||item.c.includes("Harem"))&&(item.a==this.props.search||item.t==this.props.search)
            ) {
                //yes I actually had to filter it out
                mangaArr.push(item);
            }
        }
        });
        if(JSON.stringify(this.state.mangaArr)!=JSON.stringify(mangaArr)){
          this.setState({ mangaArr });
        }
        console.log("just now")
        console.log(mangaArr);
      })
      .catch(error => console.log(error));
      // this.props.resetSearch();
  }

 
  render() {
    var list = this.state.mangaArr.map(manga => (
      <div>
        <List
          manga={manga}
          key={manga.i}
          onViewDetails={() => this.viewMangaDetails(manga)}
    
        />
      </div>
    ));
    // console.log("isFave: " +this.props.check.faves.includes(this.state.viewManga));
        // console.log("I'm updating");
    return (
      
      <tr className="manga-list">
        <td className="inline">
      <div className="manga-cards">
        {list}

        </div>
        </td>
        <td className="inline">
        <Details 
          manga={this.state.viewManga}
          toggleFave={()=>this.props.toggleFave(this.state.viewManga)}
          toggleWant={()=>this.props.toggleWant(this.state.viewManga)}
          toggleCurrent={()=>this.props.toggleCurrent(this.state.viewManga)}
          isFave={this.props.faves.includes(this.state.viewManga)}
          isWant={this.props.want2Read.includes(this.state.viewManga)}
          onRead={() => this.viewMangaDetails(this.state.viewManga)}
          current={this.state.viewManga}


        />
        </td>
        
      </tr> 

    );
  }
}
