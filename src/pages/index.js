import React from 'react'

import Layout from '../components/layout/layout'
import logo from '../assets/img/logo.svg'
import './index.scss'

export default function Index(){
  return (
    <Layout>
      <div className="landing-container">
        <img src={logo} alt="Alexandra Moore logo" />
        <h2>Hi, I'm Alexandra. A Front End Developer from Norwich.</h2>
      </div>
    </Layout>
  );
}
