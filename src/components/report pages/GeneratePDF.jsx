import React, { useRef, useState, useContext, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Page1 from "./Page1";
import Commnpdfpage from "./Commnpdfpage";
import imglogo from "/aignosislogo.png";
import { AppContext } from "../../AppContext";

const pdfData = [
  {
    url:
      "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/1738767409455_page1.png",
    alttext: "report first page",
  },
  {
    url: "https://i.ibb.co/ch8CB38Q/Aignosis-Sample-Report-page-0002.jpg",
    alttext: "report second page",
  },
  {
    url: "https://i.ibb.co/7tzZXn7h/Aignosis-Sample-Report-page-0003.jpg",
    alttext: "report third page",
  },
  {
    url: "https://i.ibb.co/35CXNPgw/Aignosis-Sample-Report-page-0004.jpg",
    alttext: "report four page",
  },
  {
    url: "https://i.ibb.co/Pv6hF2zL/Aignosis-Sample-Report-page-0005.jpg",
    alttext: "report fifth page",
  },
  {
    url: "https://i.ibb.co/5hPKgM91/Aignosis-Sample-Report-page-0006.jpg",
    alttext: "report six page",
  },
  {
    url: "https://i.ibb.co/1YP9HxPW/Aignosis-Sample-Report-page-0007.jpg",
    alttext: "report seven page",
  },
];

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
    url: "https://i.ibb.co/HDcb3xdY/Aignosis-Sample-Report-page-0015.jpg",
    alttext: "report ten page",
  },
  {
    url: "https://i.ibb.co/cSKPtpmb/Aignosis-Sample-Report-page-0016.jpg",
    alttext: "report eleven page",
  },
  {
    url: "https://i.ibb.co/gNQDftQ/Aignosis-Sample-Report-page-0017.jpg",
    alttext: "report tweleve page",
  },
  {
    url: "https://i.ibb.co/zV7jBZmX/Aignosis-Sample-Report-page-0018.jpg",
    alttext: "report thireteen page",
  },
  {
    url: "https://i.ibb.co/rKDmbkBt/Aignosis-Sample-Report-page-0019.jpg",
    alttext: "report  page 14",
  },
  {
    url: "https://i.ibb.co/8nkPd4T9/Aignosis-Sample-Report-page-0020.jpg",
    alttext: "report page 15",
  },
  {
    url: "https://i.ibb.co/kssPTvqD/Aignosis-Sample-Report-page-0021.jpg",
    alttext: "report page 16",
  },
  {
    url: "https://i.ibb.co/dJkxnjFV/Aignosis-Sample-Report-page-0022.jpg",
    alttext: "report page 17",
  },
];

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div
    id="pdf-container"
    ref={ref}
    style={{ width: "794px", minHeight: "1123px" }}
  >
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

    {SecondpdfData.map((item, index) => (
      <Commnpdfpage key={index} src={item.url} alttext={item.alttext} />
    ))}
  </div>
));

const GeneratePDF = () => {
  // const getURLParameter = (name) => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   return urlParams.get(name);
  // };

  // const patient_uid = getURLParameter("PATIENT_UID") || "N/A";
  // const transaction_id = getURLParameter("TRANSACTION_ID") || "N/A";
  // const { testData, fetchTestData } = useContext(AppContext);

  // useEffect(() => {
  //   fetchTestData(patient_uid, transaction_id);
  //   console.log("testData in page 1 is", testData);

  //   console.log("patient_uid in page 1 is", patient_uid);
  //   console.log("transaction_id in page 1 is", transaction_id);
  // }, [patient_uid, transaction_id]);

  // const name = getURLParameter("name") || "N/A";

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
      if (i === 7 || i === 9 || i === 11 || i === 13 || i === 15) {
        continue;
      }
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // small delay for rendering
        const canvas = await html2canvas(page, {
          useCORS: true,
          scale: 2, // Ensure high resolution
          backgroundColor: "#ffffff", // Avoid transparency issues
          width: 794,
          height: 1123,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);

        if (i !== 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size in mm
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
              <img
                src={imglogo}
                alt=""
                style={{ scale: "1", height: "15vh" }}
              />
              <p className="text-lg font-semibold text-gray-700">
                Generating PDF...
              </p>
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mt-2"></div>
            </div>
          </div>
        )}
      </center>
    </div>
  );
};

export default GeneratePDF;
