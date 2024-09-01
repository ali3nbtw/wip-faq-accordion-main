function manipulateParagraph(number) {
	element = document.querySelector(`.view-element${number}`);

	minusElement = document.querySelector(`.icon-minus${number}`);

	plusElement = document.querySelector(`.icon-plus${number}`);

	if (!element.style.display || element.style.display === 'none') {
		element.style.display = 'block';
		console.log(element.style.display);

		minusElement.style.display = 'block';

		plusElement.style.display = 'none';
	} else if (element.style.display === 'block') {
		element.style.display = 'none';
		console.log(element.style.display);

		minusElement.style.display = 'none';

		plusElement.style.display = 'block';
	}
}
