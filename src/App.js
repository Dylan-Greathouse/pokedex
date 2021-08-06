import { Component } from 'react';
import PokemonList from './PokemonList';

import './App.css';

class App extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc' };

  fetchPokemon = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let searchParams = new URLSearchParams();
    searchParams.set('perPage', 50);
    if (this.state.query) {
     searchParams.set('pokemon', this.state.query);
    }
    if (this.state.sortOrder) {
      searchParams.set('sort', 'pokemon');
      searchParams.set('direction', this.state.sortOrder);
    }
    url = url + `?${searchParams.toString()}`;

    let response = await fetch(url);
    let data = await response.json();
    

    this.setState({ data, loading: false });
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
      {loading && <h3> LOADING!</h3>}
      {!loading && (
        <section className='pokemon-input'>
          <select defaultValue={sortOrder} onChange={this.updateSort}>
          <option value='asc'>Ascending Alphabet</option>
          <option value='desc'>Descending Alphabet</option>
            </select>
        <input onChange={this.updateQuery} type='text'></input>
        <button onClick={this.fetchPokemon}>SEARCH</button>
      <PokemonList pokedex={this.state.data.results} />
      </section>
      )}
      </>

     );
  }
}
 
export default App;
