import React, {Component} from 'react';
import SocialCardItem from './SocialCardItem';

class SocialCardList extends Component{
  render(){
    const cards = this.props.cards.map((card) => (
      <SocialCardItem key={card.id} {...card} />
    ))

    return(
      <div className="cards">
      {cards}
    </div>
    )
  }
}

export default SocialCardList;
