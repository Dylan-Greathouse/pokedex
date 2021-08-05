import React, { Component } from 'react';
import PokemonItem from './PokemonItem.js';
import './PokemonList.css';
class PokemonList extends Component {
    render() { 
        return ( 
            <>
            <ul>
                {this.props.pokedex.map((element) => {
                    return <PokemonItem key={element.pokemon} pokedex={element} />;
                })}
            </ul>
            </>

         );
    }
}
 
export default PokemonList;