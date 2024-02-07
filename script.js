document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    { 
        text: "You said you like quizzes right? Ok so I made you a quiz xD", 
        answers: [
            {text: "Ok...", feedback: "Don't worry, it'll be fun (I think). Let's try it."},
            {text: "Ok!", feedback: "I like the excitement! Hope you like it!"},
        ], 
        correctIndices: [0, 1] // Indices of correct answers
    },
      { 
          text: "We'll start off with something really easy. Who is sus?", 
          answers: [
              {text: "Me", feedback: "According to you, yes."},
              {text: "You", feedback: "I was thinking me, but yeah that works too lol"},
          ], 
          correctIndices: [0, 1] // Indices of correct answers
      },
      { 
          text: "Now something about us. Where haven't we gone together?", 
          answers: [
              {text: "Inside Aga Khan", feedback: "Yup, it was just me running around trying to see everything in 8 minutes haha"},
              {text: "Outside Aga Khan", feedback: "C'mon, we've been here."},
              {text: "Celebration Square", feedback: "I am offended."},
              {text: "Monarch Park", feedback: "Technically parked outside, but we did go here..."},
          ], 
          correctIndices: [0] // Indices of correct answers
      },
      { 
          text: "Who's better at mini-putt?", 
          answers: [
              {text: "Me", feedback: "Umm technically you won?"},
              {text: "You", feedback: "Yeah you are way too good. And you keep getting better too. If we ever play again I'm gonna get smoked."},
              {text: "I'm confused, who's 'me' and who's 'you'?", feedback: "True. Didn't think of that. Actually I did. Me is me (the one asking the question). Now try again with this knowledge lol."},
          ], 
          correctIndices: [1] // Indices of correct answers
      },
      { 
          text: "How about arm wrestling? Who's better?", 
          answers: [
              {text: "Me", feedback: "That's right."},
              {text: "You", feedback: "Very funny."},
          ], 
          correctIndices: [0] // Indices of correct answers
      },
      { 
          text: "Running?", 
          answers: [
              {text: "Me", feedback: "No way you'd say that. But I'll take it!"},
              {text: "You", feedback: "Could be, we'll have to find out."},
          ], 
          correctIndices: [0, 1] // Indices of correct answers
      },
      { 
          text: "Alright that was all a warm up. Now let's do some math. What is the antiderivative of sin(x)?", 
          answers: [
              {text: "3", feedback: "Hmm... no."},
              {text: "sin(y) + C", feedback: "Looks like it would be right, but no..."},
              {text: "-cos(x) + C", feedback: "Whoah, impressive."},
              {text: "Why am I doing antiderivatives? I have someone to do that for me now.", feedback: "True. I got you. (unless you meant someone else)"},
          ], 
          correctIndices: [2, 3] // Indices of correct answers
      },
      { 
          text: "Wow, did I really ask you a calculus question? I'll make the next one less intense.", 
          answers: [
              {text: "Ok...", feedback: "Alright... let's go!"},
              {text: "That wasn't even hard. What do you take me for?", feedback: "Respect."},
          ], 
          correctIndices: [2, 3] // Indices of correct answers
      },
      { 
          text: "What is the most important thing in this world?", 
          answers: [
              {text: "God", feedback: "Interesting choice."},
              {text: "Family", feedback: "Makes sense."},
              {text: "Humanity", feedback: "An altruist. Amazing."},
              {text: "I thought this one would be easier!", feedback: "Fair, you can skip if you want lol"},
          ], 
          correctIndices: [0, 1, 2, 3] // Indices of correct answers
      },
      { 
          text: "Alright, according to some 'texts', people born on March 18th have...", 
          answers: [
              {text: "Remakable physical strength", feedback: "I'm flattered"},
              {text: "Resilience and optimism", feedback: "If you say so!"},
              {text: "A great sense of humor", feedback: "Oh please, that's enough, stop (don't stop)."},
              {text: "Great optimism", feedback: "I'll take it."},
          ], 
          correctIndices: [0, 1, 2, 3] // Indices of correct answers
      },
      { 
          text: "According to some 'texts', people born on January 3rd have...", 
          answers: [
              {text: "Rock-solid determination", feedback: "Yess!"},
              {text: "A stubborn nature", feedback: "Hell no! Try again!"},
              {text: "Potential for outstanding success", feedback: "100%, no question"},
              {text: "A sense of duty", feedback: "I can see that."},
          ], 
          correctIndices: [0, 2, 3] // Indices of correct answers
      },
      { 
          text: "And according to people born on March 18th, people born on January 3rd are...", 
          answers: [
              {text: "Amazing", feedback: "Yes!"},
              {text: "The best", feedback: "You know it."},
              {text: "I have no words. Perfection.", feedback: "That's a word. But yes."},
          ], 
          correctIndices: [0, 1, 2] // Indices of correct answers
      },
      { 
          text: "Getting tired of this yet?", 
          answers: [
              {text: "Yes, let's skip to the end", feedback: "Umm ok, but I didn't program that option so..."},
              {text: "No! A few more!", feedback: "Gotchu"},
          ], 
          correctIndices: [0, 1] // Indices of correct answers
      },
      { 
          text: "Is there someone that's very thankful to have you in their life?", 
          answers: [
              {text: "Yes", feedback: ""},
          ], 
          correctIndices: [0] // Indices of correct answers
      },
      { 
          text: "Did that person write a quiz and bury some cheesy stuff at the end?", 
          answers: [
              {text: "Yes", feedback: ""},
          ], 
          correctIndices: [0] // Indices of correct answers
      },
      { 
          text: "Like saying how you're the best?", 
          answers: [
              {text: "Yes... -__-", feedback: ""},
          ], 
          correctIndices: [0] // Indices of correct answers
      },
      { 
          text: "But you know what I really mean whenever I say that right?", 
          answers: [
                {text: "Yes?", feedback: "Ok good."},
                {text: "No?", feedback: "Oh lol, ok tell me and I'll correct this immediately."},
          ], 
          correctIndices: [0, 1] // Indices of correct answers
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
      questionElement.style.display = 'block';
  }

  function selectAnswer(index) {
      selectedAnswerIndex = index; // Update selected answer
      // Optionally highlight the selected answer
      // Iterate over all answers to remove the highlight class
    const answerLis = answersElement.querySelectorAll('li');
    answerLis.forEach((li, idx) => {
        if (idx === index) {
            li.classList.add('selected-answer'); // Add the class to the selected answer
        } else {
            li.classList.remove('selected-answer'); // Remove the class from all other answers
        }
    });
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
          feedbackMessage.textContent = "You didn't pick an option!";
          retryQuestionButton.style.display = 'block';
          nextQuestionButton.style.display = 'none';
      }

      // Update UI to show feedback
      questionElement.style.display = 'none';
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
          questionElement.textContent = "Alright that's it. Not that bad? Maybe even kinda fun?";
          feedbackContainer.style.display = 'none';
          answersElement.style.display = 'none';
      }
      // Prepare UI for next question
      answersElement.style.display = 'block';
      questionElement.style.display = 'block';
  });

  retryQuestionButton.addEventListener('click', function() {
      // Simply show the same question again
      showQuestion();
      answersElement.style.display = 'block'; // Ensure answers are shown for retry
      questionElement.style.display = 'block';
  });

  showQuestion(); // Initialize the quiz with the first question
});
