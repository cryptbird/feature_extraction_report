import React, { useContext, useEffect, useState } from "react";
import img1 from "../../assets/report/img1.png";
import img2 from "../../assets/report/img2.png";
import img3 from "../../assets/report/img3.png";
import "./pdf.css";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";

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

  // convert dob from yyyymmdd to ddmmyyyy
  const formattedDob = `${dob.slice(6, 8)}${dob.slice(4, 6)}${dob.slice(0, 4)}`;
  // convert ddmmyyyy to dd/mm/yyyy
  const formattedDobWithSlashes = `${formattedDob.slice(0, 2)}/${formattedDob.slice(2, 4)}/${formattedDob.slice(4)}`;

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
          Date of Birth: {formattedDobWithSlashes}<br/></p>
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
