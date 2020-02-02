import React, { Component } from 'react';
// import PropTypes from "prop-types";
import './styles.scss'

const LoadingYoda = ( { animation } = this.props) => {
  const animationStyle = {
    animationName: animation.name ,
    animationDuration : animation.duration || '3s',
    animationTimingFunction : animation.timing || 'linear',
    animationIterationCount : animation.count || 'infinite'
  }

  return (
    <div className='loading'>
      <img style={animationStyle} className='rotating' alt='baby yoda insane loading' src='/baby-yoda-loading.png'></img>
    </div>
  )
}

// LoadingYoda.propTypes = {
//   animationName: PropTypes.string.isRequired
// }

export default LoadingYoda;