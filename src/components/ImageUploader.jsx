
import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import jsPDF from 'jspdf';

const ImageToText = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [extractedText, setExtractedText] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setExtractedText('');
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            setError('Veuillez sélectionner une image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        setLoading(true);
        setExtractedText('');
        setError('');

        try {
            const response = await axios.post('https://api-jfc.onrender.com/imgtodoc', formData, { // Assurez-vous que l'URL est correcte
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setExtractedText(response.data.text);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || 'Une erreur est survenue lors de la conversion.');
        } finally {
            setLoading(false);
        }
    };

    const downloadPDF = () => {
        const pdf = new jsPDF();
        const text = extractedText.replace(/<\/?[^>]+(>|$)/g, ""); // Enlève les balises HTML
        pdf.text(text, 10, 10);
        pdf.save('extracted_text.pdf');
    };

    const downloadWord = () => {
        const text = extractedText.replace(/<\/?[^>]+(>|$)/g, ""); // Enlève les balises HTML
        const blob = new Blob([text], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'extracted_text.doc';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Conversion d'Image en Texte</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mb-4 p-2 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`py-2 px-4 rounded text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {loading ? 'Conversion en cours...' : 'Convertir'}
                </button>
            </form>
            {error && <div className="mt-4 text-red-500">{error}</div>}
            {extractedText && (
                <div className="mt-4 bg-gray-100 p-4 rounded">
                    <h3 className="text-lg font-semibold text-gray-700">Texte Extrait :</h3>
                    <ReactQuill 
                        value={extractedText}
                        onChange={setExtractedText}
                        className="text-editor"
                    />
                    <div className="mt-4">
                        <button 
                            onClick={downloadPDF} 
                            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                        >
                            Télécharger PDF
                        </button>
                        <button 
                            onClick={downloadWord} 
                            className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            Télécharger Word
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageToText;

