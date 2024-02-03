// Using Winston library
const { createLogger, format, transports } = require("winston");

// Creating logger instance and exporting as a module
module.exports.logger = createLogger({
  // Configure the log message format
  format: format.combine( 
    format.timestamp(),
    format.printf((info) => {
      const { timestamp, level, message, ...args } = info;
      const formattedArgs = Object.keys(args).length ? JSON.stringify(args, null, 2) : "";
      return `${timestamp} ${level}: ${message} ${formattedArgs}`;
    })
  ),
  transports: [new transports.Console({})], //  Creates a transport that logs messages to the console
});
