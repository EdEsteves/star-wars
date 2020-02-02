import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import './styles.scss'

const LinkButton = ({ btnInfo } = this.props) => {
  console.log(btnInfo)

return <Link to={btnInfo.url} >{btnInfo.icon ? <FontAwesomeIcon icon={faGlobeEurope} /> : ''}{btnInfo.value}</Link>
  
}

export default LinkButton;