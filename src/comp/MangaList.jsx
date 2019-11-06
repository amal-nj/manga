import React, { Component } from 'react'
import axios from 'axios';
import List from './List';
import Details from './Details';
export default class MangaList extends Component {
    constructor(){
        super();
        this.viewMangaDetails=this.viewMangaDetails.bind(this);
    }
    state={
        mangaArr:[],
        viewManga: null
    }
    viewMangaDetails(manga){
        this.setState({viewManga: manga})
    }
    componentDidMount(){
        axios.get('https://www.mangaeden.com/api/list/0/')
        .then(res=>{
            console.log(res);
            let mangaArr=[];
            res.data.manga.slice(0,10).forEach((item)=>{
                if(item.c.length&&!item.c.includes("Yaoi")){//yes I actually had to filter it
                    mangaArr.push(item);
                }
            });
            this.setState({mangaArr});
            console.log(mangaArr);
            
        })
        .catch(error=>console.log(error));
    }
    render() {
        var list=this.state.mangaArr.map(manga=>
            <div>
            <List manga={manga} key={manga.i} onViewDetails={()=>this.viewMangaDetails(manga)}/>
            </div>
       )
        return (
            <div>
                I'm manga list
                <Details manga={this.state.viewManga} toggleFave={this.toggleFave} toggleWant={this.toggleWant} toggleCurrent={this.toggleCurrent}/>
                {list}
            </div>
        )
    }
}
