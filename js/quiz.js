"use strict";

(function() {
  //NOTE(adam): put bot types into select elements
  Battledome.Factory.listBots(bot =>
    $(".setup .type").append(`<option value="${bot}">${bot}</option>`));

  $(".name").click(isSetup);
  $(".type").click(isSetup);

  function isSetup() {
    $(".confirm")[0].disabled =
    !($(".bot1 .name").val() &&
      $(".bot1 .type").val() &&
      $(".bot2 .name").val() &&
      $(".bot2 .type").val());
  }

  $(".confirm").click(() => {
    $(".setup").hide();
    $(".combat").show();
  });

  $(".attack").click(() => {
    $(".combat").hide();
    $(".setup").show();
  });
})();
