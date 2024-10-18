import React, { useState } from "react";
import { Head } from '@inertiajs/react';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { FiSearch, FiFilter, FiX } from "react-icons/fi";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function Mentors() {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [expandedCriteria, setExpandedCriteria] = useState({});
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const filterCriteria = {
    Expertise: ["React", "Node.js", "Python", "Machine Learning", "UI/UX Design"],
    "Years of Experience": ["0-2 years", "3-5 years", "6-10 years", "10+ years"],
    Industry: ["Technology", "Finance", "Healthcare", "Education", "E-commerce"],
    Availability: ["Weekdays", "Weekends", "Evenings", "Flexible"],
    Language: ["English", "Spanish", "Mandarin", "French", "German"],
    "Mentoring Style": ["One-on-one", "Group sessions", "Project-based", "Casual"],
    "Project Experience": ["Web Development", "Mobile Apps", "Data Science", "Cloud Computing"],
    "Education Level": ["Bachelor's", "Master's", "PhD", "Self-taught"],
  };

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  const toggleCriterion = (criterion) => {
    setExpandedCriteria((prev) => ({ ...prev, [criterion]: !prev[criterion] }));
  };

  const handleFilterChange = (criterion, value) => {
    setSelectedFilters((prev) => {
      const updatedCriterion = prev[criterion] ? [...prev[criterion]] : [];
      const valueIndex = updatedCriterion.indexOf(value);
      if (valueIndex > -1) {
        updatedCriterion.splice(valueIndex, 1);
      } else {
        updatedCriterion.push(value);
      }
      return { ...prev, [criterion]: updatedCriterion };
    });
  };

  const applyFilters = () => {
    console.log("Applying filters:", selectedFilters);
    setIsFilterPanelOpen(false);
  };

  const recommendedMentors = [
    {
      id: 1,
      name: "John Doe",
      expertise: "React, Node.js",
      experience: "5 years of industry experience. Passionate about teaching and mentoring junior developers.",
    },
    {
      id: 2,
      name: "Jane Smith",
      expertise: "Python, Machine Learning",
      experience: "8 years of experience in data science. Enjoys helping others break into the field of AI.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      expertise: "UI/UX Design",
      experience: "10+ years in design. Specializes in creating intuitive user interfaces for web and mobile apps.",
    },
    {
      id: 4,
      name: "Sarah Lee",
      expertise: "Cloud Computing, DevOps",
      experience: "7 years of experience with AWS and Azure. Passionate about teaching best practices in cloud architecture.",
    },
  ];

  const openRequestModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsRequestModalOpen(true);
    setTimeout(() => setModalActive(true), 10);
  };

  const closeRequestModal = () => {
    setModalActive(false);
    setTimeout(() => {
      setIsRequestModalOpen(false);
      setSelectedMentor(null);
    }, 300);
  };

  const confirmRequest = () => {
    console.log(`Requesting session with ${selectedMentor.name}`);
    closeRequestModal();
  };

  return (
    <SidebarLayout>
      <Head title="Mentors" />
      <div className="mentors-content">
        <div className="top-bar">
          <h1>Mentors</h1>
        </div>
        <div className="mentors-main">
          <div className="main-column">
            <h2 className="section-title">Find a Mentor</h2>
            <div className="search-container">
              <div className="search-bar">
                <FiSearch className="search-icon" />
                <input type="text" placeholder="Search mentors..." />
              </div>
              <button className="filter-button" onClick={toggleFilterPanel}>
                <FiFilter />
                Filter
              </button>
            </div>
            {isFilterPanelOpen && (
              <div className="filter-panel">
                <div className="filter-panel-header">
                  <h3>Filter Mentors</h3>
                  <button onClick={toggleFilterPanel}>
                    <FiX />
                  </button>
                </div>
                <p>Select criteria to filter mentors:</p>
                <div className="filter-options">
                  {Object.entries(filterCriteria).map(([criterion, values]) => (
                    <div key={criterion} className="filter-criterion">
                      <div
                        className="criterion-header"
                        onClick={() => toggleCriterion(criterion)}
                      >
                        <span>{criterion}</span>
                        {expandedCriteria[criterion] ? (
                          <IoChevronUpOutline />
                        ) : (
                          <IoChevronDownOutline />
                        )}
                      </div>
                      <div
                        className={`criterion-values ${
                          expandedCriteria[criterion] ? "expanded" : ""
                        }`}
                      >
                        {values.map((value) => (
                          <label key={value} className="filter-option">
                            <input
                              type="checkbox"
                              checked={
                                selectedFilters[criterion]?.includes(value) ||
                                false
                              }
                              onChange={() =>
                                handleFilterChange(criterion, value)
                              }
                            />
                            {value}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="apply-filters-btn" onClick={applyFilters}>
                  Apply Filters
                </button>
              </div>
            )}
            <h3 className="section-subtitle">Recommended Mentors</h3>
            <div className="mentor-cards">
              {recommendedMentors.map((mentor) => (
                <div key={mentor.id} className="mentor-card">
                  <div className="mentor-avatar">{mentor.name[0]}</div>
                  <h4 className="mentor-name">{mentor.name}</h4>
                  <p className="mentor-expertise">
                    Expert in {mentor.expertise}
                  </p>
                  <p className="mentor-experience">{mentor.experience}</p>
                  <div className="mentor-actions">
                    <button className="view-profile-btn">View Profile</button>
                    <button
                      className="request-session-btn"
                      onClick={() => openRequestModal(mentor)}
                    >
                      Request Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isRequestModalOpen && selectedMentor && (
        <div className={`modal-overlay ${modalActive ? "active" : ""}`}>
          <div className={`modal-content ${modalActive ? "active" : ""}`}>
            <h2>Request a session</h2>
            <p>
              Are you sure you want to request a session with{" "}
              {selectedMentor.name}?
            </p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeRequestModal}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmRequest}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </SidebarLayout>
  );
}
