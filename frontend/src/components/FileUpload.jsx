import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fileUpload } from '../services/transactionService';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);//set the first file outputs an array
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('statement', file);

    try {
      await fileUpload(formData);
      navigate('/transactions');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='p-2 dark:bg-gray-700 rounded-xl inline-block'>
      <input type="file" accept=".csv" className="file-input" onChange={handleFileChange} />
      <button className="btn btn-neutral btn-outline" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;