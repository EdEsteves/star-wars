import React, { Component } from './node_modules/react'

import Start from '../../molecules/Start'

export default class Main extends Component{

  render(){
    return(
      <div className='starwars'>
        <Start />
      </div>
    )
  }
}