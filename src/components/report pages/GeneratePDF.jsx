import React, { useRef, useState, useContext, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Commnpdfpage from './Commnpdfpage';
import imglogo from '/aignosislogo.png';
import { AppContext } from "../../AppContext";
import ISAA from './isaa';
import ISAA2 from './isaa2';
import ISAA3 from './isaa3';
import ISAA4 from './isaa4';
import MCHAT from './mchat';
import MCHAT2 from './mchat2';
import MCHAT3 from './mchat3';
import CARS from './cars';
import CARS2 from './cars2';
import CARS3 from './cars3';

const pdfData = [
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738767409455_page1.png',
        alttext:'report first page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738767504591_page2.png',
        alttext:'report second page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768231265_page3.png',
        alttext:'report third page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768279180_page4.png',
        alttext:'report four page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768308524_page5.png',
        alttext:'report fifth page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768377852_page6.png',
        alttext:'report six page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768391375_page7.png',
        alttext:'report seven page',
    },
]


const SecondpdfData = [
    // {
    //     url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768677082_page8.png',
    //     alttext:'report eight page',
    // },
    // {
    //     url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768918579_page9.png',
    //     alttext:'report nine page',
    // },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768941181_page10.png',
        alttext:'report ten page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738768955924_page11.png',
        alttext:'report eleven page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769196127_page12.png',
        alttext:'report tweleve page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769245551_page13.png',
        alttext:'report thireteen page',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769259360_page14.png',
        alttext:'report  page 14',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769273519_page15.png',
        alttext:'report page 15',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769286119_page16.png',
        alttext:'report page 16',
    },
    {
        url:'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738769299141_page17.png',
        alttext:'report page 17',
    },
]

// const ComponentToPrint = React.forwardRef((props, ref) => (
//     <div  id="pdf-container"  ref={ref}  className="p-5">
//          {pdfData.map((item, index) => (
//         <Commnpdfpage
//         key={index}
//         src={item.url}
//         alttext={item.alttext}
//         />
//     ))}
//         <Page1 />
//         <Page2 />
//         <Page3 />
//         <Page4 />
//         <Page5 />
//         {SecondpdfData.map((item, index) => (
//         <Commnpdfpage
//         key={index}
//         src={item.url}
//         alttext={item.alttext}
//         />
//     ))}
//     </div>
// ));
const ComponentToPrint = React.forwardRef((props, ref) => (
  <div id="pdf-container" ref={ref} style={{ width: "794px", minHeight: "1123px" }}>
    {/* Only include images that are NOT Page2 & Page3 */}
    {pdfData
    //   .filter((item) => !item.alttext.includes("second page") && !item.alttext.includes("third page"))
      .map((item, index) => (
        <Commnpdfpage key={index} src={item.url} alttext={item.alttext} />
      ))}

    {/* Ensure unique page components */}
    <div className="pdf-page" style={{ width: "794px", minHeight: "1123px" }}>
      <Page1 />
    </div>
    {/* <div className="pdf-page" style={{ width: "794px", minHeight: "1123px" }}>
      <Page2 />
    </div> */}
    <div className="pdf-page" style={{ width: "794px", minHeight: "1123px" }}>
      <Page3 />
    </div>
   {/* <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <ISAA />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <ISAA2 />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <ISAA3 />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <ISAA4 />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <MCHAT />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <MCHAT2 />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <MCHAT3 />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <CARS />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <CARS2 />
    </div>
    <div className="pdf-page isaa-page" style={{ width: "794px", minHeight: "1123px" }}>
      <CARS3 />
    </div>
    */}
    {/* <div className="pdf-page" style={{ width: "794px", minHeight: "1123px" }}>
      <Page5 />
    </div> */}

    {SecondpdfData.map((item, index) => (
      <Commnpdfpage key={index} src={item.url} alttext={item.alttext} />
    ))}
  </div>
));


const GeneratePDF = () => {
  const getURLParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  const patient_uid = (getURLParameter("PATIENT_UID") || "N/A");
  const transaction_id = getURLParameter("TRANSACTION_ID") || "N/A";
    const { testData, fetchTestData } = useContext(AppContext);
    // const { fetchTestData } = useContext(AppContext);

  useEffect(() => {
    fetchTestData(patient_uid, transaction_id);
  }, []);
  
    const name=testData.name;
    const componentRef = useRef();  
    const [loading, setLoading] = useState(false); // Loader state

    const generatePDF = async () => {
      setLoading(true); // Show loader when PDF generation starts
      const pdf = new jsPDF({
        orientation: "p", 
        unit: "mm", 
        format: "a4",
        compress: true, // Enable compression
    });
            const pages = document.querySelectorAll(".pdf-page"); 
    
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            if(i===7 || i===9 || i===11 || i===13 || i===15){
                continue;
            }
            try {
              await new Promise((resolve) => setTimeout(resolve, 1500)); // small delay for rendering
                const canvas = await html2canvas(page, {
                    useCORS: true,
                    scale: 2, // Ensure high resolution
                    backgroundColor: "#ffffff", // Avoid transparency issues
                    width: 794, 
                    height: 1123
                });
    
                const imgData = canvas.toDataURL("image/png", 1.0); 
    
                if (i !== 0) pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, 0, 210, 297 ); // A4 size in mm
    
            } catch (error) {
                console.error("Error capturing page:", error);
            }
        }
    
        pdf.save(`${name}_report.pdf`);
        setLoading(false); // Hide loader after download is complete

    };
    
  
  
  
  
    


      
    return (
      <div className="text-center ml-[30%]">
        <button
        className="mt-5 px-4 ml-[-30%] py-2 bg-blue-600 text-white rounded"
        onClick={generatePDF}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate PDF"}
      </button>
      <ComponentToPrint ref={componentRef} />
      <center>
      {loading && (

        
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-4 bg-white rounded-lg">
            <img src={imglogo} alt=""  style={{scale:'1', height:'15vh'}}/>
            <p className="text-lg font-semibold text-gray-700">Generating PDF...</p>
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mt-2"></div>
          </div>
        </div>
        
      )}
      </center>
    </div>
  );
};
  
  export default GeneratePDF;