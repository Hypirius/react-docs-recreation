import { createBrowserRouter } from "react-router"
import Root from "./route-components/Root/Root"
import Home from "./route-components/Home/Home"
import LearnPage from "./route-components/LearnPage/LearnPage"
import LearnPageLoader from "./route-components/LearnPage/LearnPageLoader"

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/learn", Component: LearnPage, loader: LearnPageLoader },
    ],
  },
])

export default routes
