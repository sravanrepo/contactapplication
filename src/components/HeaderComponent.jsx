import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <nav className="navbar navbar-expand-md navbar-dark bg-blue">
                        <div><a className= "navbar-black navbar-brand">Contact Application</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;