import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/Game';
import intrasoft_thumb from './intrasoft-thumb.jpg';

class App extends Component {


  state = {
    players :[
             {id: 1, name: 'Max', age: 28},
             {id: 2, name: 'John', age: 29},
             {id: 3, name: 'Mazdan', age: 23}
           ],
    games:
         {id: 1,vs: "TrenOSE", place:'OAKA Stadium', date: '20-01-2019', address:'Kifisias Ave.', playersAvailable:[], playersSelected:[] } 
    
 }



  render() {


    let games = null;

    if (this.state.games!=null){
      games = (
        <div>
          <Game
              players = {this.state.players}
              game={this.state.games}
          />
        </div>
      )
    }

    return (
      <div className="App">

        <img style={{height:100, width:100}} name='intrasoft' src={intrasoft_thumb}></img>
        {games}

      </div>
    );
  }
}

export default App;
