import { Component } from 'react';
import PokemonList from './PokemonList';
import Loader from "react-loader-spinner";

import './App.css';

class App extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc' };

  fetchPokemon = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let searchParams = new URLSearchParams();
    searchParams.set('perPage', 25);
    if (this.state.query) {
     searchParams.set('pokemon', this.state.query);
    }
    if (this.state.sortOrder) {
      searchParams.set('sort', 'species_id');
      searchParams.set('direction', this.state.sortOrder);
    }
    url = url + `?${searchParams.toString()}`;

    let response = await fetch(url);
    let data = await response.json();
    
    setTimeout(() => {
      this.setState({ data, loading: false });

    }, 3000)
  };

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  updateSort = (e) => {
    this.setState({ sortOrder: e.target.value });
  };

  componentDidMount() {
    this.fetchPokemon();
  }


  render() { 
    const { loading, sortOrder } = this.state;
    return ( 
      <>
      <h1>Pokedex</h1>
      <section className='loading'>
      {loading && <Loader
        type="Rings"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />}
      </section>
      {!loading && (
        <section className='pokemon-input'>
          <section className='pokemon-sort'>
          <select defaultValue={sortOrder} onChange={this.updateSort}>
          <option value='asc'>Ascending Pokemon</option>
          <option value='desc'>Descending Pokemon</option>
            </select>
        <input onChange={this.updateQuery} placeholder='search through pokedex' type='text'></input>
        </section>
        <section className='btn'>
        <button onClick={this.fetchPokemon}></button>
        </section>
        <PokemonList pokedex={this.state.data.results} />
      </section>
      )}
      </>

     );
  }
}
 
export default App;
