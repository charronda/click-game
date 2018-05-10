import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import './App.css';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import coffee from "./coffee.json";


class App extends Component {
  state={
    message: "Click an image to begin!",
    score: 0,
    topScore: 0,
    coffee: [],
  };

  clickCard = card => {
    let coffe = this.state.coffee;
    let score = this.state.score;
    // If we already clicked this card...
    if (coffee[card.id]) {
      this.setState({
        message: "You already guessed that! Starting over!",
        topScore: Math.max(this.state.score, this.state.topScore),
        coffee: [],
        score: 0,

      })

    } else {
      [card.id] = true;
      this.setState({
        message: "Good Guess!",
        cofee: coffee,
        score: ++score,

      })
    }
  };

  // Render the page
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />
        <Jumbotron />

          <Wrapper>
            {coffee
              .sort((a, b) => 0.5 - Math.random())
              .map(randomCard => (
                <CharacterCard
                  clickCard={this.clickCard}
                  id={randomCard.id}
                  key={randomCard.id}
                  image={randomCard.image} />))}
          </Wrapper>


      </div>
    );
  }
}

export default App;
