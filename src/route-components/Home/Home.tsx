import "./Home.css"
import Logo from "../../assets/React.svg?react"
import { Link } from "react-router"

function Home() {
  return (
    <div id="home-container">
      <Logo width={100} height={100} />
      <p>The library for web and native user interfaces</p>
      <button>
        <Link to="/learn">Learn React</Link>
      </button>
    </div>
  )
}

export default Home
