import React, { Component } from 'react';

import adjectives from '../data/Adjectives';
import nouns from '../data/Nouns';

class App extends Component {
  render() {

    var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
    var noun = nouns[Math.floor(Math.random()*nouns.length)];

    var prompt = adjective + " " + noun;

    return (
      <div className="Home flex flex-row-l flex-column wiggle ma0 archivo">
        <div className="flex flex-column order-1-l order-2 br b--black-05 vh-100-l w-25-l w-100 pa4">
          <h1 className="f2 pb4 vampiro gold bb b--cream">
            Prompter
          </h1>
          <h2 className="f4 fw6 mv0 lh-title">What is this?</h2>
          <p className="black-60 lh-copy f6 measure">
            Prompter is a tool for artists and illustrators that creates randomized prompts to use.
            Having prompts provided for you is a great way to get right to practicing, whether you
            use this for daily, weekly, or even a one off practice time.
          </p>
        </div>
        <div className="flex flex-column items-center order-2-l order-1 vh-100-l w-75-l w-100 tc wiggle bg-cream pv6 ph3">
            <p className="mv0 pv4-ns pv2 black-60 lh-copy">Your prompt for today is...</p>
            <h1 className="mv0 pv4-ns pv2 f-subheadline-ns f1 vampiro">{prompt}</h1>
            <a href="/" className="f6 ttu tracked mv4 mb5 dib center white bg-gold hover-bg-orange bg-animate link pa3 fw6 pointer br2">
              New Prompt 🎉
            </a>
        </div>
      </div>
    );
  }
}

export default App;
