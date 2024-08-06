import React, { useState } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return Math.min(prevProgress + 5, 100); // Increment by 5
      });
    }, 50); // Update every 50 milliseconds
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f4f4f4]">
      <div className="text-center w-[400px]">
        <div className="mb-4 text-lg font-semibold">
          <span >{progress}</span>% COMPLETE
        </div>
        <div className="h-[25px] w-full bg-[#e0e0e0] border rounded-sm overflow-hidden">
          <div
            className="h-full transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: progress === 100 ? '#0056b3' : '#66b3ff', // Light blue to dark blue at 100%
            }}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 font-bold text-white bg-[#007bff] rounded-sm cursor-pointer hover:bg-[#0056b3]"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default App;
