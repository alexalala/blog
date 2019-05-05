import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import sidemenuStyles from './sidemenu.module.scss'

const Sidemenu = () => {

  const menu = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              name
              path
            }
          }
        }
      }
    `
  )

  return (
    <nav role="navigation">
      <div className={sidemenuStyles.menuToggle}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className={sidemenuStyles.menu}>
          {menu.site.siteMetadata.menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidemenu;
