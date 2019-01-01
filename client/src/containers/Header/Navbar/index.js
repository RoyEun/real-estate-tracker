import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar-container">
              <main>
                <nav>
                    <ul className="twitter" role="navigation">
                        <li><i className="fa fa-home"></i>Home</li>
                        <li><i className="fa fa-bell"></i>Notifications</li>
                        <li><i className="fa fa-envelope"></i>Messages</li>
                        <li className="twitter-bird"><i className="fab fa-twitter"></i></li>
                        <li><form><input placeholder="search twitter"/><i className="fa fa-search"></i></form></li>
                        <li><i className="fas fa-user-circle"></i></li>
                        <li><button>tweet</button></li>
                    </ul>
                </nav>
              </main>
            </div>
        )
    }
}

export default Navbar;

