$(document).ready(function(){
	// Переменная отвечает за активную фотографию
	var slideIndex = 0;

	showPhotos();

	function showPhotos(){
		var i;
		var slides = $('#instafeed a');
		console.log(slides);
		console.log(slides.length); // 12

		// Запускаем цикл для скрытия фотографий
		for ( i = 0; i < slides.length; i++){
			console.log(i);
			$(slides[i]).hide();
		}
		// Считаем slideIndex переменная, которая отвечает за активные фотографии которую будем показывать
		slideIndex++;
		console.log(slideIndex);
		if ( slideIndex > slides.length ) {
			slideIndex = 1
		}
		$(slides[slideIndex-1]).show();
		setTimeout(showPhotos, 2000);
	}

});