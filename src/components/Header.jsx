import React from 'react'
import AboutIconLink from './AboutIconLink'

import PropTypes from 'prop-types'

function Header({text, bgColor, txtColor}) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: txtColor,
    }

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
        <AboutIconLink/>
    </header>
  )
}

Header.defaultProps = {
    text: 'FeedbackUI',
    bgColor: 'rgba(0,0,0,0.4)',
    txtColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    txtColor: PropTypes.string
}

export default Header
