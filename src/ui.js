import GameEntry from "./components/GameEntry";
import Difficulty from "./components/Difficulty";
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
}
export default UI;
