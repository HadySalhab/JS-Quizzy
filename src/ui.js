import GameEntry from "./components/GameEntry";
import Difficulty from "./components/Difficulty";
import Question from "./components/Question";
import Alert from "./components/Alert";
import Result from "./components/Result";

class UI {
	constructor() {
		this.elements = {
			app: document.querySelector(".app"),
		};
	}
	renderGameEntry(categories) {
		const { app } = this.elements;
		app.innerHTML = ``;
		app.appendChild(GameEntry(categories));
	}
	renderDifficulty() {
		const { app } = this.elements;
		app.innerHTML = ``;
		app.appendChild(Difficulty());
	}
	renderQuestion(question, choices) {
		const { app } = this.elements;
		const questionComponent = Question(question, ...choices);
		app.innerHTML = ``;
		app.appendChild(questionComponent);
	}
	renderTime(time) {
		const timer = `<p id="timer" class="timer">
                    ${time}
									</p>`;
		document
			.querySelector(".container")
			.insertAdjacentHTML("afterbegin", timer);
	}
	updateTime(timeRemaining) {
		document.querySelector(".timer").textContent = timeRemaining;
	}
	renderAlert(type, message) {
		this.clearAlert();
		document
			.querySelector(".question")
			.insertAdjacentHTML("afterbegin", Alert(type, message));
		setTimeout(() => {
			this.clearAlert();
		}, 2000);
	}
	clearAlert() {
		const alert = document.querySelector(".alert");
		if (alert) {
			alert.remove();
		}
	}
	showWrongValue(value) {
		const selectedElement = document.querySelector(`label[for="${value}"]`);
		selectedElement.style.color = "brown";
		selectedElement.style.fontWeight = "bold";
	}
	showCorrectValueAndDisableInputs(answer) {
		const answerElement = document.querySelector(`label[for="${answer}"`);
		answerElement.style.color = "green";
		answerElement.style.fontWeight = "bold";
		document.querySelectorAll("input").forEach((input) => {
			input.disabled = true;
		});
	}
	toggleSubmitToNext() {
		const submit = document.querySelector("#submit");
		submit.setAttribute("id", "next");
		submit.textContent = "Next";
		submit.classList.replace("button-action", "button-primary");
	}
	renderResult(message, score, totalNumbOfQuestions) {
		const result = Result(message, score, totalNumbOfQuestions);
		const { app } = this.elements;
		app.innerHTML = "";
		app.insertAdjacentHTML("afterbegin", result);
		document.querySelector(".timer").remove();
	}
}
export default UI;
