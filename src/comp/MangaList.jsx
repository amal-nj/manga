import React, { Component } from 'react'
import axios from 'axios';
import List from './List';
export default class MangaList extends Component {
    state={
        mangaArr:[]
    }
    componentDidMount(){
        axios.get('https://www.mangaeden.com/api/list/0/')
        .then(res=>{
            console.log(res);
            let mangaArr=[];
            res.data.manga.slice(0,100).forEach((item)=>{
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
        var list=this.state.mangaArr.map(manga=><List manga={manga} key={manga.i}/>)
        return (
            <div>
                I'm manga list
                {list}
            </div>
        )
    }
}
