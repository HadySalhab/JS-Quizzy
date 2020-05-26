import Category from "./components/Category";
import Health from "../public/img/health.jpg";
import Math from "../public/img/math.jpg";
import Movies from "../public/img/movies.jpg";
import Music from "../public/img/music.jpg";
import Politics from "../public/img/politics.jpg";
import Programming from "../public/img/programming.jpg";
const categories = [
	{
		name: "Health",
		img: Health,
	},
	{
		name: "Math",
		img: Math,
	},
	{
		name: "Movies",
		img: Movies,
	},
	{
		name: "Music",
		img: Music,
	},
	{
		name: "Politics",
		img: Politics,
	},
	{
		name: "Programming",
		img: Programming,
	},
];
const app = document.querySelector(".app");
function App() {
	const categoriesDiv = document.createElement("div");
	categoriesDiv.className = "categories";
	categories.forEach((cat) => {
		categoriesDiv.innerHTML += Category(cat.name, cat.img);
	});
	app.appendChild(categoriesDiv);
}

export default App;
