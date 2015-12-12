$(".navbar-brand").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$(".nav-button").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(".back").click(function(e){
  window.history.back();
})
