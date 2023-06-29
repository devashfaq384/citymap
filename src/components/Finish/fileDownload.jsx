// import React, { useRef } from 'react';
// import { PDFDocument, StandardFonts } from 'pdf-lib';
// import { useSelector } from 'react-redux';

// const PDFDown = () => {
//   const PDFData = useSelector((state) => state.mapGeo);
//   const styleData = useSelector((state) => state.styleState);
//   const text = useSelector((state) => state.textState);
//   const sizeState = useSelector((state) => state.sizeState);
//   const containerRef = useRef(null);

//   console.log( text.title, 'pdfData');

//   async function generatePdf(Location , style , text ,size) {
//     // Create a new PDF document
//     const pdfDoc = await PDFDocument.create();

//     // Add a new page to the document
//     const page = pdfDoc.addPage();

//     // Get the default font and set the font size
//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     page.setFont(font);
//     page.setFontSize(12);

//     // Add the data from your Redux store to the PDF document
//     page.drawText(`Location: ${Location.Location}`, { x: 50, y: 700 });
//     page.drawText(`Style: ${style.name}`, { x: 50, y: 680 });
//     page.drawText(`TextTitle: ${text.title}`, { x: 50, y: 660 });
//     page.drawText(`TextSubtitle: ${text.subTitle}`, { x: 50, y: 640 });
//     page.drawText(`Shape: ${size.shape}`, { x: 50, y: 620 });
//     page.drawText(`Material: ${size.material}`, { x: 50, y: 600 });
//     page.drawText(`Size: ${size.shape}`, { x: 50, y: 580 });

//     // Return the PDF document
//     return pdfDoc;
//   }

//   const handleDownloadPdf = async () => {
//     const pdfDoc = await generatePdf(PDFData,styleData , text , sizeState);

//     // Convert the PDF document to a Blob
//     const pdfBytes = await pdfDoc.save();

//     // Create a download link
//     const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'data.pdf';

//     // Trigger the download
//     link.click();

//     // Clean up
//     URL.revokeObjectURL(url);
//   };

//   return <button onClick={handleDownloadPdf}>Download PDF</button>;
// };

// export default PDFDown;




import React, { useRef } from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { useSelector } from 'react-redux';

const PDFDown = () => {
  const PDFData = useSelector((state) => state.addToCart);
  const styleData = useSelector((state) => state.styleState);
  const text = useSelector((state) => state.textState);
  const sizeState = useSelector((state) => state.sizeState);
  const containerRef = useRef(null);
  

  console.log(PDFData, 'pdfData');

  async function generatePdf(data , style, text, size) {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the document
    const page = pdfDoc.addPage();

    // Get the default font and set the font size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.setFont(font);
    page.setFontSize(12);

    // Add the data from your Redux store to the PDF document
    page.drawText(`Location: ${text.title}`, { x: 50, y: 700 });
    page.drawText(`Style: ${style.name}`, { x: 50, y: 680 });
    page.drawText(`TextTitle: ${text.title}`, { x: 50, y: 660 });
    page.drawText(`TextSubtitle: ${text.subTitle}`, { x: 50, y: 640 });
    // page.drawText(`Shape: ${size.shape}`, { x: 50, y: 620 });
    // page.drawText(`Material: ${data.Material}`, { x: 50, y: 600 });
    // page.drawText(`Size: ${data.Size.name}`, { x: 50, y: 580 });

    // Return the PDF document
    return pdfDoc;
  }

  const handleDownloadPdf = async () => {
    const pdfDoc = await generatePdf(PDFData , styleData , text, sizeState);

    // Convert the PDF document to a Blob
    const pdfBytes = await pdfDoc.save();

    // Create a download link
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.pdf';

    // Trigger the download
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleDownloadPdf}>Download PDF</button>;
};

export default PDFDown;
