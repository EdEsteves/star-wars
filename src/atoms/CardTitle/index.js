import React from 'react'

const CardTitle = ( {infos} = this.state ) => {
  console.log(infos)
  return (
    <h3 className="card__title">
      {infos.name}
    </h3>
  )
}

export default CardTitle;