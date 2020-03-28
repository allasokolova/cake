function setElementsDisplay(selector, display) {
	let elements = document.querySelectorAll(selector);
	for (element of elements) {
		element.style.display = display;
	}
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	console.log('Mobile');
	setElementsDisplay('.mobile', 'inline-block');
	setElementsDisplay('.desktop', 'none');
	// alert("Вы используете мобильное устройство (телефон или планшет).")
} else { 
	console.log('Desktop');
	setElementsDisplay('.mobile', 'none');
	setElementsDisplay('.desktop', 'inline-block');		
	// alert("Вы используете ПК.")	
}