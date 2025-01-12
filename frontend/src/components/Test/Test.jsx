import React, { useState, useEffect } from "react";
import "./Test.css";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Fetch questions on component mount
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

  const handleNextQuestion = () => {
    if (!questions.length) return;

    const currentCategory = questions[currentCategoryIndex];
    const nextQuestionIndex = currentQuestionIndex + 1;

    // Check if there are more questions in the current category
    if (nextQuestionIndex < currentCategory.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else if (currentCategoryIndex + 1 < questions.length) {
      // Move to the next category
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // All questions complete
      alert("You have completed all the questions!");
    }
  };

  if (!questions.length) {
    return <div className="test-container">Loading questions...</div>;
  }

  const currentCategory = questions[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  return (
    <div className="test-container">
      <h2 className="test-category">{currentCategory.category}</h2>
      <p className="test-question">{currentQuestion.text}</p>
      <button onClick={handleNextQuestion} className="next-button">
        Next Question
      </button>
    </div>
  );
};

export default Test;
