import { createBrowserRouter } from "react-router"
import Root from "./route-components/Root/Root"
import Home from "./route-components/Home/Home"

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, Component: Home }],
  },
])

export default routes
