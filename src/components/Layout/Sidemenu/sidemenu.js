import React from 'react'

import sidemenuStyles from './sidemenu.module.scss'

const Sidemenu = () => (
  // Credit to Erik Terwan for this burger!
  <nav role="navigation">
    <div className={sidemenuStyles.menuToggle}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className={sidemenuStyles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Info</li>
        <li>Contact</li>
      </ul>
    </div>
  </nav>
)

export default Sidemenu;
