const quizeDB = [	
		{

			question: "Q1: What is the full form of HTML ?",
			a: "Hello To May Land",
			b: "Hey to Text",
			c: "Hyper Text Markup Language",
			d: "Hypertext Markup Language",
			ans: "ans4"

		},

		{
			question: "Q2: What is the full CSS ?",
			a: "Hello To May Land",
			b: "Hey to Text",
			c: "Casecanding style sheet",
			d: "Hypertext Markup Language",
			ans: "ans3"

		},

		{

			question: "Q3: What is the full form of Computer ?",
			a: "Hello To May Land",
			b: "commonly opertor machine powerful unit type education research",
			c: "Hyper Text Markup Language",
			d: "Hypertext Markup Language",
			ans: "ans2"
		},


		{

			question: "Q4: What is the full form of js  ?",
			a: "Hello To May Land",
			b: "java script",
			c: "Hyper Text Markup Language",
			d: "Hypertext Markup Language",
			ans: "ans2"
		},


		{

			question: "Q5: What is the full form of wap  ?",
			a: "walress application protocall",
			b: "Wireless Application Protocol",
			c: "war app power",
			d: "Hypertext Markup Language",
			ans: "ans2"
		}

];
 

const question = document.querySelector('.question');
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');
const question4 = document.querySelector('#question4');
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;


const loadQuestion = () => {

	const questionList = quizeDB[questionCount];	

 	question.innerHTML = questionList['question'];

 	option1.innerHTML = questionList.a; 
 	option2.innerHTML = questionList.b;
 	option3.innerHTML = questionList.c;
 	option4.innerHTML = questionList.d;


 }

loadQuestion ();		
const getCheckAnswer = ()=>{

	let answer;

	answers.forEach((curAnsElem) =>{
		if(curAnsElem.checked)
		{
			 answer = curAnsElem.id;

		}
	});
	return answer;	

};

const deselectAll = ()=>{

	answers.forEach((data) => {
		data.checked = false;
	})

}

submit.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();
	
	if(checkedAnswer == quizeDB[questionCount].ans)
	{
		score++;
	};
		questionCount++;

		deselectAll();


		if(questionCount < quizeDB.length)
		{
			loadQuestion();

		}
		else{
			showScore.innerHTML = `

				<h3>your scored ${score}/${quizeDB.length} </<h3>
				<button class="btn" onclick="location.reload()">
					Play Again
				</button>
			`;
			showScore.classList.remove('scoreArea');

		}		

});