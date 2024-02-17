
const {Board, Switch, Led} = require("johnny-five");
const {RaspiIO} = require("raspi-io");
const board = new Board({
  io: new RaspiIO()
});
board.on("ready", function() {

  // Create a new `switch` hardware instance.
  // This example allows the switch module to
  // create a completely default instance
  var toggle = new Switch("GPIO24");
  const led = new Led("GPIO4");
 
  // Inject the `switch` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    toggle: toggle
  });

  // Switch Event API

  // "closed" the switch is closed
  toggle.on("close", function() {
    console.log("closed");
    led.off();
  });

  // "open" the switch is opened
  toggle.on("open", function() {
    console.log("open");
    led.on();
  });
});