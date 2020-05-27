import Category from "./Category";
const GameEntry = (categories) => {
	const gameEntry = document.createElement("div");
	const gameEntryTitle = `<h1 class="u-text-center u-mb-2 heading-secondary">Please Select A Quiz Category</h1>`;
	gameEntry.insertAdjacentHTML("afterbegin", gameEntryTitle);
	const categoriesDiv = document.createElement("div");
	categoriesDiv.className = "grid";
	categories.forEach((cat) => {
		categoriesDiv.innerHTML += Category(cat.name, cat.img);
	});
	gameEntry.appendChild(categoriesDiv);
	return gameEntry;
};

export default GameEntry;
