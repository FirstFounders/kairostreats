import React, { Component } from 'react'
import "./Cartform.css"


class Cartform extends Component {

    state = {
        name: "",
        email: "",
        phone1: "",
        phone2: "",
        address: ""
    }

    handleChange = (e) => {
        //update state
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className= "formContainer">
                <form onSubmit= {this.handleSubmit}>

                    <div className= "inputField">
                        <label htmlFor="name">Name</label> <br />
                        <input type= "text" id= "name" onChange= {this.handleChange} required />
                    </div>

                    <div className= "inputField">
                        <label htmlFor="email">Email Address</label> <br />
                        <input type= "email" id= "email" onChange= {this.handleChange} required />
                    </div>

                    <div className= "inputField">
                        <label htmlFor="phone1">Phone Number</label> <br />
                        <input type= "tel" id= "phone1" onChange= {this.handleChange} required />
                    </div>

                    <div className= "inputField">
                        <label htmlFor="phone2">Phone Number 2</label> <br />
                        <input type= "tel" id= "phone2" onChange= {this.handleChange} required />
                    </div>

                    <div className= "inputField">
                        <label htmlFor="address">Delivery Address</label> <br />
                        <input type= "text" id= "address" onChange= {this.handleChange} required />
                    </div>

                    <div className= "submitField">
                        <button>Proceed</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Cartform