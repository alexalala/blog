import React from 'react'

import Layout from '../components/layout/layout'
import Heading from '../components/Heading/Heading.js'
import me from '../assets/img/me.jpg'

import aboutStyles from './about.module.scss'

export default function About(){
  return (
    <Layout>
      <Heading title="About" />
      <img className={aboutStyles.img} src={me} alt="Alexandra Moore" />
    </Layout>
  );
}
