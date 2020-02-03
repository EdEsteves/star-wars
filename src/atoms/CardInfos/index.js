import React from 'react'
import styled from 'styled-components'

const CardInfoDiv = styled.div`
  font-family: 'Press Start 2P', cursive;
  &.card{
    &__infos{
      padding: 20px;
      > div{
        font-size: 9px;
        color: #fff;
        margin-bottom: 20px;
        @media screen and (min-width: 1024px){
          font-size: 14px;
        }
        &:last-of-type{
          margin-bottom: 0;
        }
      }
      &-population{}
    }
  }
`

const CardInfos = ( {infos} = this.props ) => {
    return (
      <CardInfoDiv className="card__infos">
        <div className="card__infos-population">
          <span>Population: {infos.population}.</span>
        </div>
        <div className="card__infos-climate">
          <span>Climate: {infos.climate}.</span>
        </div>
        <div className="card__infos-terrain">
          <span>Terrain: {infos.terrain}.</span>
        </div>
        <div className="card__infos-films">
          <span>Featured in {infos.films.length} films.</span>
        </div>
      </CardInfoDiv>
    )
}

export default CardInfos;