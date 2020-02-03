import React from 'react'
import styled from 'styled-components';

import CardTitle from '../../Atoms/CardTitle'
import CardInfos from '../../Atoms/CardInfos'


const CardDiv = styled.div`
  border: 1px solid #BC1E22;
  margin-bottom: 20px;
  margin-top: 30px;
  @media screen and (min-width: 1024px){
    margin-top: 0px;
  }
`

const Card = ( { infos } = this.props) => {
  return (
    <CardDiv className="card">
      <CardTitle infos={infos}/>
      <CardInfos infos={infos}/>
    </CardDiv>
  )
}

export default Card;