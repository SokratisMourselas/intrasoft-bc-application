import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/Game';

class App extends Component {


  state = {
    players :[
             {id: 1, name: 'Max', age: 28},
             {id: 2, name: 'John', age: 29},
             {id: 3, name: 'Mazdan', age: 23}
           ],
    games:
         {id: 1, place:'OAKA Stadium', address:'Kifisias Ave.', playersAvailable:[], playersSelected:[] } 
    
 }



  render() {


    let games = null;

    if (this.state.games!=null){
      games = (
        <div>
          <Game
              players = {this.state.players}
              game={this.state.games.place}
          />
        </div>
      )
    }

    return (
      <div className="App">

        {games}

      </div>
    );
  }
}

export default App;
