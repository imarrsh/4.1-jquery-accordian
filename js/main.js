(function($){
  $(function(){
    "use strict";

    var $topNav = $('.top-nav');

    $topNav.on('click', function(){
      var $this = $(this);
      if($this.siblings().hasClass('open')){
        $this.siblings().removeClass('open');
        $this.addClass('open');
      }
      $this.siblings().find('.sub-nav').slideUp();
      $this.find('.sub-nav').slideDown();

    });

  });
}(jQuery));
