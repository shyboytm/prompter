import React, { Component } from 'react';

import adjectives from '../data/Adjectives';
import nouns from '../data/Nouns';

class App extends Component {
  render() {

    var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
    var noun = nouns[Math.floor(Math.random()*nouns.length)];

    var prompt = adjective + " " + noun;

    return (
      <div className="flex flex-row-l flex-column wiggle ma0 archivo">
        <div className="flex flex-column order-1-l order-2 br b--black-05 vh-100-l w-25-l w-100 pa4">
          <div className="flex-auto">
            <h1 className="f2 pb4 vampiro gold bb b--cream">
              Prompter
            </h1>
            {/* <h2 className="ttu tracked fw6 f7 mv0 lh-title">What is this?</h2> */}
            <p className="black-60 lh-copy f6 measure">
              Prompter is a tool that creates randomized prompts for artists and illustrators to use.
              Having prompts provided for you is a great way to challenge yourself and get right to
              practicing, whether you use this for daily, weekly, or even a one off practice.
            </p>
            <p className="black-60 lh-copy f6 measure mb5">
              I'd love to see what you make with these prompts. Be sure to tag me <a href="https://twitter.com/fromcortes" className="link gold hover-orange f6">@fromcortes</a> on Twitter
              or Instagram!
            </p>
          </div>
          <div className="flex items-center content-end">
            <p className="flex-auto ttu tracked fw6 f7 mv0 black-30 lh-copy mr2">
              Share <br />
              Prompter
            </p>
            <div className="flex">
              <div className="w2 h2 dib mr2 dim">
                <a className="social-icon" target='_blank' href="" title="Twitter"><svg viewBox="0 0 512 512" fill="#1da1f2"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg></a>
              </div>
              <div className="w2 h2 dib mr2 dim">
                <a className="social-icon" target='_blank' href="" title="Facebook"><svg viewBox="0 0 512 512" fill="#3b5998"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg></a>
              </div>
              <div className="w2 h2 dib dim">
                <a className="social-icon" target='_blank' href="" title="GooglePlus"><svg viewBox="0 0 512 512" fill="#dd4b39"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3"/></svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-column items-center order-2-l order-1 vh-100-l w-75-l w-100 tc wiggle bg-cream pv7-l pa5">
          <p className="mv0 f6 black-60 lh-copy">Your prompt for today is...</p>
          <h1 className="mv0 pt2 pb4 f-subheadline-ns f1 vampiro">{prompt}</h1>
          <a href="/" className="ttu tracked fw6 f7 mv4 mb5 dib center white bg-gold hover-bg-orange bg-animate link pv3 ph4 pointer br-pill">
            Refresh
          </a>
        </div>
      </div>
    );
  }
}

export default App;
