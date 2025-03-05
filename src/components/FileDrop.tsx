import React, { useState, DragEvent, useCallback, useMemo } from 'react';

interface FileDetails {
  name: string;
  type: string;
  size: number;
}

const FileDrop: React.FC = () => {
  const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragging(false);
  };

  // Computed values
  const classNames = useMemo(() => `file-drop ${isDragging ? 'is-dragging' : ''}`, [isDragging]);
  const emptyStateMessage = useMemo(() => isDragging ? 'You’re going for it! 🚀' : 'Drag and drop a file here 🫳 📁', [isDragging]);
  // Cached methods
  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (file) {
      setFileDetails({
        name: file.name,
        type: file.type,
        size: file.size
      });
    }
  }, []);

  return (
    <div 
      className={classNames}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {fileDetails ? (
        <div className='details'>
          <h3>File Details:</h3>
          <p><b>Name:</b> {fileDetails.name}</p>
          <p><b>Type:</b> {fileDetails.type}</p>
          <p><b>Size:</b> {fileDetails.size} bytes</p>
        </div>
      ) : (
        <p>{emptyStateMessage}</p>
      )}
    </div>
  );
};

export default FileDrop;
