# Design Patterns for Sorting - a paper
2015-10-23

In the paper ["Design Patterns for Sorting"][design-patterns-for-sorting], 
the internals of how to implement a decoupled version of a 
sorting algorithm is described. It also shows that the complexity of something
like a quicksort is not necessarily high, which should remove the fear of just
trying out to implement it.
Maybe that's a good idea for a kata, that might go into the [katas repo].

* algorithm
* sort
* paper

[design-patterns-for-sorting]: http://www.bandgap.cs.rice.edu/personal/adrice_swong/public/WebPages/research/SIGCSE01/dp4sortCamReady.pdf
[katas repo]: https://github.com/tddbin/katas

# Uncle Bob - Architecture: The Lost Years
2015-10-21

> If our answer is `well, we had to get to market fast` that's not going to cut it
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=1137

> If you believe the web constrains your architecture, you have lost the war from the beginning
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=1688

> I don't want you to spend a lot of time debugging, I want you to spend a lot of 
> time getting tests to pass.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=2793

> Another word for testable is decoupled. That's how you make something testable, you decouple.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=2996

Talking about rotten code, which is mostly argued to be done for speeding up (to market) 
reasons. About that he says:
> You do the thing that slows you down in order to go fast.
> I will leave you to deal with the logical inconsistency there.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=3041

Why he says that we fear to touch bad code:
> If you break it becomes yours.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=3101

He goes into detail why TDD is necessary and summarizes it all like this: 
> We keep control over the code, by having a suite of tests that we trust.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=3303

Uncle Bob about inheritance (that some frameworks force you to do, e.g. inherit from their base class):
> And when you derive, you marry. Once you have inherited from somewhere 
> there is no way out of that.
> Now everything in those base classes come streaming into your classes
> and you are stuck with them.
> But it's a one way marriage, it's a harem. You are in the harem. The guy
> who owns the framework [where the base class comes from] he is not married to you.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4349

> Here is the thing about frameworks, you should never trust them.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4400

His conclusion, after talking about the creation of FitNess and that it never
actually needed a database, is
> A good architecture allows major decisions, to be delayed until you can make them 
> with the most information, instead of the least.
and
> A good architect maximizes the number of decisions, not made.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4745

> You make the UI a plugin to your use case, you make the DB a plugin to your use case,
> all your frameworks become plugins to your use case, so that you in your application can 
> screw them and they can't screw you.
https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4925

* must watch
* video
* architecture
* TDD

# Invent the future - Reginald Braithwaite

> Optimizing for readability, sometimes the implementation is really terrible.
> Behind the scenes those testing frameworks and so on are really ugly. And they 
> are leaky abstractions.

You have to work with them in the way they were thought of to be used.

> You have to understand what the exact model is that makes it so easy to read.

https://youtu.be/uYcAjr2J_rU?t=1387

> Language features are kind of a technical debt. They give you something today, but down the
> road you will be paying for them.

# Your Code as a Crime Scene

[Use Forensic Techniques to Arrest Defects, Bottlenecks, and Bad Design in Your Programs by Adam Tornhill][https://pragprog.com/book/atcrime/your-code-as-a-crime-scene]

* must read
* book
* code quality

# The Little LISPer, Third Edition

http://www.amazon.com/Little-LISPer-Third-Daniel-Friedman/dp/0023397632

* must read
* book
* functional 
* lisp

# ES6+reactjs workshop by uxebu

http://www.meetup.com/uxebu-events/events/222317814/
https://gist.github.com/wolframkriesing/8b2dc5182d334ea730db

# Coupling+Cohesion explained

Well explained in 6 minutes: https://www.youtube.com/watch?v=ZND1JAJIofA
And a long discussion with some experts in this area https://www.youtube.com/watch?v=hd0v72pD1MI


# Michael Feathers

https://github.com/michaelfeathers/delta-flora
The original article that (I guess) led to delta-flora http://www.stickyminds.com/article/getting-empirical-about-refactoring

# Bookmark collect, May 2015
2015-05-20

[Tooling is Not the Problem of the Web](https://medium.com/@sebmarkbage/tooling-is-not-the-problem-of-the-web-cb0ae1fdbbc6)
[Modern JavaScript libraries: the isomorphic way](https://blog.algolia.com/modern-javascript-libraries-the-isomorphic-way/)

[Common Misconceptions About Inheritance in JavaScript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a)
surely a controversy article by [Eric Elliott](https://twitter.com/_ericelliott)

[... where frontend developers build full stack apps, without thinking about the backend.](http://nobackend.org/)

[Learn Ruby - with the neo ruby koans](http://rubykoans.com/) - I discovered it after I had started
the [ES6 katas].

[Amok - No Reload Live Editing for JavaScript](http://amokjs.com/)

[A test-driven approach to assessing JS skills](https://github.com/rmurphey/js-assessment) - something like [ES6 katas]?

Some slides about some [specific JS code smells](http://elijahmanor.github.io/talks/js-smells/#/).

[ESLint - The pluggable linting utility for JavaScript and JSX](http://eslint.org/) not using it yet? Get started!

[Sandi Metz' workshop, I am sure it will be awesome, but it's in the USA :(](http://www.sandimetz.com/pood-durham-2014)

[The Quantum Electrodynamics of Functional JavaScript](http://raganwald.com/2015/02/13/functional-quantum-electrodynamics.html)
suggested by [David](http://twitter.com/void_0).

["The most advanced responsive front-end framework in the world"](http://foundation.zurb.com/)

[Currying in ES6](http://h3manth.com/new/blog/2015/currying-in-es6/)

[ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)

[1st Darmstädter Legacy Code Retreat](http://letsdeveloper.com/2015/03/1st-darmstadter-legacy-code-retreat/)

[Das Reaktive Manifest](http://www.reactivemanifesto.org/de)

[Destructuring and Recursion in ES-6 via raganwald.com](http://raganwald.com/2015/02/02/destructuring.html)

[Understanding ECMAScript 6](https://leanpub.com/understandinges6/read) - a book on leanpub.

[ES6 Feature Proposals](http://tc39wiki.calculist.org/es6/) - totally incomplete, but some stuff is interesting to read.

[ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html) - not an easy read :).

[ES6 katas]: http://es6katas.org

* must read

# Estimation is evil

[A long article][60] by [@RonJeffries] about "overcoming the estimation obsession".

[@RonJeffries]: https://twitter.com/RonJeffries
[60]: https://pragprog.com/magazines/2013-02/estimation-is-evil

* estimation
* agile
* article
* must read

# Cohesion and Coupling explained

A [very good short 6min video][58] explaining how and why you should aim for high cohesion and loose coupling!  
And [this video 57min][59] video with all the stars :) discussing this topic more in detail.

[58]: https://www.youtube.com/watch?v=ZND1JAJIofA
[59]: https://www.youtube.com/watch?v=hd0v72pD1MI

* oop
* coupling cohesion
* classes
* must watch

# The keynote of keynotes

[Alan Kay at OOPSLA 1997 - The computer revolution hasnt happened yet](https://www.youtube.com/watch?v=oKg1hTOQXoY)
The notes for it
http://www.cc.gatech.edu/fac/mark.guzdial/squeak/oopsla.html
http://c2.com/cgi/wiki?TheComputerRevolutionHasntHappenedYet

# Alan Kay On Messaging

[These are great words][56] by Alan Kay and they are not so young and still so true. 
And I am only close to the beginning of really understanding.
But I have to, as usual, extract some of the key points for me.
Make sure to read the entire message anyways, it's really very short!

> I'm sorry that I long ago coined the term "objects" for this topic because it gets many people to focus on the lesser idea.
> The big idea is "messaging" - that is what the kernal of Smalltalk/Squeak is all about (and it's something that was never quite completed in our Xerox PARC phase).

This just means: make sure to understand how he means OO should be done. 
Need a starting point? Read [poodr] and listen to [Sandi Metz]'s various talks [findable online][57-1].

Inherently, once scratched on the surface of what OO means and reading about [object calisthenics][57] 
the question what is inheritance will stick out.  
And Alan Key writes about it:

> I would say that a system that allowed other metathings to be done in the ordinary course of programming (like changing what inheritance means, or what is an instance) is a bad design.

Two questions are raised here:
1) What does inheritance mean?
2) What is an instance?

/me has to go and read and answer those ...
And work on improving what he calls to be 

> Given the current low state of programming in general

(which I understand as: most programming done nowadays is "bad" [that's how I interpret "low state"] - maybe I am wrong)

[56]: http://c2.com/cgi/wiki?AlanKayOnMessaging
[57]: http://williamdurand.fr/2013/06/03/object-calisthenics/
[57-1]: https://www.youtube.com/results?search_query=sandi+metz

* oo
* object calisthenics
* oop
* inheritance

# OO (with Message passing) - explained by Sandi Metz

I have been titled as a [Sandi Metz] fanboy, I am :).
I use "send to" and "plays the role" since I read her book [poodr].

If you are looking for actionable hints about how to do OO right, remember those four:

> Isolate the thing that varies  
> Name the concept  
> Define the role  
> Inject the players  

more info you find in [her railsconf talk][54] linked below where she talks about
 
> Inheritance is for specialization, not for sharing code

and [find here][55] why 

> the IF keeps us from thinking OO 

I also like to quote her on 

> Inheritance is a knife that turns in your hand

* object-oriented design
* oo

[54]: https://www.youtube.com/watch?v=LdWMcs9EEOE&feature=youtu.be&t=28470
[55]: https://www.youtube.com/watch?v=LdWMcs9EEOE&feature=youtu.be&t=27765
[Sandi Metz]: https://twitter.com/sandimetz
[poodr]: http://poodr.com

# `browser` field in npm's package.json

> The browser field is where the module author can hint to the bundler which elements (other modules or source files) need to be replaced when packaging.

Read [this file][53] for all the details.

[53]: https://gist.github.com/defunctzombie/4339901

# Pharo - object-oriented programming language and a powerful environment

> Pharo is a pure object-oriented programming language and a powerful environment, focused on simplicity and immediate feedback (think IDE and OS rolled into one).

In the discussion about refactoring etc. at the [Agile Tuesday][52] someone mentioned 
[Pharo][50] which is supposed to be quite advanced in all things, just as the quote above 
mentions. Just watching the first 10min of [this video][51] was enough to be convinced that this
looks really interesting, I am adding it to my "must look at" list :).

[50]: http://pharo.org/
[51]: https://www.youtube.com/watch?v=Nmcou_5um2s
[52]: http://agiletuesday.org

* programming language
* ide
* refactoring
* must look at

# reapp.io

The new [dojo][49]? I started with dojo about 10 years ago, or so.
Now I see [reapp][48] which seems to be the same as dojo, lots of widgets,
just around react and transfered 10 years ahead and to mobile.  
Good stuff? Or not?

[48]: http://reapp.io/
[49]: http://dojotoolkit.org/

* dojo
* javascript framework
* UI widgets

# Typeslab

With [typeslab.com][47] you can write poster like text.  
![for slides maybe?][46]

[46]: http://i.imgur.com/CpDxngp.png
[47]: http://typeslab.com/

* for slides
* poster
* typography

# "I made it object-oriented"

Another pearl by [@KevlinHenney] in his [Functional Programming You Already Know][43] 
is [his explaination of why we actually should leave out prefixes][45] to our functions, such as `get`
and `set`. At the same time he explains better object-orientation and a more functional style.

> "get" is an imperative word, it's a noise word. But it's an imperative.
> If you want to start thinking about things in an non-imperative way, stop using imperative words.  
> The words influence the way you think.

And in case you are also wondering, like me, what "imperative" really means, here is wikipedia's explaination

> imperative programming is a programming paradigm that describes computation in terms of statements that change a program state

And as Kevlin explains some seconds later, very well: "get" means to change something (or move around). 
Either 1) move money from one account to another or 2) change or move your marital state from single to married.
But getting a year from a `Date` object does not move/change anything.

[45]: https://www.youtube.com/watch?v=lNKXTlCOGEc&feature=youtu.be&t=2331

* object-oriented
* functional
* get-prefix
* imperative
* must watch
* ~~watch later~~

# Decoupling explained from a different angle

[@KevlinHenney] is always worth watching, so there is [Functional Programming You Already Know][43] by him.
I would like to extract this one piece where [he explains decoupling][44] in a, ask I think, great way.
He says:

> Let me translate "does not care" into computer science language. "Does not care" means decoupling.

[43]: https://www.youtube.com/watch?v=lNKXTlCOGEc
[44]: https://www.youtube.com/watch?v=lNKXTlCOGEc&feature=youtu.be&t=1485

* functional
* programming

# Globally installed npm packages = evil

Nothing to add to [this post][42]

> Many modules [...] encourage you to globally install them. This is a fragile practice as you might have multiple projects with dependencies on different versions of the same module. Rule of thumb: do not install Node packages globally if you can reasonably avoid it. You can almost always reasonably avoid it.

[42]: https://medium.com/@brianleroux/es6-modules-amd-and-commonjs-c1acefbe6fc0

* npm
* nodejs

# surge.sh - gh-pages.next?

[The site][40] states that it is this:

> Zero-bullshit, single–command, bring your own source control web publishing CDN.

[On the blog post][41] it revelas a bit more interesting information, imho.

> Existing publishing solutions such as Github Pages and Amazon S3 were developed prior to the recent changes in client-side web development practices and thus didn’t have front-end developers in mind when they were built. These services leave a lot to be desired when it comes to deploying static web projects.

Now I expect to find what it can do beyond gh-pages, etc. And that's what it says.

> With surge you effortlessly get things like…
>  
> - Custom 404.html files.
> - Catch-all 200.html files (for PushState apps).
> - SSL.
> - Indifferent (intelligently) about trailing slashes (“/”).
> - Clean URLs (indifferent about trailing .html).
> - Far-future expire headers.
> - Easy collaboration built right in.

To me all this seems like something that gh-pages can do too, it just requires a bit
of setup. What do I miss? I guess I just expected much more :).

[40]: https://surge.sh/
[41]: https://medium.com/surge-sh/introducing-surge-the-cdn-for-front-end-developers-b4a50a61bcfc

* github-pages
* static page
* deploy

# How to Use npm as a Build Tool [2014-03-20]

I am sure my partner [@Tobias] posted this link in our internal [flowdock][38] (never used it? do it now! it's Slack in better).
[@Tobias] knows all the tools.  
And we at [uxebu] are not so big grunt, gulp, etc. fans we rather let npm do the jobs that
it just does well, so here are some pieces extracted from a great article about how to use [npm as build tool][39].

This pretty much summarizes what you are going to read, if you follow [this link][39].

> some developers were brazen enough to present me with a Gruntfile and say "how could this be done in npm?!". I thought I'd pull out how-tos from the original draft and make a new post, just focussing on how to do these common tasks with npm.

Windows always comes in the way again, there are some good tips here how to work around it.

> 1) Rather than relying on built in commands, you could simply use alternatives - for example instead of using rm, use the npm rimraf package.  
> 2) Rather than trying to use syntax that is not cross compatible, stick to just the above ones. You'd be surprised just how much you can get done with just &&, >, |, and <.

Finally glob's `**` deciphered, for me :)

> such as *.js and expand the stars out as wildcards. Using two stars allows it to search recursively.

Version bumping is baked into NPM.

> This actually comes baked into npm (it is a package manager after all). Simply run npm version patch to increment the patch number (e.g. 1.1.1 -> 1.1.2), npm version minor to increment the minor version number (e.g. 1.1.1 -> 1.2.0) or npm version major (e.g. 1.1.1 -> 2.0.0).

[@Tobias]: http://twitter.com/tklipstein
[38]: http://flowdock.com
[uxebu]: http://uxebu.com
[39]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

* npm
* tool
* nodejs

# Fish shell [2014-03-20]

[Another tool I have to look at!?][36] Just found via [this article][37].

[36]: http://fishshell.com/
[37]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

* shell
* bash
* OS
* tool

# Microkanrens [2014-03-20]

I first heard [@bodil] talk at the 2014 craftconf in Budapest where I saw her presentation 
where she was live coding in at least 10 languages on stage. Of course I started following
her on twitter back then and from time to time I recap her tweets just to see what
other interesting are out there in the world of functional stuff that I should look 
at. And there surely is always enough of it that I either never have heard of or that
will cost me another couple of unplanned days to dive into in order to not feel so stupid
anymore :).

Another thing she just posted, I guess preparing for another talk, is [µkanrens][35].
They are inspired by [minikanren][33]
 
> an embedded Domain Specific Language for logic programming.

I actually came across because I was once again hunting ES6 stuff. And found 
[some beautiful code in her repo][34]. And I had thought I used many of the new ES6 features :).

[@bodil]: https://twitter.com/bodil
[33]: http://minikanren.org/
[34]: https://github.com/bodil/microkanrens/blob/master/mk.js
[35]: https://github.com/bodil/microkanrens

* functional programming
* logic programming

# Unorthodocs: Abandon your DVCS and Return to Sanity [2014-03-20]

[A nice read about DVCSes][32], let me mention here the two things I like best.
1) Is about the feeling I still have when working with git :)

> Here’s a tip: if you say something’s hard, and everyone starts screaming at you—sometimes literally—that it’s easy, then it’s really hard. The people yelling at you are trying desperately to pretend like it was easy so they don’t feel like an idiot for how long it took them to figure things out. This in turn makes you feel like an idiot for taking so long to grasp the “easy” concept, so you happily pay it forward, and we come to one of the two great Emperor Has No Clothes moments in computing.

And 2) towards the end of the article, make sure to read the comparison of contributing before we had git pull requests and 
today with github PRs. In short, it used to be
5 steps vs. 9 steps nowadays and quite a lot more knowledge we need to contribute via PRs.

Excuse me, I have to go back and install mercurial now :).

[32]: http://bitquabit.com/post/unorthodocs-abandon-your-dvcs-and-return-to-sanity/

* dvcs
* git
* svn

# How to be a great software developer [2014-03-20]

[How to be a great software developer][31] is a looong read, but it's worth reading, since it contains lots of truths.

Refactoring is by far the most underevaluated technique of working.
I mostly get the impression we like to rewrite and start on the green field.
But how can the (mostly hidden) value that is there in some source code survive if we throw it away?
Therefore ...

> Start with something ugly but functional and then apply and reapply yourself to that ugly and misshapen solution and refactor it back into its simplest form. 

And the goal of reafactoring is to make the thing the source does simple.

> Simplicity comes far more reliably from work than from brilliance. It comes more predictably from code written, than from thought expended. It comes from effort.

Go learn how to write better code, if you can't learn how to make the ugly code you wrote nicer.

> Your code has two functions: the first is its immediate job. The second is to get out of the way of everyone who comes after you and it should therefore always be optimised for readability and resilience.

So true

> Lazily written code slows you down, increases cycle times, releases bugs and pisses everyone off.

Just discussed the last two days what are the right tests to write, etc. and here comes the summary in short:

> There is no intuitive answer to what the right amount of testing is.
> Take the time to understand what really needs tests and how to write good tests. Take the time to see when tests add value and what the least you need from them really is. 

[31]:  http://peternixey.com/post/83510597580/how-to-be-a-great-software-developer

* testing
* refactoring
* good developer
* good code

# You had one job [2014-03-17]

I think [this][30] is a collection of funny accidents that I have to remember, might come in 
handy for a next slide set.

[30]: https://twitter.com/_youhadonejob

* fun

# Make your site a bit safer

Any browser project should [have a look at DOMPurify][29] at least, if not apply it right away.
This might not be what you want to apply right away, but maybe it triggers you to learn
more about this field, when security issues hit you it might be too late.

> DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.  
> DOMPurify is written by security people who have vast background in web attacks and XSS.

[29]: https://github.com/cure53/DOMPurify

* security
* browser
* javascript
* client-side

# Brand assets - the logo (sets) of a company or service

For [TDDBin] I was just looking for all the icons to use on the website, icons from 
github, trello and twitter to embed them. And I found out that the collection of those
images/graphics are called __brand assets__. Next time you search for them, don't use the term logo, 
use "brand assets".

* icons
* logos
* graphics
* design
* brand

[TDDBin]: http://tddbin.com

# Driven to Tests by Kevlin Henney

This is a great talk by [@KevlinHenney] 

> When people write tests, they write less code.  

Take a step back and try to look at the code from your colleagues perspective [27]:
> If I think it's difficult to use, what do the others think?

He says about the question if tests slow you down [28]:
> Yes, tests are your breaks. They will allow you to go faster, for the very reason they slow you down.

[@KevlinHenney]: https://twitter.com/KevlinHenney
[27]: https://www.youtube.com/watch?v=jGuKz7bNZRU#t=1440
[28]: https://www.youtube.com/watch?v=jGuKz7bNZRU#t=5581

* video
* testing
* clean code
* tdd

# Sound generation in the browser [2014-02-23]

It's not additional synthesis, as I would interpret the headline first, 
but it's pretty hard core cool what is possible in the browser already.
See this the ["Quick 'n' easy game sound effects generator."][25] including [source code][25].

[25]: https://github.com/grumdrig/jsfxr
[26]: http://github.grumdrig.com/jsfxr/ 

* sound 
* javascript
* browser

# Deploying to gh-pages after successful test run on travis

I wanted to just push my source code to github's master branch and all the deployment after that shall be automatic. 
Every dev-op reading this will say "yeah sure, wtf?". To make it a bit simpler, I have a pure client-side
app, in this case http://tddbin.com. So I started searching and tweeting.  
It all started with this tweet and the initial [help from Stephan][24b] 
Then I worked through this [article][24a], which is actually wrong where it states the `travis-encrypt`
call. In short it has to be like this: `travis-encrypt -r tddbin/tddbin-frontend GH_TOKEN=<the token github gave you>`
and everything behind the repo name will be encrypted, you can also add multiple env vars and then use them.
Just like [I did it on tddbin][24c]. In order to have the env vars you encoded available 
you need to put the encrypted secret into the [.travis.yml file][24d].

[24a]: https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
[24b]: https://twitter.com/boennemann/status/568061867052163073
[24c]: https://github.com/tddbin/tddbin-frontend/blob/23eaa1eb4049da64ee3b941270e92f8fd13b10c0/scripts/deploy-to-ghpages.sh#L5
[24d]: https://github.com/tddbin/tddbin-frontend/blob/23eaa1eb4049da64ee3b941270e92f8fd13b10c0/.travis.yml#L10-L13

* devops
* deploy
* gh-pages
* javascript
* travis

# Bash scripting "if" explained in short

http://stackoverflow.com/a/18220301/21050

# Problem including mocha into a browserify build [2014-02-19]

I don't get mocha to build with browserify, I always get

```
Error: Cannot find module '../suite' from '/Users/me/tddbin-frontend/node_modules/mocha'
```

The problems mentioned in [those][22] [issues][23] seem to have no solution provided yet.
It seems that browserify picks up a built `mocha.js` and can't handle some magic done in there.  
My solution for now is to use [mocha from the CDN][24], which might not work in all use cases, but does for me now.

[22]: https://github.com/mochajs/mocha/issues/1316
[23]: https://github.com/mochajs/mocha/issues/880
[24]: http://cdnjs.com/libraries/mocha

# Refactoring knowledge [2014-02-18]

A Coding Dojo with [@XaV1uzz] doing [the Kata Mars Rover][20]
and another one where he shows [how to refactor the bowling kata to patterns][21].
They are both in spanish!

[20]: https://www.youtube.com/watch?v=saNHzjHwbsc
[21]: http://www.decharlas.uji.es/es/refactorizando-a-patrones-kata-bowling
[@XaV1uzz]: http://twitter.com/XaV1uzz

* kata
* spanish
* watch later
* video

# Keep a github fork in sync [2014-02-17]

As often as I look for this, I need to write it down.
For example for my fork of [github:dropping-spray], which got inspired by this [tweet][19]
and the following discussion.

```bash
> # 1 - add the (so called) upstream repo so you can refer to it locally
> git remote add upstream git@github.com:Narigo/dropping-spray.git
> #2 - just double check it's there
> git remote -v
origin	git@github.com:wolframkriesing/dropping-spray.git (fetch)
origin	git@github.com:wolframkriesing/dropping-spray.git (push)
upstream	git@github.com:Narigo/dropping-spray.git (fetch)
upstream	git@github.com:Narigo/dropping-spray.git (push)
> # 3 - get up to date, I think in the flow as listed here its not needed, we are quite up to date
> git fetch upstream
> # 4 - fianlly merge in the latest stuff from the original repo
> git merge upstream/gh-pages
```

As you can see above, I merged the `gh-pages` branch and not `master`!

[github:dropping-spray]: https://github.com/Narigo/dropping-spray/
[19]: https://twitter.com/NarigoDF/status/567572946626297857

* github
* fork
* remote repo
* sync

# Programming, Programmers and our craft

This is a [very nice interview (video)][18] with JB Rainsberger and 
Corey Haines, two of the people I closely follow and try to learn from
as much as I can.  
They are talking about the passion of being a programmer, how to become one
and how they think that a programmer can become better. They share
a lot of personal experience. Well worth your time.

[18]: http://vimeo.com/13914482

* programmer
* craft
* video
* ~~watch later~~

# Cookie libs for (node)js

If you want to dive into cookies, here is the [RFC6265].
I was looking around for some decent cookie libraries. There seem to be some
of them. And it is very irritating that some are as young as from last year.
I thought this topic is old enough so that there is one standard solution
and done. But I seem to be wrong. 
What all of them have in common is their quality of testing is quite interesting.
From nothing at all to hard core integration tests. Lot's of potential for 
refactoring projects.

https://github.com/jshttp/cookie  
The simplest cookie lib ever, I guess. Also great for understanding cookies well,
if it is complete - I don't know.
> cookie is a basic cookie parser and serializer. It doesn't make assumptions about how you are going to deal with your cookies. It basically just provides a way to read and write the HTTP cookie headers.

https://github.com/Ajnasz/ajncookie  
Basically the same feature set as the one above, though I really like
the API, it's so close to the request/response.
> A very simple cookie manager

https://github.com/pillarjs/cookies  
Seems to be pretty complex. Uses Keygrip underneath, so the actual lib is quite small. 
> Cookies is a node.js module for getting and setting HTTP(S) cookies. Cookies can be signed to prevent tampering, using Keygrip. It can be used with the built-in node.js HTTP library, or as Connect/Express middleware.

https://github.com/goinstant/tough-cookie  
The biggest one, that even implements cookieJar (a way to bundle and kinda anonymize/hide cookies). 
> RFC6265 Cookies and CookieJar for Node.js


[RFC6265]: http://tools.ietf.org/html/rfc6265

# Shell in JavaScript [2014-02-10]

I don't know why [shelljs] hasn't found me earlier :(  
This is bash the way I would feel comfortable with it, JavaScript style.  
[Update 2014-02-11] well it's not really all bash can do, it just imitates the interface
using JS as the language. I was looking for the REPL. Well start `> node` and 
there is the REPL :). So I played with it. Not as powerful and far from a 
replacement for bash but it spins quite some ideas.

[shelljs]: https://github.com/arturadib/shelljs

# Refactoring Rule of Three

[is a post][18] by [Adrian Bolboaca][@adibolb]

> The rule of three says:
>  
> Extract duplication only when you see it the third time.

[18]: http://blog.adrianbolboaca.ro/2015/02/refactoring-rule-of-three/
[@adibolb]: https://twitter.com/adibolb

* refactoring

# Git rebase, an explaination I like

I asked myself what branch rebase refers to. The one I want to rebase on or
the one I want to rebase from?

> Also notice that, like the git merge command, git rebase requires you to be on the branch that you want to move.

Thanks to the great [Rebasing][17] article I know now :). (And store it here, to know where to look it up).

In short. If I want to get my branch `about` to be back on top of master, I have
to rebase it onto master, like this:
```
git checkout about
git rebase master
```

As with everything, behave when rebasing! I believe that rebase is not meant for 
all situations. Sometimes it is much better to have a history visible in the commit
history.

[17]: http://rypress.com/tutorials/git/rebasing

* git
* rebase

# Links about naming things

While reading about naming classes, etc. I came across the obligatory
[c2 wiki article][10] and many more  
[Life without a controller, case 1][11] by [@CarloPescio]  
[Listen to your tools and materials][12] one of the many papers by [@CarloPescio]  
[The early history of smalltalk][13]  
[Execution in the Kingdom of Nouns][14] by Steve Yegge    
[Ask not what an object is, but...][15] by [@CarloPescio]  
[It Is Possible to Do Object-Oriented Programming in Java][16] by [@KevlinHenney]  

[10]: http://c2.com/cgi/wiki?DontNameClassesObjectManagerHandlerOrData
[11]: http://www.carlopescio.com/2012/03/life-without-controller-case-1.html
[@CarloPescio]: https://twitter.com/CarloPescio
[12]: http://www.eptacom.net/pubblicazioni/pub_eng/ListenToYourToolsAndMaterials.pdf
[13]: http://www.smalltalk.org/downloads/papers/SmalltalkHistoryHOPL.pdf
[14]: http://steve-yegge.blogspot.de/2006/03/execution-in-kingdom-of-nouns.html
[15]: http://www.carlopescio.com/2012/12/ask-not-what-object-is-but.html
[16]: http://www.infoq.com/presentations/It-Is-Possible-to-Do-OOP-in-Java
[@KevlinHenney]: https://twitter.com/KevlinHenney

* naming
* links
* must read
* smalltalk
* oop

# Just looks like OOP ...

Linked in the [comments of this][8] I found [another great article][9], which 
I just have to quote.

> Unlike other disciplines, software development shows little interest for classics. Most people are more attracted by recent works. Who cares about some 20 years old paper when you can play with Node.js?

io.js! LOL

> a vision of objects like little virtual machines, offering specialized services. Objects were meant to be smart. Hide data, expose behavior. It's more than that: Alan is very explicit about the idea of methods as goals, something you want to happen, unconcerned about how it is going to happen.

__expose behavior__

> It is unfortunate that much of what is called “object-oriented programming” today is simply old style programming with fancier constructs

Is he talking about me? I am trying hard!!!

> Software development is about discovering and encoding knowledge. Now, humans have relatively few ways to encode knowledge: a fundamental strategy is to name things and concepts.

Good wrap-up of why naming is hard.

> If you can't find a proper name for the class, try naming functions. Look at those functions. What is keeping them together? You can apply them to... that's the class name :-)

I have to remember that. Maybe that could be a good session for a [JSCodeRetreat][jscr], finding
class names.

> Handler, again, is an obvious resurrection of procedural thinking. What is an handler if not a damn procedure? Why do something need to be "handled" in the first place? Oh, I know, you're thinking of events, but even in that case, EventTarget, or even plain Target, is a much better abstraction than EventHandler.

Ouch, that hurt. I still catch me wanting to write various Handlers. I like the EventHandler
example.

[9]: http://www.carlopescio.com/2011/04/your-coding-conventions-are-hurting-you.html
[jscr]: http://jscoderetreat.com

* oop
* naming
* class name
* software design
* jscr

# "Don't make objects that end with 'er'" [2014-02-04]

I was about to write a "Handler" class. But I remembered that the "er" classes
are not so good. And I mean, think about it. Even if it is a `RequestHandler` 
it still can do lots of things and can have many reasons to change, which breaks
the Single Responsibility Principle.
So I searched for it and found [this article][8].

> the jst of OOP is that we bind behavior to data

noted

> in nearly every "er" object case, there was a better name for it. And that giving it a better name would tend to make the design more encapsulated, less spaghetti code, in short more object oriented

now we are getting to the meat :)

> Take some sort of "Loader" for example. The focus here is on the unit of work it does. 
> [...] Now instead replace that with a LoadRecord and a LoadStream. 
> I'm reasonably confident you'll end up with something that is more akin to what the 
> original Founding Fathers of OOP had in mind.

A simple example: Loader => LoadRecord

> Until you apply the mindset for a while though, you'll never really know.

That is so true for a lot of things, and also a good reason why I do believe that
katas have a value.  
Just [read the article][8], it's quite short and compact but has some nice examples in it.

[8]: http://objology.blogspot.de/2011/09/one-of-best-bits-of-programming-advice.html

* oop
* software design

# Trash Your Servers and Burn Your Code: Immutable Infrastructure and Disposable Components

[a talk by Chad Fowler][7]

> Software gets too complex, tests slow, test coverage doesn't make you feel good, so you deploy less.
> The less often you deploy the scarrier it becomes.

I was just about to quote him on 

> comments are a code smell, there is just no way to validate them

which I strongly agree on. And just one sentence later he says this

> Tests are also a design smell. If you find yourself more time in your tests,
> and I don't mean in the design of your system.

which I just can't follow along. Because I think the test as your first user of the
code is doing exactly that for you "driving your design". Especially when your code is so
small and modular that you think you are doing great design that's when a test
is so easy to write and a simple way to also verify the code later (as opposed to comments)
which is the value the tests add. They serve as the docs for what your tiny-modules-composition
does, they allow others to go in change requirements and learn where they have to be implemented.
And so on. Don't they? Maybe I will get to that stage of understanding it at some point.

And Chad saying 

> My intention is to write code that can't possibly break.

I admire him! I think I still have lot's to learn.

> TDD is a great way to do design, but it is not a great way to prevent bugs

I think we agree basically :)  
[Watch his talk][7], it is really very good and contains enough brain food!

* video
* testing

[7]: https://www.youtube.com/watch?v=DVSNsAei0VE

# Beyond SOLID: The Dependency Elimination Principle [2014-01-23]

> simple pointers to create a clean, intelligible codebase that won't use a lot of dependencies
> - Kill Primitive Obsession
> - Name things as Nouns (and not using verb nouns that have an ‘er’ ending)
> - Remove duplication

First I read his article ["Why I Don't Teach SOLID"][4] where I didn't get his point,
but [the article where the quote above is from][5] does make lot's of sense.
Event though I after having read [poodr][6] I can't agree that inheritance will become
unused.

[4]: http://qualityisspeed.blogspot.de/2014/08/why-i-dont-teach-solid.html
[5]: http://qualityisspeed.blogspot.de/2014/09/beyond-solid-dependency-elimination.html
[6]: http://www.poodr.com/

* solid
* clean code
* dependencies
* ~~read later~~

# riot.js, a react-like lib [2014-01-22]

I read it first in my personal trending twitter search, then I saw it on [hacker news][1] 
and I pulled [the repo][2] and being intrigued by the minimal size, compared to react and polymer
I thought I try out the demo, didn't work. So I looked a the code, very opinionated.
My conclusion after having spent about just 1h on it I sumed up in [this tweet][3].

[1]: https://news.ycombinator.com/item?id=8928433
[2]: https://github.com/muut/riotjs
[3]: https://twitter.com/wolframkriesing/status/558248934985195520

* reactjs
* dom
* javascript
* framework

# Refactor to functional [2014-01-22]

> This article helps procedural or object oriented programmers refactor the way they think to a more functional approach using practical examples in JavaScript.

from Sep 2013
https://github.com/perryharlock/refactor-to-functional

* read later
* functional
* javascript
* refactoring

# Getting to know metalsmith [2014-01-21]

[I have to read this](http://www.robinthrift.com/posts/getting-to-know-metalsmith/), 
I just want to parse the data a bit
and I fail. I smell that I don't get the concept fully yet,
or that I am using it in a different way than it's meant.

* metalsmit
* blog
* read later

# Feature Injection: three steps to success [2014-01-20]

> Feature Injection is a business analysis process framework that allows teams to exploit the value of the traditional business analysis techniques in projects involving frequent iterative deliveries, such as the ones implemented using agile and lean processes.

http://www.infoq.com/articles/feature-injection-success

* read later

# CSON (JSON with CoffeeScript flavor) [2014-01-20]

> CoffeeScript-Object-Notation Parser. Same as JSON but for CoffeeScript objects.

https://www.npmjs.com/package/cson

* npm
* coffeescript

# A meta project [2014-01-20]

In order to keep all your meta data of your project in one place
and only create files that actually just copy those data
you can use [projectz](https://github.com/bevry/projectz)
where you maintain data like title, description, author(s), badges, ...
in one CSON file and with a special markup you can update
fill in the templates files like README, package.json, ...

* npm 
* nodejs
* javascript

# Complexity is outside the code [2014-01-20]

> Dan North and Jessica Kerr make a journey through complexity. At the other side we may find simplicity, or we may find the light at the end of the tunnel is just another oncoming ESB.

http://www.infoq.com/presentations/complexity-simplicity-esb

* complexity
* code
* watch later

# Infodeck [2014-01-20]

Martin Fowler named interactive or more online consumable slides
infodeck, [writes about it here](http://martinfowler.com/bliki/Infodeck.html)
and 
he [is building a frontend](https://github.com/martinfowler/mfweb)
for it which you can feed via XML.

* slides

# Workflows of Refactoring [2014-01-20]

Martin Fowler lists the kinds of refactoring, the reasons 
why we refactor code, [in his infodeck](http://martinfowler.com/articles/workflowsOfRefactoring/#2hats).

* refactoring

# Some coding katas [2014-01-20]

[found on stackoverflow](http://stackoverflow.com/questions/1432485/coding-katas-for-practicing-the-refactoring-of-legacy-code)

* katas

# webdriver API [2014-01-19]

[The webdriver API is here](http://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_WebDriver.html)

# Myth - the simpler CSS transformer? [2014-01-19]

[Myth](http://www.myth.io/) - 
a simpler alternative to all the CSS transformers out there?

It currently has a simple set of features: variables, math, colors, 
simpler media queries and some more. But it looks enough to me.
And it is written in JavaScript, no more ruby gem jams.

* css
* preprocessor

# Transducers(.js) [2014-01-19]

> reducing function transformers are getting a name - 'transducers', and first-class support in Clojure core and core.async.

Rich Hickey [invented it](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming)
and they quickly [came to JavaScript, of course](http://jlongster.com/Transducers.js--A-JavaScript-Library-for-Transformation-of-Data).
Dive right in [the code on github](https://github.com/cognitect-labs/transducers-js).

* clojure
* reducers
* functional

# Testing and refactoring legacy code [2014-01-19]

Very useful and right-away applicable insights 
into [refactoring legacy code](http://virtualjug.com/testing-and-refactoring-legacy-code/).
Seems the [VJUG has lot's good content](http://virtualjug.com/all-posts/).

* java
* refactoring
* legacy

# The introduction to Reactive Programming you've been missing [2014-01-19]

> The hardest part of the learning journey is thinking in Reactive. It's a lot about letting go of old imperative and stateful habits of typical programming, and forcing your brain to work in a different paradigm.  
> [...]  
> I think the world deserves a practical tutorial on how to think in Reactive, so that you can get started.

Find [the Rx tutorial here](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754),
watch out it gets you hooked :)

* reactive programming
* rx
* rxjs
* javascript
* functional

# Angular reviews [2014-01-19]

Lately they don't turn out so good, or is it my blurred vision?  
One by James Shore [An Unconventional Review of AngularJS](http://www.letscodejavascript.com/v3/blog/2015/01/angular_review)
and another by PPK [The problem with angular](http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html).

* javascript 
* angularjs
* frontend
* framework

# Paxos, algorithm to solve the consensus problem [2014-01-19]

I came across paxos more often lately.
The first time was at a meetup group "Papers we love" 
there was a [meetup in December about paxos](http://www.meetup.com/Papers-We-Love-Munich/events/213339452/).

> Paxos is an algorithm to solve the consensus problem.
> Paxos is only a small piece of building a distributed database: it only implements the process to write exactly one new thing to the system.

And [this is an explanation and demonstration](http://harry.me/blog/2014/12/27/neat-algorithms-paxos/)

* algorithm
* read later

# One Hacker Way - Erik Meijer [2014-01-19]

I really appreciate the things I learnt from Erik Meijer, but I am
not so sure I can follow all his opinions he states
[in this talk](http://vimeo.com/110554082).  
But nevertheless it's very entertaining!

> Writing tests is waste.  
> TDD is for scared people, it's for pussies.

Those statements are actually the funny parts of his talk, though
I am not sure how funny they are meant :).

* video
* agile

# World’s first (known) bootkit for OS X can permanently backdoor Macs [2014-01-19]

My lack of knowledge and understanding and knowing it scares me most
about [reading this article](http://arstechnica.com/security/2015/01/worlds-first-known-bootkit-for-os-x-can-permanently-backdoor-macs/),
because once I read it I know there comes
a slew of things I would have to learn too, but I still try hard ignoring it :).
Damn.

* security
* mac os

# Sandi Metz - The Design of Tests [2014-01-19]

Watch the author of [poodr] describing
[how to solve the problem of mocks and real code running out of sync](https://www.youtube.com/watch?v=qT5iriwidRg)!
(And lots of goodies about testing and stuff.)
Watch it twice, it's worth it :)

* video
* testing
* mocks
* ~~watch later~~

# Markdown used by metalsmith (this site here) [2014-01-19]

As I just found in the docs metalsmith, which again uses
[the package metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown)
which in again uses
[the package marked](https://github.com/chjj/marked)
describes [in the readme](https://github.com/chjj/marked#philosophy-behind-marked)
that is also supports
[github flavored markdown](https://help.github.com/articles/github-flavored-markdown/).
(I was actually just looking for how to strikeout things :)).

* markdown

# Mocks Aren't Stubs [2014-01-19]

> The term 'Mock Objects' has become a popular one to describe special case objects that mimic real objects for testing.

Read [the article from 2007](http://martinfowler.com/articles/mocksArentStubs.html)!!!

* mock
* stub
* testing
* read later

# Servo: Building a Parallel Browser [2014-01-18]

Servo is an experimental browser engine for modern multi-core hardware written in an experimental memory safe language called Rust.
[Maybe the future Firefox engine?](https://www.youtube.com/watch?v=7q9vIMXSTzc)

* firefox
* browser engine
* rust

# Smallest test runner [2014-01-18]

IDEs are awesome but sometimes in my way and setting up test runners
sometimes defeats the purpose of being fast with tests, which also
means having feedback constantly and continuously. Thanks to
[@Christoph](http://twitter.com/c089) for showing me the shortest
test runner there is, it runs on the command line, like this:

    while true; do npm test; sleep 3; done;

it assumes of course, your tests can be run via `npm test`.

* tdd
* testing

# Speed up Mac OS X Yosemite [2014-01-17]

I expected my new 15" Retina MacBook Pro to just blow my mind
in terms of speed. But it didn't ... until now I am pretty
disappointed. So I finally did [some cleanup this weekend
that promises to speed up](https://discussions.apple.com/thread/6623697), I am hoping.

* macos
* speed

# Markdown syntax, the spec [2014-01-15]

I never knew which is _the_ right markdown syntax, I took the five minutes to find out
now I know, it [seems to be this one here](http://daringfireball.net/projects/markdown/syntax).
At least following the link chain that lead me from
[metalsmith](http://www.metalsmith.io/),
which I [use here to create this site](https://github.com/wolframkriesing/wolfram.kriesing.de/blob/7bd5d8af1b4e3652290900b1eeb4c5dada7a6bfc/package.json#L23-L24)
to the markdown syntax.

* markdown

# Deploy built files easier via gh-pages branch on github [2014-01-10]

I found it always painful to only update the gh-pages branch for
deploying to a custom domain, an easy solution is pushing a
subdirectory to gh-pages branch, like so

    git subtree push --prefix docs origin gh-pages

found at [gsferreira.com](http://gsferreira.com/archive/2014/06/update-github-pages-using-a-project-subfolder/)

* git
* github

# Purpose of .PHONY in a Makefile [2014-01-10]

The [answer on stackoverflow](http://stackoverflow.com/questions/2145590/what-is-the-purpose-of-phony-in-a-makefile)
and also a more linux focused one
[on linuxedevcenter.com](http://www.linuxdevcenter.com/pub/a/linux/2002/01/31/make_intro.html?page=2)
as given as reference
in the article.

* makefile