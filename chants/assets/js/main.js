$(document).ready(function() {
  var classes = ["one", "two", "three", "four"];

  $(".roll").each(function() {
    $(this).addClass(classes[~~(Math.random() * classes.length)]);
  });

  setInterval(function() {
    rollClasses();
  }, 750);

  function rollClasses() {
    $(".roll").each(function() {
      $(this).removeClass("one two three four");
    });

    $(".roll").each(function() {
      $(this).addClass(classes[~~(Math.random() * classes.length)]);
    });
  }

});
