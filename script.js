document.addEventListener('DOMContentLoaded', function() {
  const questions = [
      { 
          text: "Who is sus?", 
          answers: [
              {text: "Me", feedback: "Correct... according to you, yes."},
              {text: "You", feedback: "I was thinking me, but yeah that works too lol"},
          ], 
          correctIndices: [0, 1, 3] // Indices of correct answers
      },
      // Additional questions as needed
  ];

  let currentQuestionIndex = 0;
  let selectedAnswerIndex = null; // Track the index of the selected answer

  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const submitButton = document.getElementById('submit-answer');
  const feedbackContainer = document.getElementById('feedback-container');
  const feedbackMessage = document.getElementById('feedback-message');
  const nextQuestionButton = document.getElementById('next-question');
  const retryQuestionButton = document.getElementById('retry-question');

  function showQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.text;
      answersElement.innerHTML = '';
      currentQuestion.answers.forEach((answer, index) => {
          const li = document.createElement('li');
          li.textContent = answer.text;
          li.onclick = () => selectAnswer(index);
          answersElement.appendChild(li);
      });
      // Reset UI for new question
      submitButton.style.display = 'block';
      feedbackContainer.style.display = 'none';
      selectedAnswerIndex = null; // Reset selected answer for new question
  }

  function selectAnswer(index) {
      selectedAnswerIndex = index; // Update selected answer
      // Optionally highlight the selected answer
  }

  submitButton.addEventListener('click', function() {
      if (selectedAnswerIndex !== null) {
          const selectedAnswer = questions[currentQuestionIndex].answers[selectedAnswerIndex];
          feedbackMessage.textContent = selectedAnswer.feedback;

          const isCorrect = questions[currentQuestionIndex].correctIndices.includes(selectedAnswerIndex);
          if (isCorrect) {
              nextQuestionButton.style.display = 'block';
              retryQuestionButton.style.display = 'none';
          } else {
              retryQuestionButton.style.display = 'block';
              nextQuestionButton.style.display = 'none';
          }
      } else {
          // If no answer is selected, prompt the user
          feedbackMessage.textContent = "Please select an answer before submitting.";
          retryQuestionButton.style.display = 'none';
          nextQuestionButton.style.display = 'none';
      }

      // Update UI to show feedback
      feedbackContainer.style.display = 'block';
      submitButton.style.display = 'none';
      answersElement.style.display = 'none';
  });

  nextQuestionButton.addEventListener('click', function() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          showQuestion();
      } else {
          // End of quiz logic here
          questionElement.textContent = "Congratulations, you've completed the quiz!";
          feedbackContainer.style.display = 'none';
          answersElement.style.display = 'none';
      }
      // Prepare UI for next question
      answersElement.style.display = 'block';
  });

  retryQuestionButton.addEventListener('click', function() {
      // Simply show the same question again
      showQuestion();
      answersElement.style.display = 'block'; // Ensure answers are shown for retry
  });

  showQuestion(); // Initialize the quiz with the first question
});
