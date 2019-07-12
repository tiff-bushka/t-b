///Interaction



var dragCheck = false;

$('.ui-wrapper').draggable({
	grid: [ 10, 10 ],
	scroll:false,

   drag: function(){
             // On drag set that flag to true
         dragCheck = true;
   },
   stop: function(){
             // On stop of dragging reset the flag back to false
         dragCheck = false;
   }
});

///Modal

var img = $('.modal-enabled');
var modal = document.getElementById('myModal');
var modalImg = $('#img01');
var captionText = document.getElementById('caption');

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

$('.modal-enabled') .bind('mouseup', function(){
	 if(dragCheck == false){
    modal.style.display = "flex";
		captionText.innerHTML = this.alt;
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
};
		if( $(this).hasClass('nocaption') ){
			captionText.style.backgroundColor = "transparent";
	}
		else {
			captionText.style.backgroundColor = "white";
		}
});

modal.onclick = function() {
  modal.style.display = "none";
}
