import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state= {

        }
    }
    render() {
        return (
            <div>
               <footer className="footer">
                   <span>All Rights Reserved 2022 @Contact Application</span>
                   </footer> 
            </div>
        );
    }
}

export default FooterComponent;