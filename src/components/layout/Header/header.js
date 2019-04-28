import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import headerStyles from './header.module.css'
import Sidemenu from '../../Sidemenu/Sidemenu'
import logoSmall from '../../../assets/img/logo-small.svg'

const Header = () => (
  <header className={headerStyles.container}>
    <Link to="/">
      <img src={logoSmall} />
    </Link>
    <Sidemenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
