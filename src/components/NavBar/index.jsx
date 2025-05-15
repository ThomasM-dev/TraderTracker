import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { useGetOperationsQuery } from "../../fetching/firebaseApi";
import { setsOperations } from "../../stateGlobal/operationsSlice";


const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
      const navigate = useNavigate();

  useEffect(() => {
    const goToHome = sessionStorage.getItem("goToHomeAfterReload");
    if (goToHome === "true") {
      sessionStorage.removeItem("goToHomeAfterReload");
      navigate("/");
    }
  }, []);

  const dispatch = useDispatch();

  const { data: firebaseData, isSuccess } = useGetOperationsQuery();

  const localOperations = JSON.parse(localStorage.getItem("operations"));

  useEffect(() => {
    if (localOperations && Array.isArray(localOperations)) {
      dispatch(setsOperations(localOperations));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess && firebaseData && Array.isArray(firebaseData)) {
      const localString = JSON.stringify(localOperations);
      const firebaseString = JSON.stringify(firebaseData);

      if (localString !== firebaseString) {
        dispatch(setsOperations(firebaseData));
        localStorage.setItem("operations", JSON.stringify(firebaseData));
      }
    }
  }, [dispatch, firebaseData, isSuccess, localOperations]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Operaciones", path: "/operaciones" },
    { name: "Registrar", path: "/registrar" },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="container-nav" aria-label="Main navigation">
      <ul className="nav">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={
                location.pathname === link.path || activeLink === index
                  ? "nav-clicled"
                  : "nav-incliked"
              }
              onClick={() => handleLinkClick(index)}
              aria-current={
                location.pathname === link.path || activeLink === index
                  ? "page"
                  : undefined
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
