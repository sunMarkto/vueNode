var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' }
    ],
    replaceConsole: true
});

exports.getLogger = (name) => {
    var logger = log4js.getLogger(name);
    // TODO: log level from config
    logger.setLevel('DEBUG');
    return logger;
}
