import { useNavigate, useLocation } from "react-router-dom";
import { MdLocalOffer, MdExplore, MdPersonOutline } from "react-icons/md";
import Explore from "../../pages/Explore";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  // footer since its a bottom navigation bar
  return (
    <footer className="navbar flex fixed bottom-0 w-screen bg-gray-800 shadow-xl">
      <ul className="flex justify-evenly w-[100%] x-auto">
        <li className="navbarItem" onClick={() => navigate("/")}>
          {
            <MdExplore
              fill={"white "}
              height="50px"
            />
          }
          <p className={"white"}>
            Explore
          </p>
        </li>
        <li className="navbarItem" onClick={() => navigate("/offers")}>
          {
            <MdLocalOffer
              fill={"white"}
              height="50px"
            />
          }
          <p>
            Offers
          </p>
        </li>
        <li className="navbarItem" onClick={() => navigate("/profile")}>
          {
            <MdPersonOutline
              fill={"white"}
              height="50px"
            />
          }
          <p className={pathMatchRoute("/offers") ? "#2c2c2c" : "white"}>
            Profile
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Navbar;
