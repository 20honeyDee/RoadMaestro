// src/pages/QuizPage.tsx
import React, { useState } from "react";
import Quiz from "../components/Quiz";
import QuizData from "../assets/Objects/Quiz";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const QuizPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const currentQuestion = QuizData[currentIndex];

  const handleNext = () => {
  if (selectedOption) {
    // Clear the message once an option is selected
    setMessage("");

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < QuizData.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  } else {
    // Show message only when user hasn't selected anything
    setMessage("Choose your answer first");
  }
};


  const handleRestart = () => {
    setCurrentIndex(0);
    setMessage(null);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-[calc(100vh-60px)]">
        <h2 className="text-2xl font-bold text-center">Thank you for using Road Maestro <br/> Quiz Finished!</h2>
        <p className="text-lg">
          You scored <span className="font-semibold">{score}</span> out of{" "}
          {QuizData.length}
        </p>
        <Button label="Restart Quiz" variant="primary" onClick={handleRestart} className="hover:transform hover:scale-125 duration-300 ease-in-out"/>
        <Button label="Back to Home" variant="secondary" onClick={() => navigate("/fundamentals")} className="hover:transform hover:scale-125 duration-300 ease-in-out"/>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] p-4">
      
      <h2 className="text-lg font-bold text-white mb-5 bg-gray-700 py-2 px-5 rounded-2xl">ROAD MAESTRO QUIZ</h2>
      <Quiz
        Image={currentQuestion.img}
        Question={currentQuestion.question}
        Options={currentQuestion.options}
        selectedOption={selectedOption || ""}
        onSelectOption={(option) => setSelectedOption(option)}
      />

      {message}
      <div className="mt-4">
          <Button label="Next" variant="primary" onClick={handleNext} />
        </div>

      <p className="mt-2 text-gray-600">
        Question {currentIndex + 1} of {QuizData.length}
      </p>
    </div>
  );
};

export default QuizPage;
