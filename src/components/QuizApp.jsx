import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const QuizApp = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const dummyData = {
    title: "Sample Quiz",
    correct_answer_marks: 4,
    questions: [
      {
        description: "What is the capital of France?",
        options: [
          { id: 1, description: "Berlin", is_correct: false },
          { id: 2, description: "Madrid", is_correct: false },
          { id: 3, description: "Paris", is_correct: true },
          { id: 4, description: "Rome", is_correct: false }
        ]
      },
      {
        description: "Which planet is known as the Red Planet?",
        options: [
          { id: 1, description: "Earth", is_correct: false },
          { id: 2, description: "Mars", is_correct: true },
          { id: 3, description: "Jupiter", is_correct: false },
          { id: 4, description: "Venus", is_correct: false }
        ]
      }
    ]
  };

  useEffect(() => {
    fetch("https://api.jsonserve.com/Uw5CrX")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        return response.json();
      })
      .then((data) => {
        setQuizData(data);
        setLoading(false);
      })
      .catch(() => {
        setQuizData(dummyData); // Use dummy data on error
        setLoading(false);
      });
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + quizData.correct_answer_marks);
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {showResults ? (
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold">Quiz Completed!</h2>
          <p className="text-lg">Your Score: {score}</p>
        </motion.div>
      ) : (
        <div>
          <motion.h1 
            className="text-3xl font-bold mb-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}>
            {quizData.title}
          </motion.h1>
          <p className="text-gray-600">{quizData.questions[currentQuestion].description}</p>
          <div className="mt-4">
            {quizData.questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                className="w-full my-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => handleAnswer(option.is_correct)}
              >
                {option.description}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
