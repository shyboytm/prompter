import React, { Component } from 'react';


class App extends Component {
  render() {

    var prompts = ['Rock', 'Paper', 'Scissor'];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];

    return (
      <div className="Home">
        <h1 className="ttu v-mid tc">{prompt}</h1>
      </div>
    );
  }
}

export default App;
