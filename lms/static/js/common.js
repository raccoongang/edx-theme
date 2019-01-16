'use strict';

$(document).ready(function () {

  // hide user drop down menu on click outside
  $(document).mouseup(function (e) {
    var $menu = $(".user-menu");
    var $dropdownMenuToggle = $('.user-dropdown');
    var $focused = $(':focus');
    if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && $dropdownMenuToggle.hasClass('active')) {
      $dropdownMenuToggle.click();
      if ($focused.is("input")) {
        $focused.focus();
      }
    }
  });

});
