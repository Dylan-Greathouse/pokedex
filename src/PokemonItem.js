import React, { Component } from 'react';

class PokemonItem extends Component {
    
    render() { 
        return ( 
    <section>
            <img alt={this.props.pokedex.pokemon} 
            width="200"
            height="200"
            src={this.props.pokedex.url_image}
            />
        <li>
            <h3>{this.props.pokedex.pokemon}</h3>
            <p>Type 1: {this.props.pokedex.type_1}</p>
            <p>Atk: {this.props.pokedex.attack}</p>
            <p>Def: {this.props.pokedex.defense}</p>
            <p>S.Atk: {this.props.pokedex.special_attack}</p>
            <p>S.Def: {this.props.pokedex.special_defense}</p>
            <p>Ability: {this.props.pokedex.ability_1}</p>
        </li>
    </section>

         );
    }
}
 
export default PokemonItem;