import React, { Component } from 'react';

class PokemonItem extends Component {
    
    render() { 
        return ( 
    <section>
        <li>
            <h3>{this.props.pokedex.pokemon}</h3>
            <p>{this.props.pokedex.type_1}</p>
            <p>{this.props.pokedex.type_2}</p>
            <p>{this.props.pokedex.ability_1}</p>
        </li>
    </section>

         );
    }
}
 
export default PokemonItem;