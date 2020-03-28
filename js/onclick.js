function showDetails(element) {
	element.style.zIndex = 1;
	let details = element.querySelector('.details');
	console.log('focus');
	details.style.display = 'block';
}

function hideDetails(element) {
	element.style.zIndex = 0;
	let details = element.querySelector('.details');
	console.log(details);
	details.style.display = 'none';
}