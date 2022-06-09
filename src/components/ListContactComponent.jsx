import React, { Component } from 'react';
import ContactService from '../services/ContactService';

class ListContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: []
        }
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.viewContact = this.viewContact.bind(this);

    }
    deleteContact(id)
    {
        ContactService.deleteContact(id).then( res => {
            this.setState({contact: this.state.contacts.filter(contact => contact.id !== id)});
        });
    }
    viewContact(id){
        this.props.history.push(`/view-contact/${id}`);
    }
    
    editContact(id){
        this.props.history.push(`/update-contact/${id}`);
    }
    componentDidMount() {
        ContactService.getContacts().then((res) => {
            this.setState({ contacts: res.data });
        });
    }

    addContact() {
        this.props.history.push('/add-contact');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Contact List</h2>
                <div>
                    <button className = "btn btn-primary" onClick={this.addContact}> Add Contact </button>
                </div>
                <div class="space">
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email Id</th>
                                <th> Age</th>
                                <th> Gender</th>
                                <th> Phone Number</th>
                                <th> Actions</th>
                            </tr>
                        </thead>


                        <tbody>
                          {
                            this.state.contacts.map(
                                contact =>
                                    <tr key={contact.id}>
                                        <td> {contact.firstName}</td>
                                        <td> {contact.lastName}</td>
                                        <td> {contact.emailId}</td>
                                        <td> {contact.age}</td>
                                        <td> {contact.gender}</td>
                                        <td> {contact.phoneNumber}</td>
                                        <td>
                                            <button onClick={() => this.editContact(contact.id)}className ="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}}onClick={() => this.deleteContact(contact.id)}className ="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}}onClick={() => this.viewContact(contact.id)}className ="btn btn-info">View</button>
                                        </td>
                                    </tr>
                              )
                           }
                     </tbody>
                    </table>
            
                </div>
            </div>
        )
    }
    
}

export default ListContactComponent;