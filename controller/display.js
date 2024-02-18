const {Board, LCD} = require("johnny-five");
const {RaspiIO} = require("raspi-io");
const board = new Board({
  io: new RaspiIO()
});

board.on("ready", function() {
  var lcd = new LCD({
    // LCD pin:----------
    //      RS    EN    D4    D5    D6    D7
    pins: ["GPIO5", "GPIO6", "GPIO13", "GPIO19"],
  });

  lcd.cursor(0, 0).print("GPIO5".repeat(8));
  lcd.cursor(1, 0).print("GPIO6".repeat(8));
});

