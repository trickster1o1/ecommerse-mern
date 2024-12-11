import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserPlus,FaSearch  } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-cont">
            <nav>
                <span><RxHamburgerMenu /></span>
                <span><FaUserPlus /></span>
            </nav>
            <nav>
                <Link href={'/'}>TricksterWeb</Link>
            </nav>
            <nav>
                <FaSearch  />
            </nav>
        </div>
    )
}