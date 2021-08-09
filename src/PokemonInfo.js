import React, { Component } from 'react';

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
                <p>Type: {data.type_1}</p>
                <p>Ability: {data.ability_1}</p>
                </section>
                <section className='pokemon-stats'>
                 <p>Atk: {data.attack}</p>
                 <p>Def: {data.defense}</p>
                 <p>S.Atk: {data.special_attack}</p>
                 <p>S.Def: {data.special_defense}</p>
                </section>
           
        </li>
    </section>


         );
    }
}
 
export default PokemonInfo;