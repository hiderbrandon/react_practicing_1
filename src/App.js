import React from 'react'
import Table from './table'
import Form from "./Form."

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      Characters : []

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

addCharacter = (character) => {
  this.setState({Characters:[...this.state.Characters , character ]})
}

  render() {

    let CharactersData = this.state.Characters

    return (

      <div className='container'>
        <Table 
        CharactersData={CharactersData} 
        removeCharacter={this.removeCharacter } 
        ></Table>
        <Form addCharacter={this.addCharacter}></Form>
      </div>

    )
  }
}


export default App;
