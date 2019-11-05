import React, { Component } from 'react'

export default class List extends Component {
    render() {
        console.log("https://cdn.mangaeden.com/mangasimg/"+this.props.manga.im);

        return (
            <div>
                I'm list
                <h1>{this.props.manga.a}</h1>
                <img src={"https://cdn.mangaeden.com/mangasimg/"+this.props.manga.im}/>
            </div>
        )
    }
}
