var program    = require('commander');
var serialPort = require("serialport");
var SerialPort = serialport.SerialPort;

program
  .version('0.0.1')
  .option('-l, --list', 'list available ports')
  .option('-p, --port [path]', 'manually specify [path] to the device')
  .parse(process.argv);

function listPorts() {
	serialPort.list(function (err, ports) {
		ports.forEach(function(port) {
			console.log(port.comName);
			console.log(port.pnpId);
			console.log(port.manufacturer);
		});
	});
}

function main() {
	console.log( "Panasonic WJ-AVE55 serial control" );

	if( program.list ) {
		listPorts();
		return;
	}
	if( program.port ) {
		var sp = new SerialPort("/dev/tty-usbserial1", {
			parser: serialport.parsers.readline("\n")
		});
	}
}

exports.main = main;
