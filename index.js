import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Welcome extends React.Component
{
  constructor()
  {
    super();
    this.state={
      name:"santosh",
      id:3
    }
  }
  render()
  {
    return(<h3>hello {this.state.name} {this.state.id}</h3>);
  }
}

render(<Welcome />,document.getElementById('root'))
