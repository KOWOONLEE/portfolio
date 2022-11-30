import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Pdfresume from "./pages/PdfResume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pdfresume" element={<Pdfresume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
