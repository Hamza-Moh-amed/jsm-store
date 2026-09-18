import Link from "next/link"
import NavCart from "./NavCart"

const Navbar = () => {
  return (
    <nav className="navbar-container">
            <Link
            href="/"
            className="logo"
            >
                JSM Headphones
            </Link>
            <NavCart />
          
    </nav>
  )
}

export default Navbar