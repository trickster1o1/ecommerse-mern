import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserPlus,FaSearch  } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="nav-cont">
            <nav>
                <span><RxHamburgerMenu /></span>
                <span><FaUserPlus /></span>
            </nav>
            <nav>
                <span>TricksterWeb</span>
            </nav>
            <nav>
                <FaSearch  />
            </nav>
        </div>
    )
}