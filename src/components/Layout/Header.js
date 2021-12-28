import InstaLogo from "../../assets/Instagram_logo.svg";
import UserImage from "../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPlus,
  faCompass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";
import DropDown from "../../UI/DropDown";
import UserMenu from "./UserMenu";
import Notifications from "./Notifications";
import Modal from "../../UI/Modal";
import Upload from "../Upload/Upload";

const Header = (props) => {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const userToggleHandler = () => {
    setIsUserClicked((prevState) => !prevState);
    setIsHeartClicked(false);
  };
  const heartToggleHandler = () => {
    setIsHeartClicked((prevState) => !prevState);
    setIsUserClicked(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <header className={`${classes.header} ${props.className}`}>
      <nav className={classes.nav}>
        <img className={classes.logo} src={InstaLogo} alt="logo" />
        <div className={classes.input}>
          <FontAwesomeIcon className={classes.find} icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>
        <ul>
          <Link className={classes.link} to="/user">
            <li>
              <FontAwesomeIcon className={classes.i} icon={faHome} />
            </li>
          </Link>
          <Link className={classes.link} to="/message">
            <li>
              <FontAwesomeIcon
                className={classes.i}
                icon={faFacebookMessenger}
              />
            </li>
          </Link>
          <li className={classes.link} onClick={openModal}>
            <FontAwesomeIcon className={classes.i} icon={faPlus} />
          </li>
          {showModal && <Upload onClick={closeModal} />}
          <li>
            <FontAwesomeIcon className={classes.i} icon={faCompass} />
          </li>

          <li onClick={heartToggleHandler}>
            <FontAwesomeIcon className={classes.i} icon={faHeart} />
          </li>
          {isHeartClicked && (
            <DropDown className={classes.notification}>
              <Notifications />
            </DropDown>
          )}

          <li onClick={userToggleHandler}>
            <img src={UserImage} alt="User" />
          </li>
          {isUserClicked && (
            <DropDown>
              <UserMenu />
            </DropDown>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
