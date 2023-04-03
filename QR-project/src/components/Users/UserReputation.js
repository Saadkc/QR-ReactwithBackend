import React from "react";
import "../../Style/userReputations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const UserReputation = ({ user }) => {
  const [roundController, setRoundController] = useState(user.round_controller);
  const [cleanlinessWorkstation, setCleanlinessWorkstation] = useState(
    user.cleanliness_workstation
  );
  const [storageDocuments, setStorageDocuments] = useState(
    user.storage_documents
  );
  const [dressCode, setDressCode] = useState(user.dress_code);
  const [onsiteBehaviour, setOnsiteBehaviour] = useState(user.onsite_behaviour);
  const [punctuality, setPunctuality] = useState(user.punctuality);
  const [reactivity, setReactivity] = useState(user.reactivity);
  const [userLanguage, setUserLanguage] = useState(user.user_language);
  const [electronicPaperhandrail, setElectronicPaperhandrail] = useState(
    user.electronic_paperhandrail
  );
  const [roundReports, setRoundReports] = useState(user.round_reports);

  return (
    <div className="user-info">
      <div className="user-reputation">
        <h1>{user.name}'s Reputation</h1>
        <div className="user-grid">
          <div className="user-grid-cell">
            <p>{user.name}</p>
            <div className="user-list-cell">
              {user.identity_card === "yes" ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </div>
            <p>Professional Card and Identity Card</p>
          </div>
          <div className="user-grid-cell">
            <p>First Name: {user.first_name}</p>
            <p>Position: {user.user_position}</p>
            <p>Site: {user.site}</p>
          </div>
          <div className="user-grid-cell">
            <p>Controller: {user.controller}</p>
            <p>Date: {user.date}</p>
            <p>Time: {user.time}</p>
          </div>
        </div>
      </div>
      <div className="Questions">
        <Question
          label="Condition of the Equipment"
          value={roundController}
          onChange={setRoundController}
        />
        <Question
          label="Condition of the Workstation"
          value={cleanlinessWorkstation}
          onChange={setCleanlinessWorkstation}
        />
        <Question
          label="Storage of materials and documents"
          value={storageDocuments}
          onChange={setStorageDocuments}
        />
        <Question
          label="Dress code"
          value={dressCode}
          onChange={setDressCode}
        />
        <Question
          label="On-site behavior"
          value={onsiteBehaviour}
          onChange={setOnsiteBehaviour}
        />
        <Question
          label="Punctuality (start and end of service)"
          value={punctuality}
          onChange={setPunctuality}
        />
        <Question
          label="Reactivity"
          value={reactivity}
          onChange={setReactivity}
        />
        <Question
          label="Language"
          value={userLanguage}
          onChange={setUserLanguage}
        />
        <Question
          label="Electronic and/or paper handrail"
          value={electronicPaperhandrail}
          onChange={setElectronicPaperhandrail}
        />
        <Question
          label="Round reports"
          value={roundReports}
          onChange={setRoundReports}
        />
      </div>
      <p>user.location: {user.location}</p>
      <p>user.observations: {user.observations}</p>
    </div>
  );
};

export default UserReputation;

const options = ["Excellent", "Correct", "Insufficient", "Unacceptable"];

export function Question({ label, value, onChange }) {
  return (
    <div className="question">
      <h2>{label}</h2>
      {options.map((option) => (
        <div key={option} className="option">
          <input
            type="checkbox"
            id={`${label}-${option}`}
            name={label}
            value={option}
            checked={value === option}
            onChange={(event) => onChange(event.target.value)}
          />
          <label htmlFor={`${label}-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}
