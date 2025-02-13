import React, { createContext, useState} from 'react';

// Create the context
export const AppContext = createContext();

// API Endpoint
const API_URL = 'https://35.207.211.80/rest/feature_extraction_test_results/';

// Create the provider component
export const AppProvider = ({ children }) => {
  
  const [testData, setTestData] = useState({
    PATIENT_UID: '',
    TRANSACTION_ID: '',
    patientName: '',
    patienDOB: '',
    'Focal Point IOU': '',
    'Joint Attention Error (%)': '',
    'Eye Contact Error': '',
    'Gaze Dispersion (pixels)': '',
    'Gaze Speed (px/sec)': '',
    'Screen Focus (%)': '',
    'Object Tracking Error (px)': '',
    'Social Preference (%)': '',
    'Gaze Holds': '',
    'Saccades (per second)': '',
    'LipSync Recognisability (%)': '',
    'Convo Recognisability (%)': '',
    'meanYaw (deg/sec)': '',
    'meanPitch (deg/sec)': '',
    'meanRoll (deg/sec)': '',
  });

  // Function to fetch test data
  const fetchTestData = async (patient_uid, transaction_id) => {
    console.log("TRYING");
    try {
      const response = await fetch(`https://35.207.211.80/rest/feature_extraction_test_results/`, {
        method: 'POST', // Ensure POST is allowed
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json', // Add this if required
          // 'Access-Control-Allow-Origin': '*',

        },
        mode: 'cors',
        body: JSON.stringify({
          patient_uid,
          transaction_id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      // Update the context state with API response data
      setTestData({
        PATIENT_UID: data.patient_id,
        TRANSACTION_ID: data.transaction_id,
        'Focal Point IOU': data['Focal Point IOU'],
        'Joint Attention Error (%)': data['Joint Attention Error (%)'],
        'Eye Contact Error': data['Eye Contact Error'],
        'Gaze Dispersion (pixels)': data['Gaze Dispersion (pixels)'],
        'Gaze Speed (px/sec)': data['Gaze Speed (px/sec)'],
        'Screen Focus (%)': data['Screen Focus (%)'],
        'Object Tracking Error (px)': data['Object Tracking Error (px)'],
        'Social Preference (%)': data['Social Preference (%)'],
        'Gaze Holds': data['Gaze Holds'],
        'Saccades (per second)': data['Saccades (per second)'],
        'LipSync Recognisability (%)': data['LipSync Recognisability (%)'],
        'Convo Recognisability (%)': data['Convo Recognisability (%)'],
        'meanYaw (deg/sec)': data['meanYaw (deg/sec)'],
        'meanPitch (deg/sec)': data['meanPitch (deg/sec)'],
        'meanRoll (deg/sec)': data['meanRoll (deg/sec)'],
      });
    } catch (error) {
      console.error('Error fetching test data:', error);
    }
  };

  return (
    <AppContext.Provider value={{ testData, setTestData, fetchTestData }}>
      {children}
    </AppContext.Provider>
  );
};
