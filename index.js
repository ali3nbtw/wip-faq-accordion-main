function manipulateParagraph1() {
	element = document.querySelector('.view-element1');

	if (!element.style.display || element.style.display === 'none') {
		element.style.display = 'block';
		console.log(element.style.display);
	} else if (element.style.display === 'block') {
		element.style.display = 'none';
		console.log(element.style.display);
	} else {
		console.log(element.style.display);
		console.log('zjebales');
	}
}
