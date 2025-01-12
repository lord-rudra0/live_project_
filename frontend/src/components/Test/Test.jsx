// Test.jsx
import React, { useState, useEffect } from "react";
import "./Test.css";

const Test = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="test-container">
      {questions.map((section) => (
        <div key={section.category} className="test-section">
          <h2 className="test-category">{section.category}</h2>
          <ul className="test-questions">
            {section.questions.map((question) => (
              <li key={question.id} className="test-question">{question.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Test;
