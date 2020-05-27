import DiffButton from "./DiffButton";
const Difficulty = () => {
	const difficultyTitle = `	<h1 class="u-text-center u-mb-2 heading-secondary">Please Select Quiz Difficulty</h1>`;

	const difficulties = document.createElement("div");
	difficulties.className = "difficulties";
	difficulties.insertAdjacentHTML("afterbegin", difficultyTitle);

	const grid = document.createElement("div");
	grid.className = "grid";
	grid.innerHTML += DiffButton("Easy", "action");
	grid.innerHTML += DiffButton("Medium", "primary");
	grid.innerHTML += DiffButton("Hard", "caution");

	difficulties.appendChild(grid);
	const backButton = document.createElement("button");
	backButton.textContent = "Back";
	backButton.className = "button  u-block";
	backButton.setAttribute("onclick", "location.reload()");
	difficulties.appendChild(backButton);

	return difficulties;
};
export default Difficulty;
