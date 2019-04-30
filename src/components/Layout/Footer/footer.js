import React from 'react'

import footerStyles from './footer.module.scss'
import twitterLogo from '../../../assets/img/social/twitter-logo.svg'
import githubLogo from '../../../assets/img/social/github-logo.png'

const Footer = () => (
  <div className={footerStyles.container}>
    <a href="https://https://twitter.com/alexandraamoore">
      <img src={twitterLogo} alt="Twitter logo"/>
    </a>
    <a href="https://github.com/alexalala">
      <img src={githubLogo} alt="Github logo" />
    </a>
  </div>
)

export default Footer
