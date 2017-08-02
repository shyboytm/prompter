import React, { Component } from 'react';

import adjectives from '../data/Adjectives';
import nouns from '../data/Nouns';

class App extends Component {
  render() {

    var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
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
