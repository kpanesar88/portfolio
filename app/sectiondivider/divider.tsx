import React from 'react';
import './divider.css'; // Your CSS file

// Define the props interface
interface SectionDividerProps {
  text: string; // The text to display above the arrow
}

const SectionDivider: React.FC<SectionDividerProps> = ({ text }) => {
  return (
    <div className="scroll-down">
      <span>{text}</span> {/* Dynamic text */}
      <i className="bx bx-chevron-down"></i> {/* Boxicons arrow */}
    </div>
  );
};

export default SectionDivider;