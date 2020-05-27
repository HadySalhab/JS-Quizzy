import { categories } from "./data";
import Category from "./components/Category";

const app = document.querySelector(".app");

app.addEventListener("click", (e) => {
	if (e.target.className === "category") {
		console.log(e.target);
	}
});

function App() {
	const gameEntry = document.createElement("div");
	const gameEntryTitle = `
	<h1 class="u-text-center u-mb-2 heading-secondary">Please Select A Quiz Category</h1>
	`;
	gameEntry.insertAdjacentHTML("afterbegin", gameEntryTitle);
	const categoriesDiv = document.createElement("div");
	categoriesDiv.className = "categories";
	categories.forEach((cat) => {
		categoriesDiv.innerHTML += Category(cat.name, cat.img);
	});
	gameEntry.appendChild(categoriesDiv);
	app.appendChild(gameEntry);
}

export default App;
