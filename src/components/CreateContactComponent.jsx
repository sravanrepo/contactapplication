import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class CreateContactComponent extends Component {
    constructor(props){
        super(props)
            this.state = {
                firstName: '',
                lastName: '',
                emailId: '',
                age: '',
                gender: '',
                phoneNumber:''
            }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    saveContact = (e) => { 
        e.preventDefault();
        let contact ={firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, gender: this.state.gender, age: this.state.age, phoneNumber:  this.state.phoneNumber};
        console.log('employee =>' +JSON.stringify(contact));

        ContactService.createContact(contact).then( res => {
            this.props.history.push('/contacts');
        });
    }
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
    }
    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }
    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    }
    cancel(){
        this.props.history.push('/contacts');
    }
    
    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Contact</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label>First Name : </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                </div>
                                <div className = "form-group">
                                    <label>Last Name : </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>

                                </div>
                                <div className = "form-group">
                                    <label>Email Id : </label>
                                    <input placeholder="Email Id" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler}/>

                                </div>
                                <div className = "form-group">
                                    <label>Gender : </label>
                                    <input placeholder="Gender" name="gender" className="form-control"
                                        value={this.state.gender} onChange={this.changeGenderHandler}/>

                                </div>
                                <div className = "form-group">
                                    <label>Age : </label>
                                    <input placeholder="Age" name="age" className="form-control"
                                        value={this.state.age} onChange={this.changeAgeHandler}/>

                                </div>
                                <div className = "form-group">
                                    <label>Phone Number : </label>
                                    <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                        value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>

                                </div>
                                <br></br>
                                
                                <button className= "btn btn-success" onClick={this.saveContact}>Save</button>
                                <button className= "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateContactComponent;