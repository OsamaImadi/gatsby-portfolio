/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap'

import { Link } from 'gatsby'

const Example = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="navbar-toggler">
      <DropdownToggle

        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <span className="navbar-toggler-icon" />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu">
        <DropdownItem to="/about" tag={Link} onClick={toggle}>About</DropdownItem>
        <DropdownItem to="/experience" tag={Link} onClick={toggle}>Experience</DropdownItem>
        <DropdownItem to="/education" tag={Link} onClick={toggle}>Education</DropdownItem>
        <DropdownItem to="/skills" tag={Link} onClick={toggle}>Skills</DropdownItem>
        <DropdownItem to="/interests" tag={Link} onClick={toggle}>Interests</DropdownItem>
        <DropdownItem to="/awards" tag={Link} onClick={toggle}>Awards</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Example
