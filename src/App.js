import React from 'react'
import Table from './table'

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      Characters : [
        {
          name:"hider",
          job:"carnitas"
        },
        {
          name:"fuam",
          job:"paisa"
        }

      ]

    }

  }// constructor


removeCharacter=( index )=>{

  this.setState(
    {
      Characters:this.state.Characters.filter((Character , i ) => {

        return i!==index

      })
    }
  )

}


  render() {
    
    let CharactersData = this.state.Characters

    return (

      <div className='container'>
        <Table CharactersData={CharactersData} removeCharacter={this.removeCharacter } ></Table>
      </div>

    )
  }
}


export default App;
