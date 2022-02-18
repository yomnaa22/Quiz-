const loginUser = JSON.parse(localStorage.getItem("data"))

const Quiz = {
  QuizName: "JavaScript Quiz",
  QuizTime: 30,
  TotalDegree: 100,
  Questions: [
    {
      Header: "1. What is 2*5 ?",
      Answers: ["2", "5", "10", "15"],
      CorrectAnswer: "10",
      Degree: 10,
    },
    {
      Header: "2. What is 2*3 ?",
      Answers: ["3", "6", "12", "15"],
      CorrectAnswer: "6",
      Degree: 10,
    },
    {
      Header: "3. What is 2+5 ?",
      Answers: ["2", "5", "7", "10"],
      CorrectAnswer: "7",
      Degree: 10,
    },
    {
      Header: "4. What is 5*5 ?",
      Answers: ["25", "20", "10", "15"],
      CorrectAnswer: "25",
      Degree: 10,
    },
    {
      Header: "5. What is 3*5 ?",
      Answers: ["3", "5", "8", "15"],
      CorrectAnswer: "15",
      Degree: 10,
    },
    {
      Header: "6. What is 6*5 ?",
      Answers: ["6", "5", "30", "11"],
      CorrectAnswer: "30",
      Degree: 10,
    },
    {
      Header: "7. What is 3*4 ?",
      Answers: ["3", "4", "7", "12"],
      CorrectAnswer: "12",
      Degree: 10,
    },
    {
      Header: "8. What is 3/3 ?",
      Answers: ["3", "1", "6", "0"],
      CorrectAnswer: "1",
      Degree: 10,
    },
    {
      Header: "9. What is 3-2 ?",
      Answers: ["3", "2", "1", "-1"],
      CorrectAnswer: "1",
      Degree: 10,
    },
    {
      Header: "10. What is 3-5 ?",
      Answers: ["3", "5", "2", "-2"],
      CorrectAnswer: "-2",
      Degree: 10,
    },
  ],
};

let score = 0;
// let isSelected = false;
// let selectedAnswer = ""

const displayResult = () =>{
	const quizBody = document.querySelector(".div3")
	quizBody.style.display = "none"
	const quizFooter = document.querySelector("#q-footer")
	quizFooter.style.display = "none"
	const resultDiv = document.querySelector("#result")
	resultDiv.innerHTML=`Your Result is: ${score}/${Quiz.TotalDegree}`
	clearInterval(countDown);
}

var sec         = Quiz.QuizTime * 60,
    countDiv    = document.getElementById("timer"),
    countDown;
    

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        displayResult()
        countDiv.innerHTML = 'Time up';
        
    }
}

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("btn");
const quizQuestions = document.getElementsByClassName("div3")[0];
document.getElementById("qName").innerHTML=Quiz.QuizName;
document.querySelector(".div2").innerHTML=`Welcome: ${loginUser.username}`
let question = document.getElementById("question");
let choices = document.getElementById("choices");

startBtn.addEventListener("click", ()=>{
    const qBody = document.querySelector(".div3")
    if(loginUser.gender === "male")
        qBody.style["backgroundColor"] 
        = nextBtn.style["backgroundColor"] 
        = "lightblue"
    else
        qBody.style["backgroundColor"] 
        = nextBtn.style["backgroundColor"]
        = "lightpink"
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);
    displayQuestion(1);
    startBtn.style.display="none";
    nextBtn.setAttribute("value","1"); 
    nextBtn.style.display="block";
    
});

nextBtn.addEventListener("click", ()=>{
    if(!isSelected)
		return
    let value=nextBtn.getAttribute("value");
    value=parseInt(value);
    // console.log(`value: ${value}`);
    if(selectedAnswer == Quiz.Questions[value-1].CorrectAnswer)
    score+=Quiz.Questions[value-1].Degree
    
    if(value === 10){
        displayResult()
        return
    }

    isSelected = false;

    if(value>9){
        //console.log(typeof value);
        nextBtn.innerHTML="Finish";
    }
    nextBtn.setAttribute("value",`${value+1}`);
    displayQuestion(value+1);
    
});


function displayQuestion(qNumber) {

    question.innerHTML = `<h3> 
        <label for="q${qNumber}" > ${Quiz.Questions[qNumber-1].Header} </label>
        </h3>`;
    choices.innerHTML=""
    // let choicesLiteral = ""
    for(let i=0;i<Quiz.Questions[qNumber-1].Answers.length;i++){
        choices.innerHTML += 
        `<input type="radio" name="q${qNumber}" id="q-ch-${i}" value="${Quiz.Questions[qNumber-1].Answers[i]}" onclick="isSelected = true;selectedAnswer =${Quiz.Questions[qNumber-1].Answers[i]}">
        <label for="q-ch-${i}" >${Quiz.Questions[qNumber-1].Answers[i]}</label><br>`
        
    }
    // console.log(choicesLiteral);
    // choices.innerHTML=choicesLiteral
    // choices.innerHTML = 
    //     `<input type="radio" name="q${qNumber}" id="q${qNumber},ch0" value="${Quiz.Questions[qNumber-1].Answers[0]}">
    //     <label for="q${qNumber},ch0" >${Quiz.Questions[qNumber-1].Answers[0]}</label><br>
    //     <input type="radio" name="q${qNumber}" id="q${qNumber},ch1" value="${Quiz.Questions[qNumber-1].Answers[1]}">
    //     <label for="q${qNumber},ch1" >${Quiz.Questions[qNumber-1].Answers[1]}</label><br>
    //     <input type="radio" name="q${qNumber}" id="q${qNumber},ch2" value="${Quiz.Questions[qNumber-1].Answers[2]}">
    //     <label for="q${qNumber},ch2" >${Quiz.Questions[qNumber-1].Answers[2]}</label><br>
    //     <input type="radio" name="q${qNumber}" id="q${qNumber},ch3" value="${Quiz.Questions[qNumber-1].Answers[3]}">
    //     <label for="q${qNumber},ch3" >${Quiz.Questions[qNumber-1].Answers[3]}</label><br>`;  

}

