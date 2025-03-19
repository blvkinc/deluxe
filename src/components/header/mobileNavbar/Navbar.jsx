import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const isCustomPage =
    location.pathname === "/maintenance" ||
    location.pathname === "/warranty" ||
    location.pathname === "/Xptec";

  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef();

  // Main menu visibility states
  const [ourFamilyVisible, setOurFamilyVisible] = useState(false);
  const [ourCouplesVisible, setOurCouplesVisible] = useState(false);
  const [resourcesVisible, setResourcesVisible] = useState(false);

  // Icon rotation states
  const [resourcesIconRotation, setResourcesIconRotation] =
    useState("rotate(0deg)");
  const [ourFamilyIconRotation, setOurFamilyIconRotation] =
    useState("rotate(0deg)");
  const [ourCouplesIconRotation, setOurCouplesIconRotation] =
    useState("rotate(0deg)");

  // Resources menu handlers
  const showResources = () => {
    setResourcesVisible(true);
    setResourcesIconRotation("rotate(90deg)");
    resetOtherMenus("resources");
  };

  const hideResources = () => {
    setResourcesVisible(false);
    setResourcesIconRotation("rotate(0deg)");
  };

  // Family menu handlers
  const showOurFamily = () => {
    setOurFamilyVisible(true);
    setOurFamilyIconRotation("rotate(90deg)");
    resetOtherMenus("family");
  };

  const hideOurFamily = () => {
    setOurFamilyVisible(false);
    setOurFamilyIconRotation("rotate(0deg)");
  };

  // Couples menu handlers
  const showOurCouples = () => {
    setOurCouplesVisible(true);
    setOurCouplesIconRotation("rotate(90deg)");
    resetOtherMenus("couples");
  };

  const hideOurCouples = () => {
    setOurCouplesVisible(false);
    setOurCouplesIconRotation("rotate(0deg)");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to reset other menus when opening a new one
  const resetOtherMenus = (currentMenu) => {
    if (currentMenu !== "resources") {
      setResourcesVisible(false);
      setResourcesIconRotation("rotate(0deg)");
    }

    if (currentMenu !== "family") {
      setOurFamilyVisible(false);
      setOurFamilyIconRotation("rotate(0deg)");
    }

    if (currentMenu !== "couples") {
      setOurCouplesVisible(false);
      setOurCouplesIconRotation("rotate(0deg)");
    }
  };

  return (
    <div className="dropdown-menu">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className={`open-button ${isCustomPage ? "custom-page" : ""}`}
        >
          Menu
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="navbar-container"
              key="navbar"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              <div ref={navbarRef} className="mobile-navbar">
                <button onClick={toggleMenu} className="close-button">
                  Close
                </button>
                
                <ul className="navbar-nav">
                  <li className="nav-item" onClick={toggleMenu}>
                    <Link to="/" className="nav-link">
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
                        alt="Deluxe Caravan Logo"
                        height={50}
                      />
                    </Link>
                  </li>

                  {/* FAMILY MENU */}
                  <li className="nav-item">
                    <p className="social" onClick={showOurFamily}>
                      FAMILY{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                        style={{ transform: ourFamilyIconRotation }}
                      />
                    </p>
                    <AnimatePresence>
                      {ourFamilyVisible && (
                        <motion.div
                          className={`social-media-container ${
                            ourFamilyVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={hideOurFamily}
                            className="back-button"
                          >
                            <img
                              src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                              alt=""
                              className="lessericon"
                            />{" "}
                            Back
                          </button>
                          <ul className="submenu-list">
                            <li onClick={toggleMenu}>
                              <Link to="/familyoffroad">FAMILY OFF-ROAD</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/familyxptech">FAMILY XP-TECH</Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* COUPLES MENU */}
                  <li className="nav-item">
                    <p className="social" onClick={showOurCouples}>
                      COUPLES{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                        style={{ transform: ourCouplesIconRotation }}
                      />
                    </p>
                    <AnimatePresence>
                      {ourCouplesVisible && (
                        <motion.div
                          className={`social-media-container ${
                            ourCouplesVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={hideOurCouples}
                            className="back-button"
                          >
                            <img
                              src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                              alt=""
                              className="lessericon"
                            />{" "}
                            Back
                          </button>
                          <ul className="submenu-list">
                            <li onClick={toggleMenu}>
                              <Link to="/couplesoffroad">COUPLES OFF-ROAD</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/couplesxptech">COUPLES XP-TECH</Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* RESOURCES MENU */}
                  <li className="nav-item">
                    <p className="social" onClick={showResources}>
                      RESOURCES{" "}
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/icons/greater.webp"
                        alt=""
                        className="greatericon"
                        style={{ transform: resourcesIconRotation }}
                      />
                    </p>
                    <AnimatePresence>
                      {resourcesVisible && (
                        <motion.div
                          className={`social-media-container ${
                            resourcesVisible ? "show" : ""
                          }`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={hideResources}
                            className="back-button"
                          >
                            <img
                              src="https://deluxcaravan.b-cdn.net/assets/icons/lesser.webp"
                              alt=""
                              className="lessericon"
                            />{" "}
                            Back
                          </button>
                          <ul className="submenu-list">
                            <li onClick={toggleMenu}>
                              <Link to="/about">ABOUT US</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/blog">UPDATES</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/video">VIDEOS</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/warranty">WARRANTY POLICY</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/maintenance">SERVICE & MAINTENANCE</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to="/tour">VIRTUAL TOURS</Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li className="nav-item" onClick={toggleMenu}>
                    <Link to="/Xptec" className="nav-link">
                      XP-TECH
                    </Link>
                  </li>

                  <li className="nav-item" onClick={toggleMenu}>
                    <Link to="/contact" className="nav-link">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
