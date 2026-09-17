import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar-container">
            <Link
            href="/"
            className="logo"
            >
                JSM Headphones
            </Link>
            <button className="cart-icon" type="button">
                <ShoppingCart />
                 <span className="cart-item-qty">1</span>
            </button>
    </nav>
  )
}

export default Navbar