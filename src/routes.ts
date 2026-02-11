import { createBrowserRouter } from "react-router"
import Root from "./route-components/Root/Root"

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
])

export default routes
