import { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <h1>Dylan's Pokedex</h1>
                <div className="links">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <NavLink to="/pokemon">Pokemon List</NavLink>
                </div>
            </header>
        );
    }
}

export default Header;