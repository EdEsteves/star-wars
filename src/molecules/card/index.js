import React from 'react'

import CardTitle from '../../atoms/CardTitle'
import CardInfos from '../../atoms/CardInfos'

import './styles.scss'

const Card = ( { infos } = this.props) => {
    return (
      <div className="card">
        <CardTitle infos={infos}/>
        <CardInfos infos={infos}/>
      </div>
    )
}

export default Card;