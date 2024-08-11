import React, { useState, useEffect } from 'react';
import styles from '../styles/styles';

const Question = ({ question, options, onOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionClick(option);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Question {question.number} of {question.total}:
      </h2>
      <p>{question.text}</p>
      <div style={styles.options}>
        {options.map((option, index) => (
          <div key={index} style={{ marginRight: '10px' }}>
            <button
              type="button"
              value={option}
              style={styles.button}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      number: 1,
      text: 'What is your favorite color?',
      options: ['Red', 'Green', 'Blue'],
      correctAnswer: 'Red',
    },
    {
      number: 2,
      text: 'What is your favorite animal?',
      options: ['Dog', 'Cat', 'Bird'],
      correctAnswer: 'Dog',
    },
    {
      number: 3,
      text: 'What is the capital of Germany?',
      options: ['Paris', 'Berlin', 'London'],
      correctAnswer: 'Berlin',
    },
    {
      number: 4,
      text: 'What is the capital of England?',
      options: ['Paris', 'Berlin', 'London'],
      correctAnswer: 'London',
    },
    {
      number: 5,
      text: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London'],
      correctAnswer: 'Paris',
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  );

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {currentQuestionIndex < questions.length ? (
        <Question
          question={{ ...currentQuestion, total: questions.length }}
          options={currentQuestion.options}
          onOptionClick={handleOptionClick}
        />
      ) : (
        <div>
          <h2 style={styles.heading}>Quiz Results:</h2>
          <p style={styles.result}>
            You got {correctAnswers.length} out of {questions.length} questions
            right.
          </p>
          {questions.map((question, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p>
                Question {index + 1}: {question.text}
              </p>
              <p style={answers[index] === question.correctAnswer ? styles.rightAnswer : styles.yourAnswer}>Your answer: {answers[index]}</p>
              <p style={styles.rightAnswer}>
                Correct answer: {question.correctAnswer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
