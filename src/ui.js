import GameEntry from "./components/GameEntry";
import Difficulty from "./components/Difficulty";
import Question from "./components/Question";
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
}
export default UI;
