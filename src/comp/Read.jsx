import React, { Component } from 'react';
import axios from 'axios';
export default class Read extends Component {
    state={
        images:null
    }
    ;
    componentDidMount(){
        axios.get(`https://www.mangaeden.com/api/chapter/${this.props.match.params.id}/`)
        .then(res=>{
            console.log(res);
            this.setState({images:res.data.images.reverse()});
        })
        .catch(error=>console.log(error));
    }
    render() {
        console.log("images");
        console.log(this.images);
        let isFave=this.props.faves.includes()
        return (
            <div>
                I'm reading
                <button>{}</button>
                {this.state.images&&this.state.images.map((image,i)=><img src={`https://cdn.mangaeden.com/mangasimg/${image[1]}`} key={i}/>
                )}
            </div>
        )
    }
}
