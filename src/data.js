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

const allQuestions = [
	{
		category: "Math",
		questions: [
			{
				question: "3-5*4-1*7 = ?",
				choices: [-18, -20, -24],
				answer: -24,
			},
			{
				question: "The number of 3-digit numbers divisible by 6, is",
				choices: [150, 166, 149],
				answer: 150,
			},
			{
				question:
					"Which of the following numbers gives 240 when added to its own square",
				choices: [16, 15, 17],
				answer: 15,
			},
			{
				question: "106 × 106 – 94 × 94 = ?",
				choices: [2400, 2004, 1904],
				answer: 2400,
			},
			{
				question: "What is 1004 divided by 2?",
				choices: [502, 520, 5],
				answer: 502,
			},
		],
	},
];

export { categories, allQuestions };
