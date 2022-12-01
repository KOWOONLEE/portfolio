import React, { useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyDocument: any = Document;
const MyPage: any = Page;

const Pdfresume = () => {
  const [numPages, setNumPage] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: null }) {
    setNumPage(numPages);
    setPageNumber(1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Styledpdfresume>
          <MyDocument
            file="/kowoon_resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <MyPage pageNumber={pageNumber} />
          </MyDocument>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Styledpdfresume>
      </header>
    </div>
  );
};
export default Pdfresume;
const Styledpdfresume = styled.div`
  display: flex;
`;
