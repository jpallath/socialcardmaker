import React, {Component} from "react";

// on inputs we still need value {name} and onchange {this.handleChange}

class SocialCardMaker extends Component{
  constructor(props){
  super(props);
  this.state = {
      name: '',
      website: '',
      color: '',
      about: '',
      imgUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      name:'',
      website:'',
      color:'',
      about:'',
      imgUrl:''
    })
  };

  render(){
    const {name, website, color, about, imgUrl} = this.state;
    return(
      <div className="social-card-maker">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            autoComplete="off"
            id="name"
            name="name"
            type="text"
            value = {name}
            onChange = {this.handleChange}
           />
          <label htmlFor="website">Website</label>
          <input
            autoComplete="off"
            id="website"
            name="website"
            type="text"
            value={website}
            onChange = {this.handleChange}
           />
          <label htmlFor="about">About You</label>
          <textarea
            name="about"
            id="about"
            type="text"
            rows="5"
            cols="50"
            autoComplete="off"
            value={about}
            onChange={this.handleChange}
          />
          <label htmlFor="image">Image</label>
          <input
            autoComplete="off"
            id="image"
            name="imgUrl"
            type="text"
            value={imgUrl}
            onChange={this.handleChange}
           />
          <label htmlFor="color">Color</label>
          <input
            autoComplete="off"
            id="color"
            name="color"
            type="text"
            value={color}
            onChange={this.handleChange}
           />
           <button>Set Up</button>
        </form>
      </div>
    )
  }
}

export default SocialCardMaker;
