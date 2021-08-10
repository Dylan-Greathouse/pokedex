import React, { Component } from 'react';
import './Home.css'
import background from './assets/10767988.jpg'
class Home extends Component {
    state = {};
    render() {
        return (
            <>
        <h1>Home Page</h1>
        <section className='home-image'>
          <img className='pokemon-wallpaper' src={background}
          height='600'
           alt='background' />  
        </section>
            </>
    );
}
}

export default Home;