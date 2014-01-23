var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://web.archive.org/web/20100108090344/http://www.cellstories.net/stories/show/3'

request(url, function(err, resp, body) {
		if (err)
			throw err;
		$ = cheerio.load(body);
		var story = $('#cellbox').html()
	fs.appendFile('story3.html', story);
	console.log('added story 3')
	});