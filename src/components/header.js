import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const Header = ({siteTitle}) => (
  <div className="wrapper">
    <nav>
    <input type="checkbox" id="show-menu"/>
    <label for="show-menu" class="menu-icon"><FontAwesomeIcon icon={faCaretDown} /></label>
    <div className="content">
    <div className="logo">
        <Link to="/">{siteTitle}</Link>
        </div>
        <ul className="links">
        <li><Link to="/about">About</Link></li>
        <li> <Link to="/news">News</Link></li>
        <li>
        <Link to="/routes-russia">Routes</Link>
        </li>
        <li>
          <Link to="/travel-buy">Buy</Link> 
        </li>
        </ul>
    </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
