import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import headerStyles from './css-modules/header.module.css'

const Header = ({ siteTitle }) => (
  <div className={headerStyles.container}>
    <h1 className={headerStyles.heading}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
