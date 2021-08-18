import React from 'react'
import Table from './table'

class App extends React.Component {
  render() {
    const Characters = [

      {
        name:"hanier",
        job :"coder" ,
      },
  
      {
        name:"brando",
        job:"sinso",
      },
  
      {
        name:"juan",
        job:"sexo",
      },
    ]
    return (
    
        <div className = 'container'>
        <Table Charactersdata={Characters}></Table>
        </div>
      
    )
  }
}


export default App;
