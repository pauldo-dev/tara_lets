import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/sass/Components.scss";

// Import icons
import {
  CiHome,
  CiUser,
  CiCalendar,
  CiChat1,
  CiBookmark,
  CiFileOn,
  CiGlobe,
  CiCircleChevRight,
  CiSettings,
  CiGrid41,
} from "react-icons/ci";

import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: "Dashboard", icon: <CiGrid41 />, path: "/student.dashboard" },
    { name: "Mentors", icon: <CiUser />, path: "/student.dashboard.mentors" },
    {
      name: "Appointments",
      icon: <CiCalendar />,
      path: "/student-dashboard/appointments",
    },
    {
      name: "Feedback",
      icon: <CiChat1 />,
      path: "/student-dashboard/feedback",
    },
    {
      name: "Classroom",
      icon: <CiBookmark />,
      path: "/student-dashboard/classroom",
    },
    {
      name: "Documents",
      icon: <CiFileOn />,
      path: "/student-dashboard/documents",
    },
    {
      name: "Community",
      icon: <CiGlobe />,
      path: "/student-dashboard/community",
    },
    {
      name: "Team Chart",
      icon: <CiCircleChevRight />,
      path: "/student-dashboard/team-chart",
    },
    {
      name: "Settings",
      icon: <CiSettings />,
      path: "/student-dashboard/settings",
    },
  ];

  return (
    <nav className={`side-nav ${isCollapsed ? "collapsed" : ""}`}>
      <div className="side-nav-header">
        {!isCollapsed && <h2 className="website-name">TARA</h2>}
        <button className="collapse-btn" onClick={toggleCollapse}>
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <span className="nav-icon">{item.icon}</span>
              {!isCollapsed && <span className="nav-text">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
