(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function speak(name) {
    console.log("Good bye" + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
