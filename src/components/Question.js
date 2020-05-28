const Question = (questiontxt, ...choices) => {
	const question = document.createElement("div");
	question.className = "question";
	let choiceUI = "";
	choices.forEach((choice) => {
		choiceUI += `<div class="question__group">
						<input type="radio" name="action" id="${choice}" value="${choice}" />
						<label for="${choice}">${choice}</label>
						<br />
					</div>`;
	});

	const fieldSet = document.createElement("fieldset");
	fieldSet.className = "question__field";
	fieldSet.insertAdjacentHTML(
		"afterbegin",
		`<legend>${questiontxt}</legend>
    ${choiceUI}
    `
	);
	question.appendChild(fieldSet);
	const submit = document.createElement("a");
	submit.className = "button button-action u-mt-2 u-dis-block";
	submit.id = "submit";
	submit.textContent = "Submit";

	question.appendChild(submit);
	return question;
};
export default Question;
