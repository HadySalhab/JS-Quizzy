import Health from "../public/img/health.jpg";
import Math from "../public/img/math.jpg";
import Movies from "../public/img/movies.jpg";
import Music from "../public/img/music.jpg";
import Politics from "../public/img/politics.jpg";
import Programming from "../public/img/programming.jpg";
const categories = [
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
];

const allQuestions = [
	{
		category: "Math",
		questions: [
			{
				question: "3-5*4-1*7 = ?",
				choices: ["-18", "-20", "-24"],
				answer: "-24",
			},
			{
				question: "The number of 3-digit numbers divisible by 6, is",
				choices: ["150", "166", "149"],
				answer: "150",
			},
			{
				question:
					"Which of the following numbers gives 240 when added to its own square",
				choices: ["16", "15", "17"],
				answer: "15",
			},
			{
				question: "106 × 106 – 94 × 94 = ?",
				choices: ["2400", "2004", "1904"],
				answer: "2400",
			},
			{
				question: "What is 1004 divided by 2?",
				choices: ["502", "520", "5"],
				answer: "502",
			},
		],
	},
	{
		category: "Movies",
		questions: [
			{
				question: "What was the first movie in the Marvel Cinematic Universe?",
				choices: ["The Avengers", "Iron Man", "Spider-Man"],
				answer: "Iron Man",
			},
			{
				question: 'Which of these actors DIDN\'T appear in "Pulp Fiction"?',
				choices: ["Samuel L. Jackson", "John Turturro", "Bruce Willis"],
				answer: "John Turturro",
			},
			{
				question:
					"What is it called when an actor breaks character to directly address the audience?",
				choices: [
					"Breaking the 4th wall",
					"Bending the narrative",
					"Sweeping the rug",
				],
				answer: "Breaking the 4th wall",
			},
			{
				question:
					"Which of these movies was NOT directed by M. Night Shyamalan?",
				choices: ["The Sixth Sense", "Signs", "The Ring"],
				answer: "The Ring",
			},
			{
				question: 'In the movie "Frozen", who is Olaf?',
				choices: ["A snowman", "A ghost", "A knight"],
				answer: "A snowman",
			},
		],
	},
	{
		category: "Music",
		questions: [
			{
				question: "What is Fergie's real name ?",
				choices: [
					"The Fergie is her real name",
					"Stacie Ann Ferguson",
					"Ann Stacy Fergie",
				],
				answer: "Stacie Ann Ferguson",
			},
			{
				question: 'Who wrote the song "The way I live" ?',
				choices: ["Baby Boy da Prince", "T-Pain", "Akon"],
				answer: "Baby Boy da Prince",
			},
			{
				question: '"Big Girls Don\'t Cry" is a song by Fergie.',
				choices: ["True", "False"],
				answer: "True",
			},
			{
				question: "Who won American Idol season one ?",
				choices: ["Kelly Clarkson", "Ruben Studdard", "Fantasia"],
				answer: "Kelly Clarkson",
			},
			{
				question: "The song Umbrella was written by who ?",
				choices: ["Rihanna", "Hanna Montana", "PCD"],
				answer: "Rihanna",
			},
		],
	},
];

export { categories, allQuestions };
