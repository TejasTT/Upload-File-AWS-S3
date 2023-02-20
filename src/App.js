import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
      <h1 className='title'>Upload File to AWS-S3</h1>
      <input className='inputField' type="file" onChange={handleFileChange} />
      <button className='button' onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;