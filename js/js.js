$(document).ready(function() {
    $(function () {
        $("#commentform").validate();
    });
});

var myvideo=document.getElementById("video1");
function playPause(){
    if(myvideo.paused)
    myvideo.play();
    else
    myvideo.pause();
}
