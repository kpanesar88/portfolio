"use client";

import { FiDownload, FiExternalLink } from 'react-icons/fi';
import './resume.css';

export default function ResumePage() {
  const pdfUrl = '/resume/Karanveer_Resume.pdf';

  return (
    <div className="resume-page-wrapper">
      <div className="pdf-wrapper">
        <div className="pdf-frame">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="pdf-iframe"
            title="Resume Preview"
          />
        </div>
      </div>

      <div className="button-group">
        <a
          href={pdfUrl}
          download="Karanveer_Singh_Resume.pdf"
          className="resume-btn purple"
        >
          <FiDownload className="icon" />
          <span>Download PDF</span>
        </a>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn dark"
        >
          <FiExternalLink className="icon" />
          <span>Open Fullscreen</span>
        </a>
      </div>
    </div>
  );
}
