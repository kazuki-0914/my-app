import React, { Component } from 'react';

export default class Example extends Component {
  constructor() {
    super();

    this._onClick = this._onClick.bind(this);

    this.state = {
      count: 0
    }
  }

  _onClick() {
    this.setState( { count: this.state.count + 1 } );
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this._onClick} >Click</button>
      </div>
      )
  }
}