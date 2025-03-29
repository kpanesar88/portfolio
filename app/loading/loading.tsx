'use client'
import { useState, useEffect } from 'react';
import './loading.css';

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 500); // Show after 500ms delay
    
    // Detect browser refresh
    const handleBeforeUnload = () => setShowLoader(true);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
}