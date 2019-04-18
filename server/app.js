const express = require('express');
const path = require('path');
const apiRoute = require('./routes/apiRequest');
// var logger = require('./utils/logger').getLogger();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

// middleware
app.use(function(res, req, next) {
	// 用户登录校验、权限校验
	// 灰度控制
	// referer校验
	next()
});
app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
	res.render('index')
});

app.use('/api', apiRoute);

module.exports = app;