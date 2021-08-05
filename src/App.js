import { Component } from 'react';
import PokemonList from './PokemonList';

import './App.css';

class App extends Component {
  state = { data: [], loading: true };

  fetchData = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);

    this.setState({ data, loading: false });
  };

  componentDidMount() {
    this.fetchData();
  }


  render() { 
    const { loading } = this.state;
    return ( 
      <>
      <h1>Pokedex</h1>
      {loading && <h3> LOADING!</h3>}
      {!loading && <PokemonList pokedex={this.state.data} />}
      </>

     );
  }
}
 
export default App;
