import { Component } from 'react';
import PokemonList from './PokemonList';

import './App.css';

class App extends Component {
  state = { data: [], loading: true, query: null };

  fetchPokemon = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (this.state.query) {
      url = url + `?search=${this.state.query}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    

    this.setState({ data, loading: false });
  };

  updateQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  componentDidMount() {
    this.fetchPokemon();
  }


  render() { 
    const { loading } = this.state;
    return ( 
      <>
      <h1>Pokedex</h1>
      {loading && <h3> LOADING!</h3>}
      {!loading && <PokemonList pokedex={this.state.data.results} />}
      </>

     );
  }
}
 
export default App;
