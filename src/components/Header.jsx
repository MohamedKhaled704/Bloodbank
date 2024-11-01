import NavList from "./NavList";
import LiList from "./LiList";
import { FaHands } from "react-icons/fa";

const Header = () => {
    return (
        <div className="Home_Header_content">
        <h1 className="HomeH1">
          TOGETHER
          <FaHands className="FaHands" />
        </h1>
        <div className="Home-Header-Navbar-List">
          {LiList.map((link) => {
            return <NavList liTo={link.liTo} liText={link.liText} />;
          })}
        </div>
      </div>
    )
}
export default Header;