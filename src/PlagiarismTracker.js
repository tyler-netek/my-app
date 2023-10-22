import React, { useState } from 'react';
import './PlagiarismTracker.css'; 

const PlagiarismTracker = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const checkPlagiarism = () => {
    setResult('Original!');
  };

  return (
    <div className="plagiarism-container">
      <textarea
        className="text-input"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="check-button" onClick={checkPlagiarism}>
        Check Plagiarism
      </button>
      <p className="result">{result}</p>
    </div>
  );
};

export default PlagiarismTracker;