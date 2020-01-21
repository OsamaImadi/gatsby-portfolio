import React from 'react'
import {
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap'

import { Link } from 'gatsby'

import menuItems from './menuData'
import aboutData from '../../about/about.data'
import MenuDropdown from '../../dropdown/index'
import profileImage from '../../../../static/images/profileImage.png'

import './_index.scss'

const Header = () => (
  <section id="header">
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Link className="navbar-brand js-scroll-trigger" to="/about">
        <span className="d-block d-lg-none">{aboutData.firstName + aboutData.lastName}</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="" />
        </span>
      </Link>
      <MenuDropdown />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav">
          {menuItems
            .map((menuItem) => (
              <NavItem>
                <NavLink to={menuItem.link} tag={Link} activeClassName="navbar__link--active">
                  {menuItem.item}
                </NavLink>
              </NavItem>
            ))}
        </div>
      </div>
    </Nav>
  </section>
)

export default Header
