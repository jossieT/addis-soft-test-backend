const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const config = require('./config');
morgan.token('message', (req, res) => res.locals.errorMessage || '');

const getIPFormat = () => (config.env === 'production' ? ':remote-addr - ' : '');

let accessLogStream;
if(config.env === 'development'){
 accessLogStream = fs.createWriteStream(
    path.join(__dirname, '..', 'logs/requestLogs.log'),
    { flags: 'a' }
);
}
const successResponseFormat = `${getIPFormat()}:method :url :status :response-time ms :user-agent :date`;
const successHandler = morgan(successResponseFormat, {
    stream: config.env === 'development' ? accessLogStream : process.stdout,
    skip: (req, res) => res.statusCode >= 400,
});

const errorResponseFormat = `${getIPFormat()}:method :url :status :response-time ms :user-agent :date - error-message: :message`;
const errorHandler = morgan(errorResponseFormat, {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400,
})

module.exports = { successHandler, errorHandler }