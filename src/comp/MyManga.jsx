import React, { Component } from 'react'
export default class MyManga extends Component {
 
    render() {
        console.log(this.props.faves);
        return (
            <div>
                I'm my manga
                <h1>Favorites</h1>
                {this.props.faves.map(manga=>
                    <div>
                        <h3>{manga.t}</h3>
                        <button onClick={()=>this.props.toggleFave(manga)}>Remove From Favorites</button>
                    </div>
                )}
                <h1>currently Reading</h1>
                {this.props.currentRead.map(manga=>
                    <div>
                        <h3>{manga.t}</h3>
                        <button onClick={()=>this.props.toggleCurrent(manga)}>Remove From currently Reading</button>
                    </div>
                )}
                <h1>Want To Read</h1>
                {this.props.want2Read.map(manga=>
                    <div>
                        <h3>{manga.t}</h3>
                        <button onClick={()=>this.props.toggleWant(manga)}>Remove From Want To Read</button>
                    </div>
                )}
            </div>
        )
    }
}
