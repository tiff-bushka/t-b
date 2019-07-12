///Modal

var modal = document.getElementById('myModal');

var img = $('.modal-enabled');
var modalImg = $("#img01");

$('.modal-enabled') .bind('mouseup', function(){
    modal.style.display = "flex";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
});

modal.onclick = function() {
  modal.style.display = "none";
}
