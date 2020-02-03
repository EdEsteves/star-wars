import React from 'react'
import Card from '../../Molecules/Card'
import ActionButtons from '../../Molecules/ActionButtons'

const Game = ({ infos, count, action } = this.props) =>{
  return (
    <div>
      <Card infos={infos} />
      <ActionButtons count={count} action={action} />
    </div>   
  )
}

export default Game;