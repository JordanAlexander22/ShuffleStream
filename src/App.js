import React from 'react';


import {NavBar} from './components'

export default class App extends React.Component {
  constructor() {
    super()
    this.state= {
      name: 'jordan'
    }
  }
  render(){
    return (
     <div>
        <h2>welcome {this.state.name}</h2>
        <NavBar/>
     </div> 
   
    )
  }
}
