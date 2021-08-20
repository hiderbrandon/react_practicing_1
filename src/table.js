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
   
    let Characters = props.CharactersData
    const removeCharacter = props.removeCharacter
    return (

        <tbody>
          {
            Characters.map((char , index)=>{

             return(
               <tr key={index}>
                 <td>{char.name}</td>
                 <td>{char.job}</td>
                 <td><button onClick= { ()=> removeCharacter(index)  } >erase</button></td>
               </tr>
              

             )}
            )
          }
        </tbody>
    )


}

class Table extends React.Component {
    render() {
      const characters = this.props.CharactersData 
      const removeCharacter = this.props.removeCharacter
        return (
          <table>
            <TableHeader/>
            <TableBody CharactersData={characters} removeCharacter={removeCharacter } />
            
          </table>
        )
      }
}

export default Table