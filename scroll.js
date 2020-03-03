$(document).ready(function() {
$('.slideshow').mousewheel(function(e, delta) {
this.scrollLeft -= (delta);
e.preventDefault();
});
});
