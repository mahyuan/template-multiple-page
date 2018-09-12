// 'use strict';
// const {createLogger, format, transports} = require('winston');
// const {combine, timestamp, label, prettyPrint} = format;

// const logger = createLogger({
//   format: combine(
//     label({label: "right now!"}),
//     timestamp(),
//     prettyPrint()
//   ),
//   transports: [
//     new transports.Console(),
//     new transports.File({
//       filename: '../../logs/combine.log',
//       level: 'info',
//       colorize: true
//     })
//   ]
// })

// logger.log({
//   level: 'info',
//   message: 'what time is the test at?'
// })

'use strict';
const winston = require( 'winston' );

const logger  = {};

[ 'error', 'info', 'debug', 'warn', 'verbose', 'silly'].forEach( x => {
  winston.loggers.add( x , {
    console: {
      level: x,
      colorize: true
    },
    file: {
      filename: `../../logs/${x}.log`
    }
  });

  logger[x] = winston.loggers.get( x )[x];
});


winston.loggers.add( 'access' , {
  console: {
    level: 'info', 
    colorize: true
  }, 
  file: {
    filename: `../../logs/access.log`
  }
});

logger['access'] = winston.loggers.get( 'access' )['info'];

Object.freeze( logger );
module.exports = logger;
