(function(window,$,undefined){
  $("#gotop").click(function() {
    $("#header").ScrollTo(1000, 'easeout');
    return false;
  });
})(window,jQuery);