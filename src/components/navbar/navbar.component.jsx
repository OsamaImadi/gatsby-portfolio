import React from 'react'
import {
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap'

import { Link } from 'gatsby'

import menuItems from './menuData'
import Example from '../dropdown/dropdown.component'
import profileImage from '../../images/profileImage.png'

import './navbar.styles.scss'

const NavBar = () => (
  <section id="navbar">
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <Link className="navbar-brand js-scroll-trigger" to="/about">
        <span className="d-block d-lg-none">Clarence Taylor</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="" />
        </span>
      </Link>
      <Example />
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

export default NavBar
