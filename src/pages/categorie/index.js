import React, { Component } from 'react'
import api from '../../services/api'

import LoadingYoda from '../../atoms/loadingyoda'
import Game from '../../organisms/game'

export default class Categorie extends Component{

  state = {
    infos: [],
    count: '',
    loading: false
  }

  componentDidMount = () =>{
    this.getCategorieCount();
  }

  getCategorieCount = async () => {
    const response = await api.get(`planets`);
    const data = response.data;
    this.getCategorieRandomInfo(data.count)
  }

  getCategorieRandomInfo = async (count, fromComp = false) => {
    if(fromComp){
      this.setState({loading: false})
    }
    const random = Math.floor(Math.random() * (count - 1) + 1);
    const response = await api.get(`planets/${random}`);
    const infos = response.data
    this.setState({infos: infos, count: count, loading: true })
  }

  render(){
    const animationStyle = {
      name: 'spin',
      duration: '1s',
      timing: 'linear',
      count: 'infinite'
    }
    const { infos, loading, count } = this.state
    return(
      <div className='starwars'>
        {loading ? <Game infos={infos} count={count} action={this.getCategorieRandomInfo} /> : <LoadingYoda animation={animationStyle} />}
      </div>
    )
  }
}