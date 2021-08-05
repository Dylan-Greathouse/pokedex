import React, { Component } from 'react';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    render() { 
        return ( 
            <>
            <ul>
                {this.props.pokedex.map((element) => {
                    return <PokemonItem key={element.id} pokedex={element} />;
                })}
            </ul>
            </>

         );
    }
}
 
export default PokemonList;