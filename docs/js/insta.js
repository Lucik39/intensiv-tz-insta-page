$(document).ready(function(){ 

	var userFeed = new Instafeed({
		get: 'user',
		userId: '8796866921',
		accessToken: '8796866921.1677ed0.9988c90dbae243c4b1564d770e311a24',
		resolution: 'standard_resolution',
		limit: 60
	});
	userFeed.run();

	setTimeout(function(){
		$('.instafeed').addClass('shadowed');
	}, 100);


});