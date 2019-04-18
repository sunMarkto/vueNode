const express = require('express');
const router = express.Router();


router.get('/getApi', (req, res, next) => {
	setTimeout(() => {
		res.json({data:[1,2,3]})
	},500)
});

module.exports = router