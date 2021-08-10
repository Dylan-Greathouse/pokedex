import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonInfo extends Component {
    state = { data: {} };

    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data });
    };

    componentDidMount() {
        this.loadData();
    }

    render() { 
        
        const { data } = this.state;
        return ( 
            <section className='pokemon'>
            <h3>{data.pokemon}</h3>
            <p>species: {data.species_id}</p>
        <section className='pokemon-image'>
            <img alt={data.pokemon} 
            width="200"
            height="200"
            src={data.url_image}
            />
        </section>
        <li>
                <section className='pokemon-info'>
                <p>Type 1: {data.type_1}</p>
                <p>Type 2: {data.type_2}</p>
                <p>Egg Group: {data.egg_group_1}</p>
                <p>Ability 1: {data.ability_1}</p>
                <p>Ability 2: {data.ability_2}</p>
                </section>
                <section className='pokemon-stats'>
                 <p>HP: {data.hp}</p>
                 <p>ATK: {data.attack}</p>
                 <p>DEF: {data.defense}</p>
                 <p>SPD: {data.speed}</p>
                 <p>S.ATK: {data.special_attack}</p>
                 <p>S.DEF: {data.special_defense}</p>
                </section>
           
        </li>
    </section>


         );
    }
}
 
export default PokemonInfo;