import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pageone">Page One</Link>
                    </li>
                    <li>
                        <Link to="/pagetwo">Page Two</Link>
                    </li>
                    <li>
                        <Link to="/pagethree">Page Three</Link>
                    </li>
                    <li>
                        <Link to="/pagefour">Page Four</Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;