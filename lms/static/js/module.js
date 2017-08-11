(function(define) {
  'use strict';

  var level2Name = "js-prosequence-level-2";
  var level1Name = "js-prosequence-level-1";
  var activeName = "js-prosequence-active";
  var markName = "js-prosequence";

  var NextUntagged = function(currentInCicle) {
    // find next in the sequence unmarked from this alg do the marking
    currentInCicle.addClass(markName);
    var target = currentInCicle.nextAll("li").not("." + markName).first();
    if (target.length) {
      return target;
    }
  }
  var PrevUntagged = function(currentInCicle) {
    // find prev in the sequence unmarked from this alg do the marking
    currentInCicle.addClass(markName);
    var target = currentInCicle.prevAll("li").not("." + markName).first();
    if (target.length) {
      return target;
    }
  }
  var cleanOldTags = function($sequence) {
    // anything holding the markName class has to be stripped from all the classes
    $sequence.find("." + markName)
      .removeClass(activeName)
      .removeClass(level1Name)
      .removeClass(level2Name)
      .removeClass(markName);
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        ProSequenceTagger($('#sequence-list'));
      }
    });
  });

  var ProSequenceTagger = function($sequence) {
    var $active = $sequence.find('li .active');

    // If there is no active, then re-schedule
    if ($active.length < 1) {
      console.log("No active element. Re-scheduling.")
      window.setTimeout(function() {
        ProSequenceTagger($sequence);
      }, 200);
      return
    }

    observer.observe($active[0], {
        attributes: true
    });

    cleanOldTags($sequence);

    var bagLevel2 = 7;
    var bagLevel1 = 3;
    var bagLevelActive = 1;

    var workingElement = $active.parent();
    var index = 1;
    while ((bagLevel2 > -1 || bagLevel1 > -1) && Boolean(workingElement)) {

      if (bagLevel2 > 0) {
        workingElement.addClass(level2Name);
      }
      if (bagLevel1 > 0) {
        workingElement.addClass(level1Name);
      }
      if (bagLevelActive > 0) {
        workingElement.addClass(activeName);
      }

      // select next for cicle
      if (index % 2) {
        // This will be the branch for the first cycle, then they will alternate
        workingElement = NextUntagged(workingElement) || PrevUntagged(workingElement);
      }
      else {
        workingElement = PrevUntagged(workingElement) || NextUntagged(workingElement);
      }
      index = index + 1;

      // repeat until all bags are emtpy
      bagLevel2--;
      bagLevel1--;
      bagLevelActive--;
    }
  }

  this.$(document).ready(function() {
    ProSequenceTagger($('#sequence-list'));
  })
}).call(this, define || RequireJS.define);
