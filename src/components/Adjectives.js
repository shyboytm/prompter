import React, { Component } from 'react';


class App extends Component {
  render() {

    var adjectives = ['Big', 'Cool', 'Happy', 'Nonchalant', 'Pixelated', 'Nerdy', 'Punk', 'Maroon', 'Violet', 'Pastel', 'Red', 'Blue', 'Icey', 'Burnt', 'Minimal', 'Gradient'];
    var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

    var nouns = ['Dog', 'Cat', 'Bird', 'Man', 'Woman', 'Girl', 'Boy', 'Human', 'Flag', 'Video Game', 'Wizard', 'Toast', 'Breakfast', 'Landscape', 'Nature', 'Ocean', 'Pond', 'Lake', 'Ninja', 'Emoji'];
    var noun = nouns[Math.floor(Math.random()*nouns.length)];

    var prompt = adjective + " " + noun;

    return (
      <div className="Home system pa5 bg-black-05">
        <div className="tc">
          <p className="black-60 lh-copy">Your prompt for today is...</p>
          <h1 className="mt4 f-headline-ns f1 vampiro">{prompt}</h1>
        </div>
      </div>
    );
  }
}

export default App;
