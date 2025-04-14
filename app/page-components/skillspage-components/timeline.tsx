import React from "react";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";
import "./timeline.css";

const timelineData = [
  {
    type: "experience",
    year: "Future",
    title: "Software Engineer",
    description: "Your dream position",
    icon: <FaBriefcase />,
    key: 1
  },
  {
    type: "education",
    year: "2022 - Present",
    title: "Computer Science BSc",
    description: "University of XYZ | GPA: 3.8/4.0",
    icon: <FaGraduationCap />,
    key: 2,
    courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
  },
  {
    type: "experience",
    year: "Future",
    title: "Open Source Contributor",
    description: "Potential projects",
    icon: <FaBriefcase />,
    key: 3
  },
  {
    type: "education",
    year: "Summer 2023",
    title: "Frontend Bootcamp",
    description: "CodeMaster Academy | 300 hours",
    icon: <FaGraduationCap />,
    key: 4,
    courses: ["React Fundamentals", "Advanced CSS", "UI/UX Principles"]
  }
];

const CenteredTimeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-main-title">
        <span className="dollar-sign">$</span>
        <span className="title-text"></span>
      </h1>
      <div className="centered-timeline">
        <div className="timeline-line"></div>
        
        {timelineData.map((item) => (
          <div key={item.key} className={`timeline-item ${item.type}`}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              {item.courses && (
                <div className="courses-section">
                  <div className="courses-header">
                    <FaBook className="course-icon" />
                    <span>Relevant Courses</span>
                  </div>
                  <ul className="courses-list">
                    {item.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredTimeline;