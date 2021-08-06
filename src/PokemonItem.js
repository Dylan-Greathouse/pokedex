import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
    
    render() { 
        return ( 
    <section className='pokemon'>
        <section className='pokemon-image'>
            <h3>{this.props.pokedex.pokemon}</h3>
            <img alt={this.props.pokedex.pokemon} 
            width="200"
            height="200"
            src={this.props.pokedex.url_image}
            />
        </section>
        <li>
                <section className='pokemon-info'>
                <p>Type: {this.props.pokedex.type_1}</p>
                <p>Ability: {this.props.pokedex.ability_1}</p>
                <p>species: {this.props.pokedex.species_id}</p>
                </section>
                <section className='pokemon-stats'>
                 <p>Atk: {this.props.pokedex.attack}</p>
                 <p>Def: {this.props.pokedex.defense}</p>
                 <p>S.Atk: {this.props.pokedex.special_attack}</p>
                 <p>S.Def: {this.props.pokedex.special_defense}</p>
                </section>
           
        </li>
    </section>

         );
    }
}
 
export default PokemonItem;