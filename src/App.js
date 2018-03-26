import React, { Component } from 'react';
import SocialCardMaker from './SocialCardMaker';
import SocialCardList from './SocialCardList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards : [],
      nextCardId : 0,
    }
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(socialCard) {
    this.setState((prevState, props) => {
      const newSocialCard = {...socialCard, id: this.state.nextCardId};
      return {
        nextCardId: prevState.nextCardId+1,
        cards : [...this.state.cards, newSocialCard]
      }
    })
  }
  render() {
    return (
      <div>
        <SocialCardList cards={this.state.cards} />
        <SocialCardMaker onSave={this.handleSave} />
      </div>

    );
  }
}

export default App;
