import React, { useState } from 'react'
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap'

import { Link } from 'gatsby'

import menuItems from '../commons/header/menuData'

const MenuDropdown = () => {
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
        {menuItems
          .map((menuItem) => (
            <DropdownItem to={menuItem.link} tag={Link} onClick={toggle}>
              {menuItem.item}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default MenuDropdown
