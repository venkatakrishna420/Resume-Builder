// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { useNavigate } from 'react-router-dom';
// import PreviewWraper from '../components/PreviewWraper';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';


// function Preview() {

//   const store = useSelector((state) => state.formData)
//   const darkMode = useSelector((state) => state.theme)
//   const navigate = useNavigate()
//   const [isDownloading, setIsDownloading] = useState(false);


//   const handleDownload = () => {
//     setIsDownloading(true);
//     const input = document.getElementById("divToPrint");

//     // BACKUP old styles
//     const previousBg = input.style.background;
//     const previousBgImage = input.style.backgroundImage;

//     // TEMPORARY SAFE STYLES 
//     input.style.background = "white";
//     input.style.backgroundImage = "none";


//     html2canvas(input, { scale: 3 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");

//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("resume.pdf");

//       // RESTORE old styles
//       input.style.background = previousBg;
//       input.style.backgroundImage = previousBgImage;
//     });

//     // Waiting time to download resume in pdf
//     setTimeout(() => {
//       setIsDownloading(false);
//       navigate("/resume-success");
//     }, 2000);

//   };




//   useEffect(() => {
//     if (!store && !localStorage.getItem("userData")) {
//       navigate("/")
//     }
//   }, [])


//   return (
//     <div className={`
//   min-h-screen flex p-8 
//   ${darkMode
//         ? "bg-gray-600 text-white"              // Dark mode background + text
//         : "from-gray-50 to-green-50 bg-linear-to-br text-gray-900"
//       }
// `} >


//       <PreviewWraper />


//       {/* Right Side Empty Area (Optional) */}
//       <div className="hide w-2/5 flex justify-center items-center text-gray-500 italic">
//         <p>Preview your resume on the left.</p>
//       </div>

//       {/* Download Button */}
//       <button
//         className=" hide fixed bottom-8 right-10 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg font-medium transition-all hover:scale-105 cursor-pointer"
//         onClick={handleDownload}
//       >
//         {isDownloading ? "⏳ Downloading..." : "📄 Download as PDF"}
//       </button>
//     </div>
//   )
// }

// export default Preview
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PreviewWraper from "../components/PreviewWraper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from '../constant';
import { MdDownload } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { RiArrowGoBackFill } from "react-icons/ri";

function Preview() {
  const store = useSelector((state) => state.formData);
  const darkMode = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    const input = document.getElementById("divToPrint");
    if (!input) {
      console.error("divToPrint element not found!");
      return;
    }
    
    setIsDownloading(true);

    // BACKUP old styles
    const previousBg = input.style.background;
    const previousBgImage = input.style.backgroundImage;

    // TEMPORARY SAFE STYLES
    input.style.background = "white";
    input.style.backgroundImage = "none";

    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");

      // RESTORE old styles
      input.style.background = previousBg;
      input.style.backgroundImage = previousBgImage;

      // Navigate after successful generation
      setTimeout(() => {
        setIsDownloading(false);
        navigate(ROUTES_PATH.RESUME_SUCCESS);
      }, 1000);
    }).catch((error) => {
      console.error("Error generating PDF:", error);
      setIsDownloading(false);
    });
  };

  const handleBack = () => {
  navigate(ROUTES_PATH.FORM_SECTIONS);
};

  // console.log(store, 'state data in preview effect')
  useEffect(() => {
    // Check if store is falsy or an empty object 
    const isStoreEmpty = !store || Object.keys(store).length === 0;
    if (isStoreEmpty && !localStorage.getItem("userData")) {
      navigate(ROUTES_PATH.HOME);
    }
  }, [store, navigate]);

  return (
    <div
      className={`min-h-screen flex p-8 transition-colors ${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Resume Preview */}
      <PreviewWraper />

      {/* Right Side Empty Area */}
      <div className="hide w-2/5 flex justify-center items-center text-gray-500 italic">
        <p>Preview your resume on the left.</p>
      </div>

      {/* Bottom Right Button Group */}
      <div className="hide fixed bottom-8 right-10 flex gap-4">
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
        >
          <RiArrowGoBackFill />
          Back
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg font-medium transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
        >
          {isDownloading ? (
            <>
              <GiSandsOfTime className="animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <MdDownload />
              Download as PDF
            </>
          )}
        </button>

      </div>
    </div>
  );
}

export default Preview;