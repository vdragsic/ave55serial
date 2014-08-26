var program    = require('commander');
var serialPort = require("serialport");
var SerialPort = serialPort.SerialPort;

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
	var portPath = "/dev/ttyUSB0";
	console.log( "Panasonic WJ-AVE55 serial control" );

	if( program.list ) {
		listPorts();
		return;
	}
	if( program.port ) {
		portPath = program.port;
	}

	var sp = new SerialPort("/dev/ttyUSB0", {
		baudrate: 9600,
		databits: 8,
		//parity: 'mark',
		stopbits: 2,
		parser: serialPort.parsers.raw //.readline("\n")
	}, true); //open immediately

	sp.on("open", function() {
		var buff = String.fromCharCode(02) + "VMX:210" + String.fromCharCode(03);

		sp.write(buff, function(err, results) {
		    console.log('err ' + err);
			console.log('results ' + results);
		});
	});

}

exports.main = main;
