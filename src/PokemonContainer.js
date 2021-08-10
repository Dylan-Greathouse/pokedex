import { Component } from 'react';
import PokemonList from './PokemonList';
import Loader from "react-loader-spinner";


import './App.css';

class PokemonContainer extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc', page: 1 };

  fetchPokemon = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/';
    
    let searchParams = new URLSearchParams();
    searchParams.set('page', this.state.page);
    searchParams.set('perPage', 20);
    
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

  nextPage = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.fetchPokemon();
  };

  nextTenPages = async () => {
    await this.setState({ page: this.state.page + 10 });
    this.fetchPokemon();
  };

  prevPage  = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.fetchPokemon();
  };

  prevTenPages = async () => {
    await this.setState({ page: this.state.page - 10 });
    this.fetchPokemon();
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
        <button className='search' onClick={this.fetchPokemon}></button>
        </section>
        <section className='pages'>
        {this.state.page > 10 &&(
            <button onClick={this.prevTenPages}>Back 10</button>
          )}
          {this.state.page > 1 &&(
            <button onClick={this.prevPage}>Previous Page</button>
          )}
          {this.state.page < 41 &&(
            <button onClick={this.nextPage}>Next Page</button>
          )}
          {this.state.page < 41 &&(
            <button onClick={this.nextTenPages}>Forward 10</button>
          )}
        </section>
        Page: {this.state.page}
        <PokemonList pokedex={this.state.data.results} />
      </section>
      )}
      </>
    );
  }
}
 
export default PokemonContainer;