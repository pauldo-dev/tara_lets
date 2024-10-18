import React, { useState } from "react";
import { Head } from '@inertiajs/react';
import SidebarLayout from '@/Layouts/SidebarLayout';
import SearchBar from '@/Components/SearchBar';
import Card from '@/Components/Card';
import Avatar from '@/Components/Avatar';
import '../../../sass/Dashboard.scss';
import {
  IoNotificationsOutline,
  IoChatbubbleOutline,
  IoWarningOutline,
  IoCalendarOutline,
  IoChatboxOutline,
  IoBookOutline,
  IoCheckmarkDoneOutline,
} from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

export default function StudentDashboard({ auth }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    { id: 1, message: "New assignment posted in CS101", time: "2 hours ago" },
    { id: 2, message: "Upcoming appointment with Dr. John Doe", time: "1 day ago" },
    { id: 3, message: "Grade posted for Web Development quiz", time: "2 days ago" },
  ];

  const courses = [
    { id: 1, name: "Agile Development" },
    { id: 2, name: "Risk Management" },
    { id: 3, name: "Tools and Techniques" },
    { id: 4, name: "Software Engineering" },
  ];

  const appointments = [
    { mentor: "Dr. John Doe", date: "May 15, 2023", time: "2:00 PM" },
    { mentor: "Prof. Jane Smith", date: "May 17, 2023", time: "11:00 AM" },
    { mentor: "Dr. Mike Johnson", date: "May 20, 2023", time: "4:30 PM" },
  ];

  const dashboardCards = [
    { title: "Upcoming Appointments", count: 0, icon: <IoCalendarOutline /> },
    { title: "Recent Feedbacks", count: 2, icon: <IoChatboxOutline /> },
    { title: "Ongoing Courses", count: 3, icon: <IoBookOutline /> },
    { title: "Completed Submissions", count: 5, icon: <IoCheckmarkDoneOutline /> },
  ];

  const mentors = [
    { id: 1, name: "Mentor 1", avatar: "../../../images/avatar.png" },
    { id: 2, name: "Mentor 2", avatar: "../../../images/avatar.png" },
    { id: 3, name: "Mentor 3", avatar: "../../../images/avatar.png" },
    { id: 4, name: "Mentor 4", avatar: "../../../images/avatar.png" },
    { id: 5, name: "Mentor 5", avatar: "../../../images/avatar.png" },
  ];

  const announcements = [
    { id: 1, title: "Campus Closure", content: "Campus will be closed on July 4th for Independence Day." },
    { id: 2, title: "New Course Registration", content: "Fall semester course registration opens next week." },
    { id: 3, title: "Library Hours Extended", content: "Library will now be open until midnight during finals week." },
  ];

  return (
    <SidebarLayout>
      <Head title="Student Dashboard" />
      <div className="dashboard-content">
        <div className="top-bar">
          <SearchBar placeholder="Search dashboard..." onSearch={handleSearch} />
          <div className="user-actions">
            <button className="icon-btn">
              <IoChatbubbleOutline />
            </button>
            <div className="notification-wrapper">
              <button className="icon-btn notification-btn" onClick={toggleNotifications}>
                <IoNotificationsOutline />
                {notifications.length > 0 && (
                  <span className="notification-count">{notifications.length}</span>
                )}
              </button>
              {showNotifications && (
                <div className="notification-panel">
                  <h3>Notifications</h3>
                  {notifications.map((notification) => (
                    <div key={notification.id} className="notification-item">
                      <p>{notification.message}</p>
                      <span>{notification.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Avatar src="../../../images/avatar.png" alt="User Avatar" size="medium" />
          </div>
        </div>
        <div className="dashboard-main">
          <div className="main-column">
            <Card className="welcome-card">
              <h2>Hi, {auth.user.name}!👋</h2>
              <p>Welcome back to the student portal!</p>
              <p>We always appreciate you staying connected and updated!</p>
              <div className="notice-reminder">
                <IoWarningOutline className="warning-icon" />
                <span>Don't forget to check out daily notices!</span>
              </div>
            </Card>
            <div className="dashboard-cards">
              {dashboardCards.map((card, index) => (
                <Card key={index} className="dashboard-stat-card">
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-content">
                    <h3>{card.count}</h3>
                    <p>{card.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="secondary-column">
            <div className="section-header">
              <h3 className="section-title">Courses</h3>
              <div className="chevron-icon">
                <FiChevronRight />
              </div>
            </div>
            <div className="courses-grid">
              {courses.map((course) => (
                <Card key={course.id} className="course-card">
                  <div className="course-icon">
                    <IoBookOutline />
                  </div>
                  <h4>{course.name}</h4>
                </Card>
              ))}
            </div>
            <div className="section-header">
              <h3 className="section-title">Mentors</h3>
              <div className="chevron-icon">
                <FiChevronRight />
              </div>
            </div>
            <div className="mentor-avatars">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="mentor-avatar-wrapper">
                  <Avatar src={mentor.avatar} alt={mentor.name} size="medium" />
                </div>
              ))}
            </div>
            <div className="section-header">
              <h3 className="section-title">Announcements</h3>
              <div className="chevron-icon">
                <FiChevronRight />
              </div>
            </div>
            <div className="announcements">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="announcement-item">
                  <h3>{announcement.title}</h3>
                  <p>{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
