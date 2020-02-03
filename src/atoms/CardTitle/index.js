import React from 'react';
import styled from 'styled-components';

const CardTitleH3 = styled.h3`
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  border-bottom: 2px solid #BC1E22;
  text-align: center;
  padding: 20px;
  margin: 0;
`

const CardTitle = ( {infos} = this.state ) => {
  return (
    <CardTitleH3 className="card__title">
      {infos.name}
    </CardTitleH3>
  )
}

export default CardTitle;