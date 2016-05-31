"use strict";

(function() {
  $(".confirm").click(() => {
    $(".setup").hide();
    $(".combat").show();
  });

  $(".attack").click(() => {
    $(".combat").hide();
    $(".setup").show();
  });
})();

// Battledome.Factory.listBots(bot => console.log("New", new Battledome.Factory[bot]()));
