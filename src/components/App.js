import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Artist from './Artist';
import Tracks from './Tracks';

class App extends Component {

  state = {res1: null,res2: null};

  render() {
    return (
      <div className="main">

        <div className="AppHeader">
          <h2>Music Master</h2>

          <div className="input-text">
            <input id="singer" placeholder="Enter The Singer Name"/>
            <button onClick = {this.handelclick} >Search</button>
          </div>
          <Artist artist={this.state.res1} />
        </div>

        <div className="AppBody">
          <Tracks tracks = {this.state.res2} />
        </div>

      </div>
    );
  }

  handelclick = () => {
    let singerName = document.getElementById('singer').value;
    
    fetch('https://spotify-api-wrapper.appspot.com/artist/'+singerName).then( ( response ) => {
        return response.json();
    }).then( (res) => {
        let result = {name:res.artists.items[0].name, id:res.artists.items[0].id, image:res.artists.items[0].images[0]['url']}
        this.setState({res1 : result});

        fetch('https://spotify-api-wrapper.appspot.com/artist/'+this.state.res1.id+'/top-tracks').then( (response) =>{
          return response.json();
        }).then( ( res ) => {
            this.setState({res2 : res.tracks});
        });
    })
  }
}

export default App;
