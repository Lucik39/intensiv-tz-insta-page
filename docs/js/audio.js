$(document).ready(function(){

	var audio = $('#audioTrack')[0];
	console.log(audio);

	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');
	$audioControl = $('[data-type="audio-control"]');

	initAudioPlayer();
	// запуск песни через 800 милис после загрузки сайта
	// setTimeout(initAudioPlayer, 800);

	function initAudioPlayer(){
		$playBtn.parent().show();
		audio.loop = true;
		// audio.play();

		$audioControl.click(function(){
			console.log('audio Control click');

			if( audio.paused ) {
				audio.play();
				$playBtn.parent().hide();
				$pauseBtn.parent().show();
				console.log('paying now');

			} else {
				audio.pause();
				$pauseBtn.parent().hide();
				$playBtn.parent().show();
				console.log('pause now');
			}


		});



	}

	// audio.play();

});
