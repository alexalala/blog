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
      <div>
        <p>I’m Alexandra, a self-taught Front End Developer.</p>
        <p>I’ve been working as a developer since ’17 & teaching myself to code since ’14.</p>
        <p>I am passionate about inclusivity - both through my code in making sure it’s always accessible, as well as through helping others from a range of backgrounds get into the industry.</p>
      </div>
    </Layout>
  );
}
