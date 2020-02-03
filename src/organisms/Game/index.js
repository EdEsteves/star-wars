import React from './node_modules/react'
import Card from '../../molecules/card'
import ActionButtons from '../../molecules/actionButtons'

const Game = ({ infos, count, action } = this.props) =>{
  return (
    <div>
      <Card infos={infos} />
      <ActionButtons count={count} action={action} />
    </div>   
  )
}

export default Game;