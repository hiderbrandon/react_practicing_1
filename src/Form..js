import React, { Component } from "react"


class Form extends Component {

    constructor(props){
        super(props)
    
        this.initialState = {
            name: "",
            job: ""
        }
        this.state =  this.initialState
    }

    handleChange = (event) => {

        const { name , value} = event.target;
        this.setState({[name]: value});

    }

    handlesubming = (event) => {
        this.props.addCharacter(this.state );
        console.log(event);
        event.preventDefault();
        
    }

    render() {

        let { name, job } = this.state;

        return(
            <form onSubmit={(event) => this.handlesubming(event)} id="add" >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                   onChange={this.handleChange}/>

                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}/>
                <button type="submit" >add</button>
            </form>
        )
    }
}

export default Form