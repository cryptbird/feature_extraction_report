import React, { useContext, useEffect, useState } from "react";
import img1 from "../../assets/report/img1.png";
import img2 from "../../assets/report/img2.png";
import img3 from "../../assets/report/img3.png";
import "./pdf.css";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";

// Data{
//     {
//         "01122022_shree": {
//             "patient_id": "01122022_shree",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 74,
//             "Eye Contact Error": 31,
//             "Gaze Dispersion (pixels)": 20,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 70,
//             "Object Tracking Error (px)": 77,
//             "Social Preference (%)": 32,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 41,
//             "LipSync Recognisability (%)": 10,
//             "Convo Recognisability (%)": 10,
//             "meanYaw (deg/sec)": 61,
//             "meanPitch (deg/sec)": 60,
//             "meanRoll (deg/sec)": 94
//         },
//         "04022020_bunny": {
//             "patient_id": "04022020_bunny",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 84,
//             "Eye Contact Error": 18,
//             "Gaze Dispersion (pixels)": 15,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 94,
//             "Object Tracking Error (px)": 84,
//             "Social Preference (%)": 66,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 44,
//             "LipSync Recognisability (%)": 56,
//             "Convo Recognisability (%)": 27,
//             "meanYaw (deg/sec)": 66,
//             "meanPitch (deg/sec)": 19,
//             "meanRoll (deg/sec)": 97
//         },
//         "06022025_garvit": {
//             "patient_id": "06022025_garvit",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 83,
//             "Eye Contact Error": 15,
//             "Gaze Dispersion (pixels)": 14,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 92,
//             "Object Tracking Error (px)": 75,
//             "Social Preference (%)": 47,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 40,
//             "LipSync Recognisability (%)": 64,
//             "Convo Recognisability (%)": 69,
//             "meanYaw (deg/sec)": 77,
//             "meanPitch (deg/sec)": 20,
//             "meanRoll (deg/sec)": 85
//         },
//         "06022025_hardik": {
//             "patient_id": "06022025_hardik",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 10,
//             "Eye Contact Error": 10,
//             "Gaze Dispersion (pixels)": 13,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 92,
//             "Object Tracking Error (px)": 90,
//             "Social Preference (%)": 10,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 62,
//             "LipSync Recognisability (%)": 10,
//             "Convo Recognisability (%)": 100,
//             "meanYaw (deg/sec)": 10,
//             "meanPitch (deg/sec)": 10,
//             "meanRoll (deg/sec)": 10
//         },
//         "06022025_neeraj": {
//             "patient_id": "06022025_neeraj",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 68,
//             "Eye Contact Error": 38,
//             "Gaze Dispersion (pixels)": 19,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 65,
//             "Object Tracking Error (px)": 84,
//             "Social Preference (%)": 59,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 30,
//             "LipSync Recognisability (%)": 10,
//             "Convo Recognisability (%)": 10,
//             "meanYaw (deg/sec)": 53,
//             "meanPitch (deg/sec)": 10,
//             "meanRoll (deg/sec)": 50
//         },
//         "06022025_riyansh": {
//             "patient_id": "06022025_riyansh",
//             "transaction_id": "NA",
//             "Focal Point IOU": 100,
//             "Joint Attention Error (%)": 42,
//             "Eye Contact Error": 23,
//             "Gaze Dispersion (pixels)": 25,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 81,
//             "Object Tracking Error (px)": 85,
//             "Social Preference (%)": 47,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 71,
//             "LipSync Recognisability (%)": 91,
//             "Convo Recognisability (%)": 32,
//             "meanYaw (deg/sec)": 71,
//             "meanPitch (deg/sec)": 10,
//             "meanRoll (deg/sec)": 100
//         },
//         "11022019_atharav": {
//             "patient_id": "11022019_atharav",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 73,
//             "Eye Contact Error": 20,
//             "Gaze Dispersion (pixels)": 13,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 88,
//             "Object Tracking Error (px)": 86,
//             "Social Preference (%)": 23,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 24,
//             "LipSync Recognisability (%)": 43,
//             "Convo Recognisability (%)": 33,
//             "meanYaw (deg/sec)": 82,
//             "meanPitch (deg/sec)": 52,
//             "meanRoll (deg/sec)": 100
//         },
//         "19122020_srishti": {
//             "patient_id": "19122020_srishti",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 74,
//             "Eye Contact Error": 21,
//             "Gaze Dispersion (pixels)": 16,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 88,
//             "Object Tracking Error (px)": 75,
//             "Social Preference (%)": 43,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 37,
//             "LipSync Recognisability (%)": 26,
//             "Convo Recognisability (%)": 10,
//             "meanYaw (deg/sec)": 62,
//             "meanPitch (deg/sec)": 10,
//             "meanRoll (deg/sec)": 71
//         },
//         "24122020_kabeer": {
//             "patient_id": "24122020_kabeer",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 73,
//             "Eye Contact Error": 16,
//             "Gaze Dispersion (pixels)": 17,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 93,
//             "Object Tracking Error (px)": 86,
//             "Social Preference (%)": 39,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 61,
//             "LipSync Recognisability (%)": 41,
//             "Convo Recognisability (%)": 43,
//             "meanYaw (deg/sec)": 70,
//             "meanPitch (deg/sec)": 13,
//             "meanRoll (deg/sec)": 76
//         },
//         "29042022_charvik": {
//             "patient_id": "29042022_charvik",
//             "transaction_id": "NA",
//             "Focal Point IOU": 10,
//             "Joint Attention Error (%)": 68,
//             "Eye Contact Error": 33,
//             "Gaze Dispersion (pixels)": 17,
//             "Gaze Speed (px/sec)": 10,
//             "Screen Focus (%)": 98,
//             "Object Tracking Error (px)": 88,
//             "Social Preference (%)": 40,
//             "Gaze Holds": 10,
//             "Saccades (per second)": 66,
//             "LipSync Recognisability (%)": 10,
//             "Convo Recognisability (%)": 10,
//             "meanYaw (deg/sec)": 100,
//             "meanPitch (deg/sec)": 10,
//             "meanRoll (deg/sec)": 69
//         }
//     }
// }

// const Page1 = () => {
//   const [ autismProbabilityText, setAutismProbabilityText] = useState('');
//   // const getURLParameter = (name) => {
//   //           const urlParams = new URLSearchParams(window.location.search);
//   //           return urlParams.get(name);
//   //         };
//   const { testData } = useContext(AppContext);
//     console.log(JSON.stringify(testData) + 'at page 1');
//   //   console.log(testData.patienDOB);
//   const location = useLocation();
//   const getQueryParams = (search) => {
//     const params = new URLSearchParams(search);
//     return {
//       dob: params.get("patientDOB"),
//       name: params.get("name"),
//       timestamp: params.get("timestamp"),
//     };
//   };

//   const { dob, name, timestamp } = getQueryParams(location.search);
//   const birthDate = new Date(dob);
//   const today = new Date();
//   // console.log(dob);
//   let agep = today.getFullYear() - birthDate.getFullYear();
//   const progressData = [
//     { label: "Social Preference", value: testData.social_preference },
//     // { label: "Eye Contact", value: testData.eye_contact_error },
//     { label: "Joint Attention", value: testData.joint_attention_error },
//     { label: "Gaze Hold", value: testData.gaze_holds },
//     { label: "Gaze Speed", value: testData.gaze_speed },
//     { label: "Attention Shift Frequency", value: testData.saccades },
//     { label: "Gaze Dispersion", value: testData.gaze_dispersion },
//     { label: "Focal Points", value: testData.focal_IOU },
//     { label: "Screen Focus", value: testData.screen_focus },
//     { label: "Object Tracking", value: testData.object_tracking_error },
//   ];

//   function calculateAutismLine(){
//     if(testData.autismProbability >= 0.0 && testData.autismProbability < 0.2 ){
//       setAutismProbabilityText("Low likelihood of autism traits observed.");
//     }
//     else if(testData.autismProbability >= 0.2 && testData.autismProbability < 0.4){
//       setAutismProbabilityText("Minimal traits associated with autism detected.");
//     }
//     else if(testData.autismProbability >= 0.4 && testData.autismProbability <= 1.0){
//       setAutismProbabilityText("Moderate presence of traits related to autism.");
//     }
//   }

//   const progressData2 = [
//     // { label: 'Social Preference', value: 85 },
//     { label: "Head Control", value: 78 },
//     // { label: 'Eye Contact', value: 75 },
//     // { label: 'Joint Attention', value: 80 },
//   ];
//   const averageValue = Math.round(
//     (Number(testData.social_preference) +
//       Number(testData.eye_contact_error) +
//       Number(testData.joint_attention_error) +
//       Number(testData.gaze_holds) +
//       Number(testData.gaze_speed) +
//       Number(testData.saccades) +
//       Number(testData.gaze_dispersion) +
//       Number(testData.focal_IOU) +
//       Number(testData.screen_focus) +
//       Number(testData.object_tracking_error)) /
//       10
//   );

//   // console.log(testData);
//   return (
//     <div className="pdf-image flex flex-col font-manrope items-center p-8 bg-white min-h-screen">
//       <div className="pdf-page bg-white p-8 shadow-md rounded-md w-[210mm] h-[297mm]">
//         <div>
//           <h1 className="text-left text-sm">Detailed Featured report</h1>
//           <div className="w-full border-t-2 mt-2 border-[#9C00AD]"></div>
//         </div>

//         <div className="w-full items-center justify-start  flex mt-4">
//           <div className="w-[25%]">
//             <img src={img1} alt="Patient Image" />
//           </div>
//           <div className="font-manrope text-xs text-left ml-5">
//             <h3>Patient Details:</h3>
//             <h3>Name: {name}</h3>
//             {/* <h3>Age: {agep}</h3> */}
//             <h3>Date of Birth: {dob}</h3>
//             {/* <h3>Gender : Female</h3> */}
//           </div>
//         </div>

//         <h3 className="text-center font-manrope mt-4 font-semibold text-lg">
//           Developmental Skills Summary
//         </h3>

//         <div className="w-full justify-center font-manrope mt-8 font-semibold gap-5 px-5 items-center flex">
//           <div className="w-[45%] justify-center font-manrope mt-2 font-semibold items-center flex">
//             <div className="w-[10vw] flex flex-col justify-center items-center">
//               <img src={img2} alt="Visual Interest" />
//               <div className="w-[12vw] p-4 h-[12vw] bg-[#BD35E5] flex flex-col items-center justify-center rounded-3xl text-white">
//                 <h4 className="text-center"> Visual Interest Response</h4>
//                 <h4>{averageValue}%</h4>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-[50%] flex-col">
//             {progressData.map((item, index) => (
//               <div key={index} className="flex flex-col w-full">
//                 {/* Label Row */}
//                 <div className="flex">
//                   <h4 className="text-xs text-black ml-3 mb-2 relative">
//                     {item.label}
//                   </h4>
//                 </div>

//                 {/* Progress Bar Row */}
//                 <div className="w-full h-[4vh] bg-[#e5e7eb] rounded-full mb-2">
//                   <div
//                     className={`h-full rounded-full flex justify-between items-center p-1 ${
//                       item.value >= 60
//                         ? "bg-green-500"
//                         : item.value >= 40
//                         ? "bg-yellow-500"
//                         : "bg-red-500"
//                     }`}
//                     style={{
//                       width: `${
//                         item.value < 20 ? item.value + 5 : item.value
//                       }%`,
//                     }}
//                   >
//                     <div></div>
//                     <div
//                       className="w-7 h-7 bg-white rounded-full flex justify-center items-center"
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <h5 className="text-[10px] text-[#000] font-raleway mb-1">
//                         {item.value}%
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full justify-center font-manrope mt-8 font-semibold gap-5 px-5 items-center flex">

//         </div>
//         <br />
//         <br />

//         <div className="w-full flex justify-between items-center text-xs font-manrope mt-0 border-t-2 border-[#800080] pt-0">
//           <span className="text-[10px]">{name}</span>
//           <div className="text-center text-[10px]">
//             <span>Received Date: {timestamp}</span>
//             <br />
//             <span>ID: Report Generation Date:</span>
//           </div>
//           <span className="text-[10px]">Page 06</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page1;

const Page1 = () => {
  const lstm_cnn_model_threshold = 0.4;
  const txgb_model_threshold = 0.5;

  const getURLParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  function getAggregatedAutismScore(testData) {
    if (
      testData["TXGB_model_proba"] === undefined &&
      testData["etsp_lstm_cnn_model_prediction"] === undefined
    ) {
      return -1;
    }

    if (
      testData["TXGB_model_proba"] > txgb_model_threshold &&
      testData["etsp_lstm_cnn_model_prediction"] > lstm_cnn_model_threshold
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  const patient_uid = getURLParameter("PATIENT_UID") || "N/A";
  const transaction_id = getURLParameter("TRANSACTION_ID") || "N/A";
  const name = getURLParameter("name") || "N/A";
  const dob = getURLParameter("patientDOB") || "N/A";
  const { testData, fetchTestData } = useContext(AppContext);

  // add slashes to dob in year month date formate
  const formattedDob = dob.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3");

  useEffect(() => {
    fetchTestData(patient_uid, transaction_id);
    console.log('my debug log', testData)
  }, [patient_uid, transaction_id]);

  return (
    <div className="pdf-page" style={styles.container}>
      {/* Top right decorative element - now matching bottom left with circles */}
      <div style={styles.topRightDecoration}>
        <div style={styles.topCircleOne}></div>
        <div style={styles.topCircleTwo}></div>
      </div>

      <div style={styles.contentWrapper}>
        <h1 style={styles.heading}>Developmental Screening Results</h1>

        <div style={styles.patientDetailsBox}>
          <p style={styles.resultText}>Name: {name}<br/>
          Date of Birth: {formattedDob}<br/></p>
        </div>

        <div style={styles.textContainer}>
          <div style={styles.resultBox}>
            {getAggregatedAutismScore(testData) === 0 ? (
              <p style={styles.resultText}>
                Your child does <span style={styles.highlight}>not</span> show{" "}
                <span style={styles.highlight}>autistic traits</span> based on
                this screening.
              </p>
            ) : getAggregatedAutismScore(testData) === 1 ? (
              <p style={styles.resultText}>
                Your child <span style={styles.highlight}>shows</span>{" "}
                <span style={styles.highlight}>autistic traits</span> based on
                this screening.
              </p>
            ) : (
              <p style={styles.resultText}>
                Unfortunately, we do{" "}
                <span style={styles.highlight}>
                  not have enough information
                </span>{" "}
                to determine whether your child shows autistic traits.
              </p>
            )}
          </div>

          <div style={styles.overviewBox}>
            <h3 style={styles.overviewTitle}>What This Means</h3>
            <p style={styles.overviewText}>
              This screening is designed to detect the possibility of social and
              communication challenges that your child might be experiencing.
            </p>
            <p style={styles.overviewText}>
              Remember that this is just a screening tool. For a comprehensive
              evaluation, please consult with a developmental pediatrician or
              child psychologist.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom left decorative element */}
      <div style={styles.bottomLeftDecoration}>
        <div style={styles.bottomCircleOne}></div>
        <div style={styles.bottomCircleTwo}></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#ffffff",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    minHeight: "100vh",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: "1",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "30px",
    color: "#333",
    borderBottom: "2px solid #8e44ad",
    paddingBottom: "10px",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    maxWidth: "500px",
    zIndex: 1,
  },
  resultBox: {
    background: "#f9f4ff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px 0",
    width: "100%",
    border: "1px solid #8e44ad",
  },
  resultText: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333",
  },
  highlight: {
    color: "#8e44ad",
    fontWeight: "bold",
  },
  overviewBox: {
    background: "#f9f4ff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "100%",
    marginTop: "15px",
    border: "1px solid #8e44ad",
  },
  overviewTitle: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#8e44ad",
  },
  overviewText: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "10px",
    textAlign: "center",
  },
  // Top right decoration with circles to match bottom left
  topRightDecoration: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "200px",
    height: "200px",
    zIndex: 0,
  },
  topCircleOne: {
    position: "absolute",
    top: "-70px",
    right: "-30px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "8px solid #8e44ad",
  },
  topCircleTwo: {
    position: "absolute",
    top: "-50px",
    right: "-10px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "5px solid #c27fe0",
  },
  // Bottom left decoration
  bottomLeftDecoration: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "200px",
    height: "200px",
    zIndex: 0,
  },
  bottomCircleOne: {
    position: "absolute",
    bottom: "-70px",
    left: "-30px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "8px solid #8e44ad",
  },
  bottomCircleTwo: {
    position: "absolute",
    bottom: "-50px",
    left: "-10px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "5px solid #c27fe0",
  },
  patientDetailsBox: {
    background: "#f9f4ff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    border: "1px solid #8e44ad",
  }
};

export default Page1;
