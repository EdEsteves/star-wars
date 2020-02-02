import React from 'react'

const CardInfos = ( {infos} = this.state ) => {
    return (
      <div className="card__infos">
        <div className="card__infos-population">
          <span>Population: {infos.population}</span>
        </div>
        <div className="card__infos-climate">
          <span>Climate: {infos.climate}</span>
        </div>
        <div className="card__infos-terrain">
          <span>Terrain: {infos.terrain}</span>
        </div>
        <div className="card__infos-films">
          <span>Featured in {infos.films.length} films</span>
        </div>
      </div>
    )
}

export default CardInfos;