import React, { Component } from 'react';


class App extends Component {
  render() {

    var adjectives = ['Big', 'Cool', 'Happy', 'Nonchalant', 'Pixelated', 'Nerdy', 'Punk', 'Maroon', 'Violet', 'Pastel', 'Red', 'Blue', 'Icey', 'Burnt', 'Minimal', 'Gradient'];
    var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

    var nouns = ['Dog', 'Cat', 'Bird', 'Man', 'Woman', 'Girl', 'Boy', 'Human', 'Flag', 'Video Game', 'Wizard', 'Toast', 'Breakfast', 'Landscape', 'Nature', 'Ocean', 'Pond', 'Lake', 'Ninja', 'Emoji'];
    var noun = nouns[Math.floor(Math.random()*nouns.length)];

    var prompt = adjective + " " + noun;

    return (
      <div className="Home bg-black-05 ma0 pa6-l pa5-m pa4">
        <div className="tc">
          <p className="black-60 lh-copy">Your prompt for today is...</p>
          <h1 className="mt4 mb6-l mb5 f-headline-l f-subheadline-m f1 vampiro">{prompt}</h1>
          <a href="/" className="mv4 mb5 dib center white bg-gold hover-bg-orange bg-animate link pa3 fw4 pointer br2 system">New Prompt Please!</a>
        </div>
      </div>
    );
  }
}

export default App;
