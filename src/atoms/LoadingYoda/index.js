import React from './node_modules/react';
import styled from './node_modules/styled-components';
// import PropTypes from "prop-types";

const Yodinha = styled.div`
  @keyframes spin {
    from {transform:rotate(360deg);}
    to {transform:rotate(0deg);}
  }

  &.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
      @media screen and (min-width: 1024px){
        width: 100px;
        height: 100px;
      }
    }
  }
`

const LoadingYoda = ( { animation } = this.props) => {
  const animationStyle = {
    animationName: animation.name ,
    animationDuration : animation.duration || '3s',
    animationTimingFunction : animation.timing || 'linear',
    animationIterationCount : animation.count || 'infinite'
  }

  return (
    <Yodinha className='loading'>
      <img style={animationStyle} className='rotating' alt='baby yoda insane loading' src='/baby-yoda-loading.png'></img>
    </Yodinha>
  )
}

// LoadingYoda.propTypes = {
//   animationName: PropTypes.string.isRequired
// }

export default LoadingYoda;