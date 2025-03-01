import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const AppContext = createContext();

// API Endpoints
const API_URL = "https://35.207.211.80/rest/feature_extraction_test_results/";
const AI_REPORT_URL =
  "https://35.207.211.80/rest/get_ai_report_available_status/";
const PSYCHOLOGIST_REPORT_URL =
  "https://35.207.211.80/rest/get_psychologist_report_available_status/";

// Create the provider component
export const AppProvider = ({ children }) => {
  const [testData, setTestData] = useState({
    PATIENT_UID: "",
    TRANSACTION_ID: "",
    patientName: "",
    patienDOB: "",
    focal_IOU: "",
    joint_attention_error: "",
    eye_contact_error: "",
    gaze_dispersion: "",
    gaze_speed: "",
    screen_focus: "",
    object_tracking_error: "",
    social_preference: "",
    gaze_holds: "",
    saccades: "",
    lipsync_recog: "",
    convo_recog: "",
    yaw: "",
    pitch: "",
    roll: "",
    ai_report_available: "",
    psychologist_report_available: "",
    psychologistformtestsData: "",
  });

  const getURLParameter = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  useEffect(() => {
    // set patient uid and transaction id
    const patient_uid = getURLParameter("PATIENT_UID") || "N/A";
    const transaction_id = getURLParameter("TRANSACTION_ID") || "N/A";

    fetchReportAvailability(patient_uid, transaction_id)
      .then((reportsAvailable) => {
        if (reportsAvailable === undefined) {
          // TODO: if reportsAvailable is undefined, that means, function ended with error, redirect to Reports Not available yet page
        } else {
          setTestData((prevState) => ({
            ...prevState,
            PATIENT_UID: patient_uid,
            TRANSACTION_ID: transaction_id,
            ai_report_available: true,
            psychologist_report_available: true,
          }));

          fetchPsychologistFormResults(patient_uid, transaction_id)
            .then((results) => {
              console.log("psychologist_form_results", results);

              setTestData((prevState) => ({
                ...prevState,
                psychologistformtestsData: results,
              }));

              fetchTestData(patient_uid, transaction_id)
                .then((data) => {
                  console.log('AI results data ', data);

                  setTestData((prevState) => ({
                    ...prevState,
                    featureExtractionTestData: data,
                  }));
                  
                })
                .catch((error) => {
                  console.log("Error fetching test data", error);
                });
            })
            .catch((error) => {
              console.log("Error fetching psychologist form results: ", error);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Function to check AI and Psychologist report availability
  const fetchReportAvailability = async (patient_uid, transaction_id) => {
    try {
      const aiResponse = await fetch(AI_REPORT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patient_uid, transaction_id }),
      });

      const psychologistResponse = await fetch(PSYCHOLOGIST_REPORT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patient_uid, transaction_id }),
      });

      const aiData = await aiResponse.json();
      const psychologistData = await psychologistResponse.json();

      console.log("ai data available = ", aiData.ai_report_available);
      console.log(
        "psychologist data available = ",
        psychologistData.Psychologist_report_available
      );

      return (
        aiData.ai_report_available &&
        psychologistData.Psychologist_report_available
      );
    } catch (error) {
      console.error("Error fetching report availability:", error);
      // TODO: redirect to report not ready yet page
    }
  };

  // set ai and psych report availability

  const fetchPsychologistFormResults = async (patient_uid, transaction_id) => {
    try {
      const response = await axios.post(
        "https://35.207.211.80/rest/get_psychologist_form_results/",
        {
          patient_uid,
          transaction_id,
        }
      );

      const psych_form_results = response.data;

      return psych_form_results;

      // const psychologistFormData = {
      //   PATIENT_UID: data.PATIENT_UID,
      //   TRANSACTION_ID: data.TRANSACTION_ID,
      //   patientName: data.patientName || "",
      //   patienDOB: data.patientDOB || "",
      //   inclenFormData: data.inclenFormData || {},
      //   isaaFormData: data.isaaFormData || {},
      //   carsFormData: data.carsFormData || {},
      //   dataCollectionMode: data.dataCollectionMode || [],
      //   patienthistoryform1Data: data.patienthistoryform1Data || "",
      //   patienthistoryform2Data: data.patienthistoryform2Data || "",
      //   patienthistoryform3Data: data.patienthistoryform3Data || "",
      //   patienthistoryform4Data: data.patienthistoryform4Data || "",
      //   videolanguage: data.videolanguage || "",
      //   mchatscore: data.mchatscore || "",
      //   carsscore: data.carsscore || "",
      //   isaascore: data.isaascore || "",
      //   inclenscore: data.inclenscore || "",
      //   inclenScores: data.inclenScores || {},
      //   inclenFullScore: data.inclenFullScore || "",
      //   patienthistoryform1data: data.patienthistoryform1data || {},
      //   patienthistoryform2data: data.patienthistoryform2data || {},
      //   patienthistoryform3data: data.patienthistoryform3data || {},
      //   mchatScore: data.mchatScore || "",
      //   patienthistoryform4data: data.patienthistoryform4data || {},
      // };

      // setTestData((prevData) => ({
      //   ...prevData,
      //   ...psychologistFormData,
      // }));
    } catch (error) {
      console.error("Error fetching psychologist form results:", error);
      // TODO: redirect to error page
    }
  };

  // Function to fetch test data
  const fetchTestData = async (patient_uid, transaction_id) => {
    // console.log("Fetching test data...");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patient_uid, transaction_id }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log("Failed to fetch ai test data");
        // TODO: redirect to error page
      }
      console.log("Data= ",data);
      setTestData({
        PATIENT_UID: data.patient_id || '',
        TRANSACTION_ID: data.transaction_id || '',
        focal_IOU: data['Focal Point IOU'] || '',
        joint_attention_error: data['Joint Attention Error (%)'] || '',
        eye_contact_error: data['Eye Contact Error'] || '',
        gaze_dispersion: data['Gaze Dispersion (pixels)'] || '',
        gaze_speed: data['Gaze Speed (px/sec)'] || '',
        screen_focus: data['Screen Focus (%)'] || '',
        object_tracking_error: data['Object Tracking Error (px)'] || '',
        social_preference: data['Social Preference (%)'] || '',
        gaze_holds: data['Gaze Holds'] || '',
        saccades: data['Saccades (per second)'] || '',
        lipsync_recog: data['LipSync Recognisability (%)'] || '',
        convo_recog: data['Convo Recognisability (%)'] || '',
        yaw: data['meanYaw (deg/sec)'] || '',
        pitch: data['meanPitch (deg/sec)'] || '',
        roll: data['meanRoll (deg/sec)'] || '',
        
      });
      return data;
    } catch (error) {
      console.error("Error fetching test data:", error);
      // TODO: redirect to error page
    }
  };
  // console.log("Testdata at context= ",testData);
  return (
    <AppContext.Provider value={{ testData, setTestData, fetchTestData }}>
      {children}
    </AppContext.Provider>
  );
};
