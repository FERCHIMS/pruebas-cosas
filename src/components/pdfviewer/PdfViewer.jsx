'use client'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './pdf.css'

const PdfViewer = ({ fileUrl }) => {
    return (
        <div className='pdf-container h-full w-full '>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl={fileUrl} />
            </Worker>
        </div>
    );
};

export default PdfViewer;