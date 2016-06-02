"use strict";

(function() {
  //NOTE(adam): put bot types into select elements
  Battledome.Factory.listBotTypes(bot =>
    $(".setup .type").append(`<option value="${bot}">${bot}</option>`));

  //NOTE(adam): only enable confirm button if entries filled
  function isSetup() {
    $(".confirm")[0].disabled =
    !($(".bot1 .name").val() &&
      $(".bot1 .type").val() &&
      $(".bot2 .name").val() &&
      $(".bot2 .type").val());
  }

  $(".name").change(isSetup);
  $(".type").change(isSetup);

  function populateStats(botNum) {
    const num = botNum;
    return function(botData) {
      $(`.stats.bot${num} .name`).html(botData.name);
      $(`.stats.bot${num} .type`).html(botData.label);
      $(`.stats.bot${num} .health`).html(botData.health);
    };
  }

  $(".confirm").click(() => {
    $(".setup").hide();
    $(".combat").show();

    Battledome.initialize({
      bot1: { name: $(".bot1 .name").val(), type: $(".bot1 .type").val() },
      bot2: { name: $(".bot2 .name").val(), type: $(".bot2 .type").val() }
    }, populateStats);
  });

  $(".attack").click(() => {
    const result = Battledome.fight();
    if(!result.stillFighting) {
      $(".done").show();
      $(".result").html("Combat complete!");
    }
  });

  $(".restart").click(() => {
    $(".combat").hide();
    $(".setup").show();
  });
})();
