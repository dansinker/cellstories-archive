##a brief history of cellstories
OK, so back in 2008, I started getting interested in the phenomenon of [Japanese Cell Phone Novels](http://www.nytimes.com/2008/01/20/world/asia/20japan.html?pagewanted=all), and wanted to experiment with the idea of publishing stories just to cell phones. If you can remember way back to 2007, the iPhone had just been introduced, sans app store, and the world we live in today was nothing but a very distant possibility. 

Anyway, I taught myself Rails, contacted a bunch of author friends, and started publishing short stories every day at CellStories.net. It was pretty awesome.

I managed to sustain the publishing schedule for about a year, then my credit card I was using to pay the hosting expired, the host forgot to tell me that, and next thing I knew they were socking me with a bill for a few hundred dollars that I couldn't afford. 

By that time, much of my time was being taken up by [another project](http://www.amazon.com/The-Epic-Twitter-Quest-MayorEmanuel/dp/B007SRW9AW/ref=sr_1_1?ie=UTF8&qid=1390460999&sr=8-1&keywords=epic+twitter+quest+mayor), and readership hadn't grown a ton, so I figured it was cool to call it a day.

I forgot that the only database existed on that server, and boom. Suddenly, there was not only no site available, but there wasn't even a way to resurrect an archive if I wanted to.

Well, a few weeks ago I was thinking about this and started poking around the [internet archive](http://www.internetarchive.org), but it didn't look like their bots had grabbed the actual story pages, instead grabbing the desktop-only view that was redirected from the story pages.

And then last night it hit me: wait, if their bot was being redirected, maybe it was grabbing the original story pages too somewhere. So I started poking around, and low and behold: there were the stories, lurking in the deep deep shadows of the internet archive!

So I wrote a node scraper that would grab the stories, strip out all the IA cruft, and old code from Cellstories, add some YAML frontmatter to each page, and then I converted everything to run as flatfiles thanks to Jekyll.

This is exciting for me. Maybe it'll be exciting for others. Also: it's still a work in progress.

##what is in this repo
So at the top-level are the scrapers I made to actually grab the content, and the two node modules they're dependent on.

After that in the [cellstories](/cellstories) directory are all the jekyll files.