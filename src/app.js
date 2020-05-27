import { categories } from "./data";
const app = document.querySelector(".app");
class App {
	constructor(ui) {
		this.state = {
			selectedCategory: null,
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
			}
		});
	}
}

export default App;
