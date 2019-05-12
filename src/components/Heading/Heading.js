import React, { Fragment } from 'react'

import headingStyles from './heading.module.scss'
import me from '../../assets/img/me.jpg'

export default function Heading({title}){
  return (
    <Fragment>
      <div className={headingStyles.container}>
        <h1>{title}</h1>
      </div>
      <img className={headingStyles.img} src={me} alt="Alexandra Moore" />
    </Fragment>
  );
}
