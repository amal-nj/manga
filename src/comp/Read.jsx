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
        return (
            <div>
                I'm reading
                {this.state.images&&this.state.images.map(image=><img src={`https://cdn.mangaeden.com/mangasimg/${image[1]}`}/>
                )}
            </div>
        )
    }
}
