import React from 'react'

import headingStyles from './heading.module.scss'

export default function Heading({title}){
  return (
    <div className={headingStyles.container}>
      <h1>{title}</h1>
    </div>
  );
}
