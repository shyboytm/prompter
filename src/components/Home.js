import React, { Component } from 'react';

import adjectives from '../data/Adjectives';
import nouns from '../data/Nouns';

class App extends Component {
  render() {

    var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
    var noun = nouns[Math.floor(Math.random()*nouns.length)];

    var prompt = adjective + " " + noun;

    return (
      <div className="Home wiggle ma0">
        <div className="tc wiggle bg-cream pv5">
          <p className="mv0 pv4-ns pv3 black-60 lh-copy">Your prompt for today is...</p>
          <h1 className="mv0 pv4-ns pv3 f-headline-l f-subheadline-m f1 vampiro">{prompt}</h1>
          <a href="/" className="mv4 mb5 dib center white bg-gold hover-bg-orange bg-animate link pa3 fw4 pointer br2 system">New Prompt Please!</a>
        </div>
        <div className="w-75-l w-90 center pv5">
          <h2 className="f3 fw7">How Do I Use This?</h2>
          <p></p>
        </div>
      </div>
    );
  }
}

export default App;
