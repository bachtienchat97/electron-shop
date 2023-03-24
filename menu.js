$(document).ready(function(){
  $("#menu-expand-collapse").click(function() {
    $("#responsive-menu-list").toggle();
  });
});

$("#responsive-menu-list a").click(function() {
    $("#responsive-menu-list").hide();
});

$("#menu-close-collapse").click(function() {
    $("#responsive-menu-list").toggle();
});
