import React, { Component } from 'react'
import api from '../../services/api'

import Card from '../../molecules/card'
import LoadingYoda from '../../atoms/LoadingYoda'

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

  getCategorieRandomInfo = async (count) => {
    const random = Math.floor(Math.random() * (count - 1) + 1);
    const response = await api.get(`planets/${random}`);
    const infos = response.data
    this.setState({infos: infos, count: count, loading: true })

    console.log( Math.floor(Math.random() * (count - 1) + 1))
  }

  render(){
    const animationStyle = {
      name: 'spin',
      duration: '1s',
      timing: 'linear',
      count: 'infinite'
    }
    const { infos, loading } = this.state
    return(
      <div className='starwars__card'>
        {loading ? <Card infos={infos} /> : <LoadingYoda animation={animationStyle} />}
      </div>
    )
  }
}