import React from 'react';
import './divider.css';

interface SectionDividerProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bounceIntensity?: 'subtle' | 'medium' | 'strong';
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  text,
  size = 'medium',
  color,
  bounceIntensity = 'medium'
}) => {
  return (
    <div 
      className={`scroll-down ${size} ${bounceIntensity}`}
      style={color ? { color } : {}}
    >
      <span>{text}</span>
      <i className="bx bx-chevron-down"></i>
    </div>
  );
};

export default SectionDivider;