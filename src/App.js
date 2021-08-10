import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import PokemonInfo from './PokemonInfo.js'

import Home from './Home.js';
import PokemonContainer from './PokemonContainer.js';

class App extends Component {
    render() {
        return (
            <section className="app">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        
                        <Route path="/pokemon/:id" component={PokemonInfo} />
                        
                        <Route path="/pokemon" component={PokemonContainer} />     
                    
                        <Route path="/" component={Home} />
                   
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}
export default App;
