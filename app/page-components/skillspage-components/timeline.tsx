import React from "react";
import "./Timeline.css";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'work';
}

const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: "2018-2022",
      title: "Computer Science Degree",
      subtitle: "University of Technology",
      description: "Specialized in Web Development and AI. Graduated with honors.",
      type: 'education'
    },
    {
      id: 2,
      date: "2020-2021",
      title: "Frontend Developer Intern",
      subtitle: "Tech Solutions Inc.",
      description: "Developed responsive UIs using React and TypeScript.",
      type: 'work'
    },
    {
      id: 3,
      date: "2022-Present",
      title: "Software Engineer",
      subtitle: "Digital Innovations LLC",
      description: "Leading frontend development for enterprise applications.",
      type: 'work'
    },
    {
      id: 4,
      date: "2023",
      title: "Advanced React Certification",
      subtitle: "Online Learning Platform",
      description: "Mastered advanced React patterns and performance optimization.",
      type: 'education'
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline">
        {timelineData.map((item) => (
          <div 
            key={item.id} 
            className={`timeline-item ${item.type}`}
            data-date={item.date}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;