import React from 'react'

import Button from '../../Atoms/Button';
import LinkButton from '../../Atoms/LinkButton';

const linkData = {
  value: `Back to categorie's screen`,
  url: '/categories',
  icon: ''
}

const btnData = {
  value: 'Next'
}


const ActionButtons = ({ count, action } = this.props ) => {
  return (
    <div>
      <Button btnInfo={btnData} count={count} action={action}/>
      <LinkButton btnInfo={linkData} />
    </div>
  )
}

export default ActionButtons;