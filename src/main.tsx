import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import routes from "./routes"
import "./index.css"
import { RouterProvider } from "react-router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
