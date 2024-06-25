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
    updateQuizList();
  }
  
  function loadQuiz(quizId) {
    document.getElementById('quizResults').classList.add('hidden');
    let quiz = quizzes.find(q => q.id === quizId);
  
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
    let quiz = quizzes.find(q => q.id === currentQuizId);
  
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
      currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
    } else if (direction === 'next') {
      let quiz = quizzes.find(q => q.id === currentQuizId);
      currentQuestionIndex = Math.min(quiz.questions.length - 1, currentQuestionIndex + 1);
    }
  
    loadQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
  
  function updateNavigationButtons() {
    const quiz = quizzes.find(q => q.id === currentQuizId);
    document.getElementById('prevQuestionBtn').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('nextQuestionBtn').style.display = currentQuestionIndex === quiz.questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submitQuizBtn').style.display = currentQuestionIndex === quiz.questions.length - 1 ? 'inline-block' : 'none';
  }


  function submitQuiz() {
    let quiz = quizzes.find(q => q.id === currentQuizId);
    let score = 0;
    let total = quiz.questions.length;
  
    const correctAnswersList = document.getElementById('correctAnswers');
    const allAnswersList = document.getElementById('allAnswers');
    correctAnswersList.innerHTML = '';
    allAnswersList.innerHTML = '';
  
    quiz.questions.forEach((question, index) => {
      const isCorrect = userAnswers[index] === question.correctAnswer;
      if (isCorrect) {
        score++;
      } else {
        const correctAnswerItem = document.createElement('li');
        correctAnswerItem.textContent = `Question: ${question.question} - Correct Answer: ${question.answers[question.correctAnswer]}`;
        correctAnswersList.appendChild(correctAnswerItem);
      }
  
      const userAnswerItem = document.createElement('li');
      userAnswerItem.textContent = `Question: ${question.question} - Your Answer: ${question.answers[userAnswers[index]]} - ${isCorrect ? 'Correct' : 'Incorrect'}`;
      allAnswersList.appendChild(userAnswerItem);
    });
  
    document.getElementById('quizScore').textContent = ((score / total) * 100).toFixed(2);
    document.getElementById('quizResults').classList.remove('hidden');
  }
  
 function resetQuiz() {
  currentQuizId = 0;
  currentQuestionIndex = 0;
  userAnswers = [];
  document.getElementById('quizContainer').classList.add('hidden');
  document.getElementById('quizSection').classList.remove('hidden');
  document.getElementById('quizResults').classList.add('hidden');
}


  function addQuestion() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionCount = questionsContainer.getElementsByClassName('question-group').length;
    const newQuestionGroup = document.createElement('div');
    newQuestionGroup.className = 'form-group question-group';
  
    newQuestionGroup.innerHTML = `
      <label for="question${questionCount + 1}">Question ${questionCount + 1}</label>
      <input type="text" class="form-control" name="questions" required>
      <label for="answers${questionCount + 1}">Answers (comma-separated)</label>
      <input type="text" class="form-control" name="answers" required>
      <label for="correctAnswer${questionCount + 1}">Correct Answer (index)</label>
      <input type="number" class="form-control" name="correctAnswers" required>
    `;
  
    questionsContainer.appendChild(newQuestionGroup);
  }
  
  function createQuiz() {
    const form = document.getElementById('createQuizForm');
    const formData = new FormData(form);
    const quizTitle = formData.get('quizTitle');
    const questions = formData.getAll('questions');
    const answers = formData.getAll('answers');
    const correctAnswers = formData.getAll('correctAnswers');
  
    const newQuiz = {
      id: quizzes.length + 1,
      title: quizTitle,
      questions: questions.map((q, index) => ({
        question: q,
        answers: answers[index].split(','),
        correctAnswer: parseInt(correctAnswers[index], 10)
      }))
    };
  
    quizzes.push(newQuiz);
    form.reset();
    $('#createQuizModal').modal('hide');
    updateQuizList();
  }
  
  function updateQuizList() {
    const quizListDiv = document.getElementById('quizList');
    const existingQuizButtons = quizListDiv.querySelectorAll('.btn-group-toggle > label');
  
    // Remove all existing dynamic quiz buttons (keeping only the predefined ones)
    existingQuizButtons.forEach((button, index) => {
      if (index >= 5) button.remove();
    });
  
    quizzes.slice(5).forEach((quiz, index) => {
      const quizButton = document.createElement('label');
      quizButton.className = 'btn btn-outline-primary flex-fill m-1';
      quizButton.innerHTML = `
        <input type="radio" name="options" id="option${index + 6}" autocomplete="off" onclick="loadQuiz(${quiz.id})"> ${quiz.title}
      `;
      quizListDiv.querySelector('.btn-group-toggle').appendChild(quizButton);
    });
  }
  


  window.onload = function() {
    updateQuizList();
    loadQuiz(1);
  };
  loadQuiz(1);
  
