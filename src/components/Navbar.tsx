import { useNavigate, useLocation } from "react-router-dom";
import { MdLocalOffer, MdExplore, MdPersonOutline } from "react-icons/md";
import Explore from "../pages/Explore";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // footer since its a bottom navigation bar
  return (
    <footer className="navbar">
      <ul>
        <li onClick={() => navigate("/")}>
          {<MdExplore fill="white" height="36px" />}
          <p>Explore</p>
        </li>
        <li onClick={() => navigate("/offers")}>
          {<MdLocalOffer fill="white" height="36px" />}
          <p>Offers</p>
        </li>
        <li onClick={() => navigate("/profile")}>
          {<MdPersonOutline fill="white" height="36px" />}
          <p>Profile</p>
        </li>
      </ul>
    </footer>
  );
};

export default Navbar;
