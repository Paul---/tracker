import React from 'react';

export default function IssuesList({ children }) {
  return (
    <div className='container'>
      <h1>Issues List</h1>
      {children}
    </div>
  );
}
