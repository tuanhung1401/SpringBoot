const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

//Thẻ HTML hiển thị câu hỏi trên web
const quizContainer = document.querySelector(".quiz-container");

//Nhận vào câu hỏi và trả về chuỗi HTML 
const renderQuestion = (question) => {
  const answerItems = question.answers
    //Lặp qua mảng các phương án trả lời của mỗi câu hỏi question.answer để render ra câu hỏi/trả lời
    //Mỗi phương án trả lời tương ứng với đoạn mã HTML gồm div, input, name và value
    .map((answer) => `<div class="quiz-answer-item">
    <input type="radio" name="${question.id}" value="${answer}">
    <label>${answer}</label>
  </div>`)
    //Kết hợp các chuỗi HTML này lại thành chuỗi lớn
    .join("");

  //Trả về một quiz-item mới 
  return `
  <div class="quiz-item">
    <h3>Câu ${question.id}: ${question.question}</h3>
    <div class="quiz-answer">${answerItems}</div>
  </div>
`;
};

const renderQuestions = (questions) => {
  const questionsHtml = questions.map(renderQuestion).join("");
  quizContainer.innerHTML = questionsHtml;
};

//Lấy ra số ngẫu nhiên
const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

//Lấy ra câu trả lời ngẫu nhiên
const randomizeAnswers = (questions) => {
  //Duyệt qua từng phần tử trong mảng question
  for (let i = 0; i < questions.length; i++) {
    const randomNumber = getRandom(questions[i].answers.length);
    //Lấy ngẫu nhiên phần tử trong mảng answer
    const answer = quizContainer.querySelector(
      `input[name="${i + 1}"][value="${questions[i].answers[randomNumber]}"]`
    );
    //Đánh dấu đáp án được chọn
    answer.checked = true;
  }
};

//Tạo biến đại diện cho nút Random Answer
const randomizeAnswersBtn = document.getElementById("btn");
//Bắt sự kiện click
randomizeAnswersBtn.addEventListener("click", () => {
  randomizeAnswers(quizes);
});
//Hiển thị quizes ra màn hình web
renderQuestions(quizes);