import React from 'react'
import Card from '../../molecules/card'
import ActionButtons from '../../molecules/actionbuttons'

const Game = ({ infos, count, action } = this.props) =>{
  return (
    <div>
      <Card infos={infos} />
      <ActionButtons count={count} action={action} />
    </div>   
  )
}

export default Game;