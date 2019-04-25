import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={headerStyles.container}>
    <h1 className={headerStyles.heading}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
