import React, { Component } from 'react';
import ContactService from '../services/ContactService';
import icon from "../images/img_avatar.png";
// import iconf from "../images/image_avatar2.png";
class ViewContactComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            id: this.props.match.params.id,
            contact: {}

        }
    }
    componentDidMount(){
        ContactService.getContactById(this.state.id).then( res => {
            this.setState({contact: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className ="card col-md-6  offset-md-3">
                    <h3 className ="text-center">View Contact Details</h3>
                     
                           
                            
                    
                    <div className ="card-body">

                    <img src= {icon} className="contactIcon" alt= "avatar" ></img>

                    {/* <img src= {icon} className="contactIcon" alt= "avatar" ></img> */}
                        
                        <div>
                            <label> First Name:  </label>
                            {this.state.contact.firstName}
                        </div>
                        <div>
                            <label> Last Name: </label>
                            { this.state.contact.lastName}
                        </div>
                        <div>
                            <label> Email Id: </label>
                            { this.state.contact.emailId}
                        </div>
                        <div>
                            <label> Gender: </label>
                            { this.state.contact.gender}
                        </div>
                        <div>
                            <label> Age: </label>
                             { this.state.contact.age}
                        </div>
                        <div>
                            <label> Phone Number: </label>
                            { this.state.contact.phoneNumber}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewContactComponent;