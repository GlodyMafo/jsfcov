import React, { useState } from 'react';
import { FaFilePdf, FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios'; // Import axios

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateFile(selectedFile);
  };

  const validateFile = (selectedFile) => {
    if (selectedFile && selectedFile.type !== 'application/pdf') {
      setMessage('Please select a valid PDF file.');
      setFile(null);
    } else {
      setFile(selectedFile);
      setMessage('');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/pdftoword', formData, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      const originalFileName = file.name.split('.').slice(0, -1).join('.');
      const fileName = `${originalFileName} By_Josephine_Files_Converter.docx`;

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();

      setMessage('Conversion successful! File is downloading...');
      setFile(null);
      e.target.reset();
    } catch (error) {
      console.error('An error occurred during the conversion:', error);
      setMessage('An error occurred during the conversion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div
        className={`border-2 border-dashed p-8 rounded-md text-center transition-colors duration-200 
        ${isDragging ? 'border-[#E66917] bg-indigo-50' : 'border-gray-300'}`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <input 
          id="fileInput"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        {!file ? (
          <div className="flex flex-col items-center">
            <FaCloudUploadAlt className="text-5xl text-[#E66917] mb-4" />
            <p className="text-gray-600">Glissez et déposez un fichier PDF ici ou cliquez pour télécharger</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <FaFilePdf className="text-5xl text-red-600 mb-4" />
            <p className="text-gray-600">Selected file: {file.name}</p>
          </div>
        )}
      </div>

      {file && !loading && (
        <div className="space-y-4 mt-4">
          <form onSubmit={handleSubmit}>
            <button 
              type="submit" 
              className={`w-full bg-[#E66917] text-white py-2 px-4 rounded hover:bg-[#59252D] transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Converting...' : 'Convert'}
            </button>
          </form>
        </div>
      )}

      {loading && <p className="text-center mt-4 text-gray-600">Conversion in progress...</p>}
      {message && <p className="text-center mt-4 text-gray-600">{message}</p>}
    </div>
  );
};

export default FileUpload;
