import { render } from '@testing-library/react'
import React from 'react'

const TableHeader = ( ) => {

    return(

        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>

    )
}

const TableBody = (props) => {
   
    let Characters = props.Charactersdata
  
    return (

        <tbody>
          {
            Characters.map((char , index)=>{

             return(
              <tr key={index}>
                <th>{char.name}</th>
                <th>{char.job}</th>
              </tr>

             )}
            )
          }
        </tbody>
    )


}

class Table extends React.Component {
    render() {
      const characters = this.props.Charactersdata 
        return (
          <table>
            <TableHeader/>
            <TableBody Charactersdata={characters} />
            
          </table>
        )
      }
}

export default Table