import React from 'react';

interface QuizOption {
  text: string;
  correct: boolean;
}

interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

interface QuizProps {
  questions: QuizQuestion[];
  answers: Record<string, boolean>;
  onAnswer: (questionId: string, isCorrect: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, answers, onAnswer }) => {
  return (
    <div className="quiz-container space-y-8">
      {questions.map((question) => (
        <div 
          key={question.id} 
          className="quiz-question bg-white border border-gray-200 rounded-lg p-6"
          data-answered={answers[question.id] !== undefined}
        >
          <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
          <div className="space-y-2">
            {question.options.map((option, index) => {
              const isAnswered = answers[question.id] !== undefined;
              const isCorrect = option.correct;
              const wasSelectedWrong = answers[question.id] === false && !isCorrect;
              
              let buttonClass = "block w-full text-left p-3 border border-gray-300 rounded-lg transition-colors hover:bg-gray-50 ";
              
              if (isAnswered) {
                if (isCorrect) {
                  buttonClass += "bg-green-100 border-green-300 text-green-800 ";
                } else if (wasSelectedWrong) {
                  buttonClass += "bg-red-100 border-red-300 text-red-800 ";
                } else {
                  buttonClass += "bg-gray-100 border-gray-300 text-gray-600 ";
                }
              }

              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => onAnswer(question.id, isCorrect)}
                  disabled={isAnswered}
                >
                  {option.text}
                  {isAnswered && isCorrect && (
                    <i className="fas fa-check ml-2 text-green-600" aria-hidden="true"></i>
                  )}
                  {isAnswered && wasSelectedWrong && (
                    <i className="fas fa-times ml-2 text-red-600" aria-hidden="true"></i>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
