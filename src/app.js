import { categories, allQuestions } from "./data";
const app = document.querySelector(".app");
class App {
	constructor(ui) {
		this.state = {
			selectedCategory: null,
			difficulty: null,
			index: 0,
			questions: null,
			question: null,
			answer: null,
			score: 0,
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
				this.startTheGame();
			} else if (e.target.id === "submit") {
				this.evalAnswerAndUpdateQuestion();
			} else if (e.target.id === "next") {
				this.showQuestion();
			}
		});
	}
	startTheGame() {
		const questionsCategory = allQuestions.find((currQuestion) => {
			return currQuestion.category === this.state.selectedCategory;
		});
		if (questionsCategory) {
			const questions = questionsCategory.questions;
			this.setState({
				questions,
				score: questions.length,
			});

			this.showQuestion();
		} else {
		}
	}
	showQuestion() {
		const { questions } = this.state;
		const { answer, choices, question } = questions[this.state.index];

		this.setState({
			answer,
			question,
		});
		this.ui.renderQuestion(question, choices);
	}
	evalAnswerAndUpdateQuestion() {
		const selectedChoice = document.querySelector(
			'input[name="action"]:checked'
		);
		if (selectedChoice) {
			const { answer, questions, index } = this.state;
			const value = selectedChoice.value;
			if (value !== answer) {
				this.ui.showWrongValue(value);
				const newScore = this.state.score - 1;
				this.setState({
					score: newScore,
				});
			}
			this.ui.showCorrectValueAndDisableInputs(answer);
			if (index < questions.length - 1) {
				this.ui.toggleSubmitToNext();
				let newIndex = index + 1;
				this.setState({
					index: newIndex,
				});
			} else {
			}
		} else {
			this.ui.renderAlert("info", "Please Select An Answer Before Submit!");
		}
	}
}

export default App;
