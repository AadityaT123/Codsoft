const quizzes = [
    {
      id: 1,
      title: "General Knowledge Quiz",
      questions: [
        {
          question: "Who was the first Prime Minister of India?",
          answers: ["Rahul Gandhi", "Pandit Jawaharlal Nehru", "Narendra Modi", "Subhash Chandra Bose"],
          correctAnswer: 1
        },
        {
          question: "Which planet is closest to the Sun?",
          answers: ["Earth", "Mars", "Mercury", "Venus"],
          correctAnswer: 2
        },
        {
          question: "Which animal is known as the 'Ship of the Desert'?",
          answers: ["Plane", "Bike", "Camel", "Horse"],
          correctAnswer: 2
        },
        {
          question: "How many consonants are there in the English alphabet?",
          answers: ["20 Consonants", "22 Consonants", "23 Consonants", "21 Consonants"],
          correctAnswer: 3
        },
        {
          question: "What is the National Anthem of India?",
          answers: ["Jana Gana Mana", "Aye Mere Watan Ke Logon", "Sare Jahan Se Achha", "Vande Mataram"],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 2,
      title: "Science Quiz",
      questions: [
        {
          question: "Name the star that shines during the day and provides light at night that we see.?",
          answers: ["The sun", "Neutron stars", "Giant stars", "Protostars"],
          correctAnswer: 0
        },
        {
            question: " How many thumbs do we have?",
            answers: ["One", "Two", "Three", "Four"],
            correctAnswer: 1
          },
        {
            question: "What part of the plant conducts photosynthesis?",
            answers: ["Flower", "Root", "Leaves", "Wood"],
            correctAnswer: 2
          },
        {
            question: "Which one is not a sense organ?",
            answers: ["Nose", "Ears", "Hair", "Fingers"],
            correctAnswer: 2
          },
        {
            question: "What is the smallest unit of matter that retains the properties of an element?",
            answers: ["Electron", "Proton", "Atom", "Molecule"],
            correctAnswer: 2
          },
      ]
    },
    {
      id: 3,
      title: "Computer Quiz",
      questions: [
        {
          question: "What Is Computer ",
          answers: ["A species of animal", "A cooking appliance", "A type of tree ", "A Set of Programs"],
          correctAnswer: 3
        },
        {
          question: "Google is a Browser or a Search Engine?",
          answers: ["Search Engine", "Browser", "Both Browser and Search Engine", "Neither Browser nor Search Engine"],
          correctAnswer: 0
        },
        {
          question: "What is the full form of RAM",
          answers: ["Read An Memory", "Random Access Memory", "Read All Memory", "None of Above"],
          correctAnswer: 1
        },
        {
          question: "Which electronic component was used in the first generation of computers?",
          answers: ["Magnetic Tapes", "Vaccum Tubes", "A type of tree ", "Transistors"],
          correctAnswer: 0
        },
        {
          question: "The process of transferring files from the Internet to your computer is called?",
          answers: ["Storing", "Uploading", "Downloading ", "None of these"],
          correctAnswer: 2
        }

      ]
    },
    {
      id: 4,
      title: "Basic Maths",
      questions: [
        {
          question: "Find the missing series 4,8,12,__,20,24 ",
          answers: ["25", "14", "15", "16"],
          correctAnswer: 3
        },
        {
          question: "(2 + 2 = A, 3 + 3 = B ,A + B = C)  what is value of A.B,C",
          answers: ["A=6,B=4,C=10", "A=5,B=5,C=10", "A=4,B=6,C=10", "A=4,B=7,C=10"],
          correctAnswer: 2
        },
        {
          question: "What is the sum of 130+125+191?",
          answers: ["450", "448", "500", " 446"],
          correctAnswer: 3
        },
        {
          question: "How many sides does a decagon have?",
          answers: ["12", "10", "11", "9"],
          correctAnswer: 1
        },
        {
          question: "What is the next prime number after 5",
          answers: ["17", "13", "11", "7"],
          correctAnswer: 3
        }
      ]
    },
    {
      id: 5,
      title: "English Quiz",
     questions: [
            {
                question: "Which of the following is a synonym for 'happy'?",
                answers: ["Sad", "Joyful", "Angry", "Scared"],
                correctAnswer: 1
            },
            {
                question: "What is the past tense of the verb 'run'?",
                answers: ["Running", "Ran", "Runs", "Runed"],
                correctAnswer: 1
            },
            {
                question: "Which sentence is correct?",
                answers: ["She go to the market.", "She goes to the market.", "She going to the market.", "She gone to the market."],
                correctAnswer: 1
            },
            {
                question: "What is the main clause in this sentence: 'Although it was raining, we went for a walk.'",
                answers: ["Although it was raining", "We went for a walk", "It was raining", "Although it was raining, we went"],
                correctAnswer: 1
            },
            {
                question: "Which of the following sentences uses the subjunctive mood correctly?",
                answers: ["If I was a bird, I will fly.", "If I were a bird, I would fly.", "If I am a bird, I would fly.", "If I were a bird, I will fly."],
                correctAnswer: 1
            }
        ]
    }

  ];
  
  let currentQuizId = 0;
  let currentQuestionIndex = 0;
  let userAnswers = [];

  function startQuiz() {
    document.getElementById('startQuizBtn').classList.add('hidden');
    document.getElementById('Detail').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');
}

  
  function loadQuiz(quizId) {
    document.getElementById('quizResults').classList.add('hidden');
    let quiz = null;
for (let i = 0; i < quizzes.length; i++) {
  if (quizzes[i].id === quizId) {
    quiz = quizzes[i];
    break;
  }
}
  
    if (!quiz) {
      console.error("Quiz not found!");
      return;
    }
  
    currentQuizId = quizId;
    currentQuestionIndex = 0;
    userAnswers = [];
  
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.classList.remove('hidden');
    document.getElementById('quizTitle').textContent = quiz.title;
  
    loadQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
  
  function loadQuestion(index) {
      

    let quiz ;
for (let i = 0; i < quizzes.length; i++) {
  if (quizzes[i].id === currentQuizId) {
    quiz = quizzes[i];
    break; // Exit the loop once the quiz is found
  }
}

    if (!quiz || index < 0 || index >= quiz.questions.length) {
      console.error("Invalid question index!");
      return;
    }
  
    const question = quiz.questions[index];
    const quizQuestionsDiv = document.getElementById('quizQuestions');
    quizQuestionsDiv.innerHTML = '';
  
    const questionHtml = `
      <div class="form-group">
        <label>${question.question}</label>
        <div id="answersContainer" class="btn-group-vertical" role="group" aria-label="Answer Options">
          ${question.answers.map((answer, i) => `
            <button type="button" class="btn btn-outline-primary answer-btn" onclick="recordAnswer(${index}, ${i})">${answer}</button>
          `).join('')}
        </div>
      </div>
    `;
    quizQuestionsDiv.innerHTML = questionHtml;
  
    if (userAnswers[index] !== undefined) {
      const answerButtons = document.querySelectorAll('#answersContainer .answer-btn');
      answerButtons[userAnswers[index]].classList.add('selected');
    }
  }
  
  function recordAnswer(index, value) {
    
    userAnswers[index] = value;
  
    const answerButtons = document.querySelectorAll('#answersContainer .answer-btn');
    answerButtons.forEach(button => button.classList.remove('selected'));
  
    answerButtons[value].classList.add('selected');
  }
  
  function showQuestion(direction) {
    if (direction === 'prev') {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
      }
    } else if (direction === 'next') {
      const quiz = quizzes.find(q => q.id === currentQuizId);
      if (currentQuestionIndex < quiz.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
      }
    }
    updateNavigationButtons();
  }
  
  function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevQuestionBtn');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const submitBtn = document.getElementById('submitQuizBtn');
  
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === quizzes[currentQuizId - 1].questions.length - 1;
  }

 function resetQuiz() {
    currentQuizId = 0;
    currentQuestionIndex = 0;
    userAnswers = [];

    const quizContainer = document.getElementById('quizContainer');
    quizContainer.classList.add('hidden');

    const quizResults = document.getElementById('quizResults');
    quizResults.classList.add('hidden');

    const quizList = document.getElementById('quizList');
    quizList.classList.remove('hidden');

    document.getElementById('quizScore').textContent = '';
    document.getElementById('correctAnswers').innerHTML = '';

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => button.classList.remove('selected'));

    const prevBtn = document.getElementById('prevQuestionBtn');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const submitBtn = document.getElementById('submitQuizBtn');

    const quizControls = document.getElementById('quizControls');
    quizControls.style.display = 'block';

    const option1Radio = document.getElementById('option1');
    if (option1Radio) {
        option1Radio.checked = true;
        option1Radio.parentNode.classList.add('active');
    }

    const labels = document.querySelectorAll('.btn-group-toggle .btn');
    labels.forEach(button => button.classList.remove('active'));

    if (option1Radio) {
        option1Radio.parentNode.classList.add('active');
    }

    loadQuiz(1);
}



  
  function submitQuiz() {
    const quiz = quizzes.find(q => q.id === currentQuizId);
    if (!quiz) {
      console.error("Quiz not found!");
      return;
    }
  
    let correctAnswers = 0;
    quiz.questions.forEach((q, index) => {
      const selectedAnswerIndex = userAnswers[index];
      const correctAnswerIndex = q.correctAnswer;
      if (selectedAnswerIndex === correctAnswerIndex) {
        correctAnswers++;
      }
    });
  
    const score = (correctAnswers / quiz.questions.length) * 100;
  
    document.getElementById('quizScore').textContent = score.toFixed(2); // Display score with two decimal places
    const correctAnswersList = document.getElementById('correctAnswers');
    correctAnswersList.innerHTML = '';
    quiz.questions.forEach((q, index) => {
      const correctAnswerIndex = q.correctAnswer;
      const selectedAnswerIndex = userAnswers[index];
      const isCorrect = selectedAnswerIndex === correctAnswerIndex;
    // Determine the text based on whether the answer is correct
    let answerText;
  if (isCorrect) {
    answerText = `<span class="text-success">${q.answers[selectedAnswerIndex]} (Correct)</span>`;
} else {
  answerText = `${q.answers[selectedAnswerIndex]} (Your answer), <span class="text-success">${q.answers[correctAnswerIndex]} (Correct)</span>`;
}

      const listItem = document.createElement('li');
      listItem.innerHTML = answerText;
      correctAnswersList.appendChild(listItem);
    });
  
    document.getElementById('quizResults').classList.remove('hidden');
    document.getElementById('quizQuestions').innerHTML = '';
    document.getElementById('quizControls').style.display = 'none';
  }
  
  loadQuiz(1);
  