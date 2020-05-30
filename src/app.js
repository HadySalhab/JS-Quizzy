import { categories, allQuestions } from "./data";
import Timer from "./timer";
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
		this.timer = null;
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
			} else if (e.target.id === "redo") {
				this.startTheGame();
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
				score: 0,
				index: 0,
			});

			this.showTimer();
			this.showQuestion();
		}
	}
	showTimer() {
		const { difficulty } = this.state;
		let time = 0;
		if (difficulty === "Hard") {
			time = 30;
		} else if (difficulty === "Medium") {
			time = 45;
		} else {
			time = 60;
		}

		const timerObj = new Timer(time, {
			onStart: (totalTime) => {
				this.ui.renderTime(totalTime);
			},
			onTick: (timeRemaining) => {
				this.ui.updateTime(timeRemaining);
			},
			onComplete: () => {
				this.ui.renderResult(
					"Time Ran Out",
					this.state.score,
					this.state.questions.length
				);
			},
		});
		this.timer = timerObj;
		timerObj.startTimer();
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
			}
			if (value === answer) {
				const newScore = this.state.score + 1;
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
				this.ui.renderResult(
					"Quiz Terminated",
					this.state.score,
					this.state.questions.length
				);
				this.timer.clearTimer();
			}
		} else {
			this.ui.renderAlert("info", "Please Select An Answer Before Submit!");
		}
	}
}

export default App;
