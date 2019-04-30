import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import headerStyles from './header.module.css'
import Sidemenu from '../../Sidemenu/Sidemenu'
import logoSmall from '../../../assets/img/logo-small.svg'

const Header = () => (
  <header className={headerStyles.container}>
    <Link to="/">
      <img src={logoSmall} alt="Small logo"/>
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
