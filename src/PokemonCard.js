import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonCard extends Component {
   
    render() { 
        const { pokedex } = this.props;
        return ( 
            <div className='card'>
                <Link to={`/pokemon/${this.props.pokedex._id}`}>
                    <h3>{pokedex.pokemon}</h3>
                    <img src={pokedex.url_image} height='200' alt='pokemon' />
                </Link>
            </div>

);
}
}
 
export default PokemonCard;