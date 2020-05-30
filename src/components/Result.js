const Result = (message, score, totalNumberOfQuestion) =>
	`<div class="result">
			<h1>${message}</h1>
			<p>You Scored: ${score}/${totalNumberOfQuestion}</p>
			<a onclick="location.reload()" class="button button-primary">Main Menu</a>
			<a id="redo" class="button button-action">Redo Quiz</a>
		</div>
`;

export default Result;
