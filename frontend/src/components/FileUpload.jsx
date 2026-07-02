import React, { useState } from 'react';
import { fileUpload } from '../services/transactionService';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);//set the first file outputs an array
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('statement', file);

    try {
      const data = await fileUpload(formData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" className="file-input" onChange={handleFileChange} />
      <button className="btn btn-neutral btn-outline" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;