autoSlider();
var left = 0;
var timer;
var bias = 250;  //смещение влево

function autoSlider (){
	timer = setTimeout(function (){
		var gallery = document.getElementById('gallery');
		left = left - bias;
		if (left < -postsCount*bias+30*bias) {
			left = 0;
			clearTimeout(timer);
		}
		gallery.style.left = left +'px';
		autoSlider ();
	}, 2000);
}


