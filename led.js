const {Board, Led} = require("johnny-five");
const {RaspiIO} = require("raspi-io");
const board = new Board({
  io: new RaspiIO()
});

board.on("ready", () => {
  const led = new Led("GPIO4");
  led.blink(500);
});