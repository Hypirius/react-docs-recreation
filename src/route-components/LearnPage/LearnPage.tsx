import { NavLink, Outlet, useLoaderData } from "react-router"
import "./LearnPage.css"

type loaderData = {
  title: string
  body: string
}

function LearnPage() {
  const sections = useLoaderData<loaderData[]>()

  return (
    <>
      <aside id="left-sidebar">
        <nav>
          <ul>
            {sections.map((section, index) => (
              <li key={section.title + index}>
                <NavLink to={section.title}>{section.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LearnPage
