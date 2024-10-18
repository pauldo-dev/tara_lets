import React from "react";
import "../../styles/sass/Components.scss";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Filter Mentors</h2>
        <p>
          Please provide us more context in helping you choose the right mentor
          for you:
        </p>
        Add filter options here
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FilterModal;
