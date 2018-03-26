import React, {Component} from "react";

class SocialCardItem extends Component {
  render() {
    const {name, website, color, about, imgUrl} = this.props;
    const boxStyle = {
    width: '320px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    border: "10px solid red",
    width: '400px'
  }
    return(
      <div style={boxStyle} className="social-card-item">
        <h1>Hi my name is {name} from <a href={website}>{website}</a></h1>
        <p>{about}</p>
        <img src={imgUrl} />
      </div>
    )
  }
}

export default SocialCardItem;
