import React, { Component } from 'react';
import PokemonCard from './PokemonCard.js';
import './PokemonList.css';
class PokemonList extends Component {
    render() { 
        return ( 
            <>
            <ul>
                {this.props.pokedex.map((element) => {
                    return <PokemonCard key={element.pokemon} pokedex={element} />;
                })}
            </ul>
            </>

         );
    }
}
 
export default PokemonList;