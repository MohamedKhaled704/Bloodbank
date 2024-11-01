import UserNavList from "./UserNavList";
import UserLiList from "./UserLiList";
import { FaHands } from "react-icons/fa";

const UserHeader = () => {
    return (
        <div className="Home_Header_content">
        <h1 className="HomeH1">
          TOGETHER
          <FaHands className="FaHands" />
        </h1>
        <div className="Home-Header-Navbar-List">
          {UserLiList.map((link) => {
            return <UserNavList UserliTo={link.UserliTo} UserliText={link.UserliText} />;
          })}
        </div>
      </div>
    )
}
export default UserHeader;