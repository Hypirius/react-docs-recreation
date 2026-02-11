import { NavLink } from "react-router"
import "./Nav.css"

function Nav() {
  return (
    <header>
      <nav aria-label="main-nav" id="main-nav">
        <div>React Docs</div>
        <ul id="nav-link-list">
          <li>
            <NavLink to="/learn">Learn</NavLink>
          </li>
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
