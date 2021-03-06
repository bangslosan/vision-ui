import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchBarText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({searchBarText: event.target.value});
  }
  render() {
    return (
      <div className="center-home-content">
        <h1 id="homeTitle">how's my media</h1>
        <input id="homeSearch" type="text" value={this.state.searchBarText} placeholder="search for a user" onChange={this.handleChange}/>
        <Link to={`/results/${this.state.searchBarText}`}><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
      </div>
    )
  }
}
