// JavaScript Document

$(".widget, a").mouseenter(function() {
    $("#sigh-" + Math.ceil(Math.random() * 2))[0].play();
});