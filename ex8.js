$(document).ready(function() {
  var $btn = $("#btn"),
    $list = $("#list"),
    clicks = ASQ.react.of(),
    msgs = ASQ.react.of(),
    latest;

  $btn.click(function(evt) {
    clicks.push(evt);
  });

  // ******************************

  setInterval(() => {
    if (latest) {
      msgs.push("Clicked!!!");
      latest = null;
    }
  }, 2000);

  clicks.val(evt => {
    latest = evt;
  });

  msgs.val(msg => {
    $list.append($("<div>" + msg + "</div>"));
  });

  // TODO: setup sampled sequence, populate $list
});
