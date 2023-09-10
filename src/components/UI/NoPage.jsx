import React from 'react'
import containerStyle, { headingStyle, paragraphStyle } from '../UI/style/Styles'
export default function NoPage() {



  return (
    <div className="container-fluid bg-dark text-white" style={containerStyle}>
      <h1 className="display-1" style={headingStyle}>404 - Page Not Found</h1>
      <p className="lead" style={paragraphStyle}>The page you are looking for does not exist.</p>
    </div>
  );
}

