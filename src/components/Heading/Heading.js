import React, { Fragment } from 'react'

import headingStyles from './heading.module.scss'

export default function Heading({title}){
  return (
    <Fragment>
      <div className={headingStyles.container}>
        <h1>{title}</h1>
      </div>
    </Fragment>
  );
}
