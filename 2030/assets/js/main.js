$(document).ready(function(){
	console.log("I'm Ready!");

	$(".h-1").click(function(){
		$(".t-1").slideToggle("fast"); 
	});

	$(".h-1").click(function(){
		$(".t-1").slideToggle("fast"); 
	});
	
	$(".header").click(function(){
		$(".toggle").slideToggle("fast"); 
	});		
});



window.onload = function() {

    //add constraints object
    var constraints = { audio: true,
                        video: true};

    //call getUserMedia, then the magic
    navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();
    }).catch(function(err){
        console.log("yikes, and err!" + err.message);
    });

}
