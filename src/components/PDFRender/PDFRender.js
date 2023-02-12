import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './styles.less';

const PDFRender = ({ file, onlyFirstPage = false }) => {
  
  const [numPages, setNumPages] = useState(null);
  
  function onDocumentLoadSuccess({ numPages }) {
    if (onlyFirstPage) {
      setNumPages(1);
    } else {
      setNumPages(numPages);
    }
  };

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={(error) => console.log("Inside Error", error)}
    >
      {Array.apply(null, Array(numPages))
        .map((x, i)=>i+1)
        .map(page => <Page pageNumber={page}/>)}
    </Document>
  );
};

export default PDFRender;