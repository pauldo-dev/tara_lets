import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/react';
import "../../sass/Components.scss";

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

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const SidebarLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { url } = usePage();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: "Dashboard", icon: <CiGrid41 />, path: route('student-dashboard') },
    { name: "Mentors", icon: <CiUser />, path: route('student-dashboard.mentors') },
    { name: "Appointments", icon: <CiCalendar />, path: route('student-dashboard.mentors') },
    { name: "Feedback", icon: <CiChat1 />, path: route('student-dashboard.mentors') },
    { name: "Classroom", icon: <CiBookmark />, path: route('student-dashboard.mentors') },
    { name: "Documents", icon: <CiFileOn />, path: route('student-dashboard.mentors') },
    { name: "Community", icon: <CiGlobe />, path: route('student-dashboard.mentors') },
    { name: "Team Chart", icon: <CiCircleChevRight />, path: route('student-dashboard.mentors') },
    { name: "Settings", icon: <CiSettings />, path: route('student-dashboard.mentors') },
  ];

  return (
    <div className="flex">
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
                href={item.path}
                className={`nav-item ${
                  url === item.path ? "active" : ""
                }`}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-text">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
