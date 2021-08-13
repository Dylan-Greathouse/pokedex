import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <header>
                <h1>Dylan's Pokedex</h1>
                <div className="links">
                    <NavLink className='home' exact to="/">
                        Home
                    </NavLink>
                    <NavLink className='pokemon-list' to="/pokemon">Pokemon List</NavLink>
                </div>
            </header>
        );
    }
}

export default Header;