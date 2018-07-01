// *** Created by MF Alfafa ***
// *** 1 July 2018 ***
// *** miftahf77@gmail.com ***

//Initialize serial port
var SerialPort = require('serialport');
//"/dev/ttyS0" is a name of serial port GPIO14 and GPIO15 for RASPI Zero W, and the baudrate is 9600
//var port = new SerialPort('/dev/ttyUSB0', function (err) { baudRate: 19200 });

// File operation
var fs = require('fs');

// Serial port settings
var port = new SerialPort('COM8', { 
  baudRate: 19200,
  dataBits: 8,
  parity: 'odd',
  stopBits: 1,
  rtscts: false,
  xon: false,
  xoff: false,
  flowControl: false
});


//will be executed if there is an error in the serial communication
port.on('error', function (err) {
   console.error("error", err);
});

//will be executed if port is opened
port.on('open', function () {
  console.log('port opened...');
});

//will be executed if there is a serial data on a stream (receiving serial data)
port.on('data', function (data) {
  console.log(data.toString());
  fs.appendFile('serial_data.txt', data.toString(), function(err){
    if(err) throw err;
    // console.log('saved');
  })
});

//Running Forever
var runInterval = setInterval(runningFunc, 1000);        //Make a delay about 1 second
function runningFunc() {
}
