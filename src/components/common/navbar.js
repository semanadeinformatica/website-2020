import React from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import Logo from "../../images/svg/logo_sinf_simp.inline.svg"
import NavbarStyles from "../../styles/common/navbar.module.css"

const NavWrapper = ({ links, className, closeDrawer, children }) => (
  <Nav navbar className={className}>
    {links.map(({ internal, url, text }) => (
      <NavItem className="px-2" key={text}>
        {internal ? (
          <Link
            className={`nav-link ${NavbarStyles.navLink}`}
            activeClassName={NavbarStyles.navLinkActive}
            to={url}
            onClick={closeDrawer}
          >
            {text}
          </Link>
        ) : (
          <NavLink className={NavbarStyles.navLink} href={url}>
            {text}
          </NavLink>
        )}
      </NavItem>
    ))}
    {children}
  </Nav>
)

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.fixed = props.fixed
    this.transparent = props.transparent
    this.logo = props.logo
    this.state = {
      isOpen: false,
    }

    this.leftLinks = [
      {
        url: "/#sobre-nos",
        text: "Sobre nós",
        internal: true,
      },
      {
        url: "/#speakers",
        text: "Speakers",
        internal: true,
      },
      {
        url: "/#sponsors",
        text: "Sponsors",
        internal: true,
      },
      {
        url: "/#tickets",
        text: "Bilhetes",
        internal: true,
      },
      {
        url: "/#contactos",
        text: "Contactos",
        internal: true,
      },
    ]

    this.rightLinks = [
      {
        url: "/program",
        text: "Programa",
        internal: true,
      },
      {
        url: "/equipa",
        text: "Equipa",
        internal: true,
      },
      {
        url: "/competicao-programacao",
        text: "Competição",
        internal: true,
      },
    ]

    this.pastEditions = [
      { url: "https://2018.sinf.pt", year: "2018" },
      { url: "https://2019.sinf.pt", year: "2019" },
    ]
  }

  closeDrawer = () => {
    this.setState({
      isOpen: false,
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar
          dark
          fixed={this.fixed ? "top" : ""}
          expand="lg"
          className={
            NavbarStyles.navbar +
            (this.transparent && !this.state.isOpen
              ? " " + NavbarStyles.noBackground
              : "")
          }
        >
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className=" w-100 order-1 order-lg-0 dual-collapse2"
          >
            <NavWrapper
              className="ml-0 align-items-center"
              links={this.leftLinks}
              closeDrawer={this.closeDrawer}
            />
          </Collapse>
          {this.logo || this.state.isOpen ? (
            <Link className="navbar-brand mx-auto order-0" to="/">
              <Logo fill="#000" className={NavbarStyles.logo} />
            </Link>
          ) : (
            ""
          )}
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="w-100 order-3 dual-collapse2"
          >
            <NavWrapper
              className="ml-auto align-items-center"
              links={this.rightLinks}
              closeDrawer={this.closeDrawer}
            >
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className={NavbarStyles.navLink}>
                  Edições anteriores
                </DropdownToggle>
                <DropdownMenu right>
                  {this.pastEditions.map(({ url, year }) => (
                    <DropdownItem key={year}>
                      <NavLink href={url} className={NavbarStyles.dropdownLink}>
                        {year}
                      </NavLink>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavWrapper>
          </Collapse>
          <NavbarToggler
            className={NavbarStyles.toggler}
            onClick={this.toggle}
          />
        </Navbar>
      </div>
    )
  }
}
