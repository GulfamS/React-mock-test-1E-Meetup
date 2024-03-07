import {Link} from 'react-router-dom'
import {Navbar, Logo} from './styledComponent'

const Header = () => (
  <Navbar>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Navbar>
)
export default Header
