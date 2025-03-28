'use client'
import { useState, useEffect } from 'react';
import './loading.css';

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 2000); // Only show after 500ms delay
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading your content...</p>
    </div>
  );
}