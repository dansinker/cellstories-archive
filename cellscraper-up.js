var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var i = 1

while (i<212) {

var url = 'http://web.archive.org/web/20111020165700/http://www.cellstories.net/stories/show/'+i

request(url, (function(i) { 
	return function(err, resp, body) {
		if (err)
			throw err;
		$ = cheerio.load(body);
		var story = $('#cellbox').html()
		var title = $('#cellbox h2').html()
		var author = $('#cellbox h3').html()
	fs.appendFile('story'+i+'.html', '---\nlayout: default\ntitle: '+title+'\nauthor: '+author+'\n---\n'+story);
	console.log('added ' +title)
	}
	})(i));
	i++;
};