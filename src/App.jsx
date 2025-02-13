import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router, Route, and Routes
import Report from "./components/ReportPages/page1";
import ReportComLast from "./components/ReportComLast";
import { AppProvider } from './AppContext'; // Import AppProvider
// import ReactDOM from "react-dom";

const App = () => {  
  const [offerTimeLeft, setOfferTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isOfferVisible, setIsOfferVisible] = useState(true);

  // Countdown timer logic
  useEffect(() => {
    if (!isOfferVisible || offerTimeLeft <= 0) return;

    const timer = setInterval(() => {
      setOfferTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, [isOfferVisible, offerTimeLeft]);

  // Auto-hide when timer reaches 0
  useEffect(() => {
    if (offerTimeLeft <= 0) {
      setIsOfferVisible(false);
    }
  }, [offerTimeLeft]);
  return (
    <AppProvider>
    <Router>
      
      <Routes>
        {" "}
        {/* Use Routes to define all your routes */}
        {/* <Route path="/download" element={<Report />} /> */}
        <Route path="/" element={<ReportComLast />} />
        
    
        

       
      </Routes>
    </Router>
    </AppProvider>
  );
};

export default App;
