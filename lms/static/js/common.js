'use strict';

$(document).ready(function () {

  // hide course drop down menu (on the dashboard) on click outside
  $(document).on('click', function (e) {
    if ($('.actions-dropdown.is-visible').length) {
      var notCurrentDropdown = $('.action-more').not($(e.target)[0]).next();

      if (notCurrentDropdown.hasClass('is-visible')) {
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

  // move to current course tab in course nav menu
  if( $('.sequence-nav li button.active').length && window.innerWidth <= 991 ) {
    var navList = $('.sequence-nav ol').get(0);
    var activeButtonOffsetLeft = $('.sequence-nav li button.active').get(0).parentNode.offsetLeft;

    if ( activeButtonOffsetLeft > navList.offsetWidth ) {
      $('.xmodule_display.xmodule_SequenceModule .sequence-nav .sequence-list-wrapper').scrollLeft(activeButtonOffsetLeft);
    }

    $(document).on('click', '.xmodule_display.xmodule_SequenceModule .sequence-nav-button', function() {
      if( navList.scrollWidth > navList.offsetWidth ) {
        var activeButtonOffsetLeft = $('.sequence-nav li button.active').get(0).parentNode.offsetLeft;
        $('.xmodule_display.xmodule_SequenceModule .sequence-nav .sequence-list-wrapper').scrollLeft(activeButtonOffsetLeft);
      }
    });
  }

  $('.slider-holder').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Initialize the plugin
  $('#pop-up').popup({
    closebutton: true,
    scrolllock: true,
    transition: 'all 0.3s',
    onopen: function () {
      $('.slider-holder').slick('setPosition');
    },
  });

});
