import { categories, allQuestions } from "./data";
const app = document.querySelector(".app");
class App {
	constructor(ui) {
		this.state = {
			selectedCategory: null,
			difficulty: null,
			index: 0,
		};
		this.ui = ui;
		ui.renderGameEntry(categories);
		this.registerListeners();
	}
	setState(pieceOfState) {
		const oldState = this.state;
		const newState = { ...oldState, ...pieceOfState };
		this.state = newState;
	}
	registerListeners() {
		app.addEventListener("click", (e) => {
			if (e.target.className.includes("category")) {
				this.setState({
					selectedCategory: e.target.getAttribute("id"),
				});
				this.ui.renderDifficulty();
			} else if (e.target.className.includes("diffBtn")) {
				this.setState({
					difficulty: e.target.getAttribute("id"),
				});
				this.evalAndRenderQuestion();
			}
		});
	}
	evalAndRenderQuestion() {
		const catQuestion = allQuestions.find((currQuestion) => {
			return currQuestion.category === this.state.selectedCategory;
		});
		if (catQuestion) {
			const { answer, choices, question } = catQuestion.questions[
				this.state.index
			];
			this.setState({
				answer,
				question,
			});
			this.ui.renderQuestion(question, choices);
		} else {
		}
	}
}

export default App;
