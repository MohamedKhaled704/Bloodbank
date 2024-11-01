import { FaHands } from "react-icons/fa";
import {FaFacebook , FaTwitter} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="Home-Footer">
        <div className="Home-Footer-column1">
          <div className="Home-Footer-column1-1">
            <div className="Home-Footer-column1-1-list" >
            <h3>TOGETHER</h3>
              <ul className="Home-Footer-ul1">
                <li>Home</li>
                <li>Volunteers</li>
                <li>About Us</li>
                <li>Login</li>
                <li>Register</li>
              </ul>
              </div>
              <div className="Home-Footer-column2">
          <h3>lorem</h3>
          <ul className="Home-Footer-ul2">
            <li>Lorem, ipsum dolor.</li>
            <li> dolor Lorem, ipsum.</li>
            <li> ipsum  sit amet.</li>
          </ul>
        </div>
        <div className="Home-Footer-column3">
          <h3>Legal</h3>
          <ul className="Home-Footer-ul3">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="Home-Footer-column3">
          <h3>Thank You</h3>
          <ul className="Home-Footer-ul3">
            <li>Thanks for being one of our heros , </li>
            <li>who helps people saving them life</li>
          </ul>
        </div>
              </div>
          <div className="Home-Footer-column1-2">
            <h3>Health Guide</h3>
            <ul className="Home-Footer-ul1">
              <li>Articles about how to be healthy </li>
              <li>Articles about blood donation </li>
            </ul>
          </div>
          <div className="Home-Footer-column1-3">
            <div className="Home-Footer-column1-3-1">
          <h1 className="HomeH1">
            TOGETHER
            <FaHands className="FaHands" />
          </h1>
          <h4>&#169; 2022-2023 | TOGETHER Foundation , Built by FCAI Team </h4>
          </div>
          <div className="Home-Footer-column1-3-2">
            <FaFacebook className="Social" />
            <FaTwitter className="Social" />
            <select style={{padding:'5px'}}>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
          </div>

    </div>
        </div>
    )
}
export default Footer;