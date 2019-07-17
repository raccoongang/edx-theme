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

  // hide course drop down menu (on the dashboard) on click outside
  $(document).on('click', function (e) {
    if($('.actions-dropdown.is-visible').length) {
      var notCurrentDropdown = $('.action-more').not($(e.target)[0]).next();

      if(notCurrentDropdown.hasClass('is-visible')) {
        notCurrentDropdown.removeClass('is-visible');
        notCurrentDropdown.attr('tabindex', -1);
      }

      if (jQuery(e.target).closest('.wrapper-action-more').length) {
        return;
      }

      var dropdown = $('.actions-dropdown');
      dropdown.removeClass('is-visible');
      dropdown.attr('tabindex', -1);
    }
  });

});
