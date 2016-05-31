"use strict";

(function() {
  //NOTE(adam): put bot types into select elements
  Battledome.Factory.listBots(bot =>
    $(".setup .type").append(`<option value="${bot}">${bot}</option>`));

  $(".confirm").click(() => {
    $(".setup").hide();
    $(".combat").show();
  });

  $(".attack").click(() => {
    $(".combat").hide();
    $(".setup").show();
  });
})();
