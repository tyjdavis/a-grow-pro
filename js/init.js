(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



//more button in html
$('a.read_more').click(function(e){
  // console.log("test");
    e.preventDefault(); //to prevent standard click event
    $('.more_text').toggle();
});
