import "./Root.css"
import Nav from "../Nav/Nav"
import { Outlet } from "react-router"

function Root() {
  return (
    <div id="container">
      <Nav />
      <Outlet />
    </div>
  )
}

export default Root
