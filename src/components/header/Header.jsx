import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import _ from "lodash"; // Import lodash for debounce
import "./Header.css";
import Navbar from "./mobileNavbar/Navbar";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(
    useMemo(() => window.innerWidth <= 768, [])
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [nestedSubMenu, setNestedSubMenu] = useState(null);

  const handleResize = useCallback(
    _.debounce(() => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setIsMobile(newWidth <= 768);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleMenuHover = useCallback((menu) => {
    setActiveMenu(menu);
    setHoveredSubMenu(null); // Reset submenu on parent menu hover
    setNestedSubMenu(null); // Reset nested submenu
  }, []);

  const handleSubMenuHover = useCallback((submenuLabel) => {
    setHoveredSubMenu(submenuLabel);
    setNestedSubMenu(null);
  }, []);

  const handleNestedSubMenuHover = useCallback((nestedSubmenuLabel) => {
    setNestedSubMenu(nestedSubmenuLabel);
  }, []);

  const handleMenuLeave = useCallback(() => {
    // Only close the menu if the cursor is not over any submenu or nested submenu
    if (!hoveredSubMenu && !nestedSubMenu) {
      setActiveMenu(null);
    }
  }, [hoveredSubMenu, nestedSubMenu]);

  const handleSubMenuLeave = useCallback(() => {
    // Only close the submenu if the cursor is not over any nested submenu
    if (!nestedSubMenu) {
      setHoveredSubMenu(null);
    }
  }, [nestedSubMenu]);

  const handleNestedSubMenuLeave = useCallback(() => {
    setNestedSubMenu(null);
  }, []);

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Check if the mouse is within 50 pixels of the top of the page
      if (e.clientY < 80) {
        setVisible(true);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const menuData = useMemo(
    () => [
      {
        label: "FAMILY",
        submenu: [
          {
            label: "FAMILY OFF-ROAD",
            link: "/familyoffroad",
            submenu: [
              {
                label: "STORMBREAKER",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/186.webp"
                        alt="stormbreaker18"
                      />
                    ),
                    link: "/stormbreaker18",
                    text: "Stormbreaker 18`6",
                    price: "FULL OFF-ROAD: $89,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/196.webp"
                        alt="stormbreaker19"
                      />
                    ),
                    link: "/stormbreaker19",
                    text: "Stormbreaker 19`6",
                    price: "FULL OFF-ROAD: $92,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="stormbreaker21"
                      />
                    ),
                    link: "/stormbreaker21",
                    text: "Stormbreaker 21`6",
                    price: "FULL OFF-ROAD: $94,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp"
                        alt="stormbreaker23"
                      />
                    ),
                    link: "/stormbreaker23",
                    text: "Stormbreaker 23`11",
                    price: "FULL OFF-ROAD: $96,900",
                  },
                ],
              },
              {
                label: "RIPTIDE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                        alt="Riptide22"
                      />
                    ),
                    link: "/riptide22",
                    text: "Riptide 22",
                    price: "FULL OFF-ROAD: $98,900",
                  },
                ],
              },
            ],
          },
          {
            label: "FAMILY XP-TECH",
            link: "/familyxptech",
            submenu: [
              {
                label: "STORMBREAKER",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/186.webp"
                        alt="stormbreaker18"
                      />
                    ),
                    link: "/stormbreaker18",
                    text: "Stormbreaker 18`6",
                    price: "FULL OFF-ROAD: $89,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/196.webp"
                        alt="stormbreaker19"
                      />
                    ),
                    link: "/stormbreaker19",
                    text: "Stormbreaker 19`6",
                    price: "FULL OFF-ROAD: $92,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="stormbreaker21"
                      />
                    ),
                    link: "/stormbreaker21",
                    text: "Stormbreaker 21`6",
                    price: "FULL OFF-ROAD: $94,900",
                  },
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/2311.webp"
                        alt="stormbreaker23"
                      />
                    ),
                    link: "/stormbreaker23",
                    text: "Stormbreaker 23`11",
                    price: "FULL OFF-ROAD: $96,900",
                  },
                ],
              },
              {
                label: "RIPTIDE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/Rip22/Riptide%20header-min.webp"
                        alt="Riptide22"
                      />
                    ),
                    link: "/riptide22",
                    text: "Riptide 22",
                    price: "FULL OFF-ROAD: $98,900",
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        label: "COUPLES",
        submenu: [
          {
            label: "COUPLES OFF-ROAD",
            link: "/couplesoffroad",
            submenu: [
              {
                label: "ECLIPSE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="Eclipse 216"
                      />
                    ),
                    link: "/eclipse21",
                    text: "ECLIPSE - 21`6FT",
                    price: "$92,900",
                  },
                  {
                    link: "/eclipse22",
                    text: "ECLIPSE - 22FT",
                    price: "$98,900",
                  },
                ],
              },
            ],
          },
          {
            label: "COUPLES XP-TECH",
            link: "/couplesxptech",
            submenu: [
              {
                label: "ECLIPSE",
                link: "",
                submenu: [
                  {
                    label: (
                      <img
                        src="https://deluxcaravan.b-cdn.net/assets/header/216.webp"
                        alt="Eclipse 216"
                      />
                    ),
                    link: "/eclipse21",
                    text: "ECLIPSE - 21`6FT",
                    price: "$92,900",
                  },
                  {
                    link: "/eclipse22",
                    text: "ECLIPSE - 22FT",
                    price: "$98,900",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "RESOURCES",
        submenu: [
          { label: "ABOUT US", link: "/about" },
          { label: "UPDATES", link: "/blog" },
          { label: "VIDEOS", link: "/video" },
          { label: "WARRANTY POLICY", link: "/warranty" },
          { label: "VIRTUAL TOURS", link: "/tour" },
        ],
      },
      {
        label: "DISCOVER",
        submenu: [
          {
            label: (
              <a
                href="https://www.instagram.com/deluxecaravansaustralia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/instagramh.webp"
                  alt="Instagram"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.instagram.com/deluxecaravansaustralia/",
          },
          {
            label: (
              <a
                href="https://www.facebook.com/deluxecaravansaustralia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/facebookh.webp"
                  alt="Facebook"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.facebook.com/deluxecaravansaustralia",
          },
          {
            label: (
              <a
                href="https://twitter.com/CaravansDeluxe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/twitterh.webp"
                  alt="Twitter"
                  className="iconh"
                />
              </a>
            ),
            link: "https://twitter.com/CaravansDeluxe",
          },
          {
            label: (
              <a
                href="https://www.tiktok.com/@deluxecaravansaustralia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/tik-tokh.webp"
                  alt="TikTok"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.tiktok.com/@deluxecaravansaustralia",
          },
          {
            label: (
              <a
                href="https://www.youtube.com/watch?v=a_KE1CVPT48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deluxcaravan.b-cdn.net/assets/icons/youtubeh.webp"
                  alt="YouTube"
                  className="iconh"
                />
              </a>
            ),
            link: "https://www.youtube.com/watch?v=a_KE1CVPT48",
          },
        ],
      },
    ],
    []
  );

  return (
    <div>
      {isMobile ? (
        <Navbar />
      ) : (
        <motion.header
          className={`header ${visible ? "" : "hidden"}`}
          initial={{ backgroundColor: "transparent" }}
          whileHover={{ backgroundColor: "white", color: "black" }}
          animate={
            activeMenu
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "transparent" }
          }
          transition={{ duration: 0.5 }}
        >
          <div className="header-logo">
            <Link to="/">
              <img
                src="https://deluxcaravan.b-cdn.net/assets/Logo.webp"
                alt="Deluxe Caravan Logo"
                height={50}
              />
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="menu">
              {menuData.map((menu, index) => (
                <motion.li
                  key={index}
                  className={`menu-item ${
                    activeMenu === menu.label ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMenuHover(menu.label)}
                  onMouseLeave={handleMenuLeave}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button>
                    <span>{menu.label}</span>
                  </button>
                  <AnimatePresence>
                    {activeMenu === menu.label && menu.submenu && (
                      <motion.div
                        className="sub-menu"
                        initial={{ opacity: 1, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {menu.submenu.map((subitem, subIndex) => (
                          <div
                            key={subIndex}
                            onMouseEnter={() =>
                              handleSubMenuHover(subitem.label)
                            }
                            onMouseLeave={handleSubMenuLeave}
                          >
                            <Link to={subitem.link || "#"}>
                              <motion.div
                                className={`sub-menu-item ${
                                  hoveredSubMenu === subitem.label
                                    ? "active-submenu"
                                    : ""
                                }`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                  duration: 0.3,
                                  delay: subIndex * 0.1,
                                }}
                              >
                                <span
                                  className={`submenu-label ${String(
                                    subitem.label
                                  ).toLowerCase()}`}
                                >
                                  {subitem.label}
                                </span>
                                {subitem.text && <h3>{subitem.text}</h3>}
                                {subitem.price && <h5>{subitem.price}</h5>}

                                {/* Nested Submenu */}
                                {hoveredSubMenu === subitem.label &&
                                  subitem.submenu && (
                                    <motion.div
                                      className="nested-submenu"
                                      initial={{ opacity: 1, scaleY: 0 }}
                                      animate={{ opacity: 1, scaleY: 1 }}
                                      exit={{ opacity: 0, scaleY: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      {subitem.submenu.map(
                                        (nestedSubitem, nestedIndex) => (
                                          <div
                                            key={nestedIndex}
                                            onMouseEnter={() =>
                                              handleNestedSubMenuHover(
                                                nestedSubitem.label
                                              )
                                            }
                                            onMouseLeave={() =>
                                              setNestedSubMenu(null)
                                            }
                                          >
                                            <Link
                                              to={nestedSubitem.link || "#"}
                                            >
                                              <motion.div
                                                className="nested-submenu-item"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{
                                                  duration: 0.3,
                                                  delay: nestedIndex * 0.1,
                                                }}
                                              >
                                                {nestedSubitem.label}
                                                {nestedSubitem.text && (
                                                  <h4>{nestedSubitem.text}</h4>
                                                )}
                                                {nestedSubitem.price && (
                                                  <h6>{nestedSubitem.price}</h6>
                                                )}

                                                {/* Deep Nested Submenu */}
                                                {nestedSubMenu ===
                                                  nestedSubitem.label &&
                                                  nestedSubitem.submenu && (
                                                    <motion.div
                                                      className="deep-nested-submenu"
                                                      initial={{
                                                        opacity: 1,
                                                        scaleY: 0,
                                                      }}
                                                      animate={{
                                                        opacity: 1,
                                                        scaleY: 1,
                                                      }}
                                                      exit={{
                                                        opacity: 0,
                                                        scaleY: 0,
                                                      }}
                                                      transition={{
                                                        duration: 0.3,
                                                      }}
                                                    >
                                                      {nestedSubitem.submenu.map(
                                                        (
                                                          deepNestedSubitem,
                                                          deepIndex
                                                        ) => (
                                                          <Link
                                                            key={deepIndex}
                                                            to={
                                                              deepNestedSubitem.link ||
                                                              "#"
                                                            }
                                                          >
                                                            <motion.div
                                                              className="deep-nested-submenu-item"
                                                              initial={{
                                                                opacity: 0,
                                                                y: -10,
                                                              }}
                                                              animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                              }}
                                                              exit={{
                                                                opacity: 0,
                                                                y: -10,
                                                              }}
                                                              transition={{
                                                                duration: 0.3,
                                                                delay:
                                                                  deepIndex *
                                                                  0.1,
                                                              }}
                                                            >
                                                              {
                                                                deepNestedSubitem.label
                                                              }
                                                              {deepNestedSubitem.text && (
                                                                <h4>
                                                                  {
                                                                    deepNestedSubitem.text
                                                                  }
                                                                </h4>
                                                              )}
                                                              {deepNestedSubitem.price && (
                                                                <h6>
                                                                  {
                                                                    deepNestedSubitem.price
                                                                  }
                                                                </h6>
                                                              )}
                                                            </motion.div>
                                                          </Link>
                                                        )
                                                      )}
                                                    </motion.div>
                                                  )}
                                              </motion.div>
                                            </Link>
                                          </div>
                                        )
                                      )}
                                    </motion.div>
                                  )}
                              </motion.div>
                            </Link>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
              <li className="menu-item">
                <Link to="/tour">
                  <button>XP-TECH</button>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">
                  <button>CONTACT</button>
                </Link>
              </li>
            </ul>
          </nav>
        </motion.header>
      )}
    </div>
  );
};

export default React.memo(Header);
