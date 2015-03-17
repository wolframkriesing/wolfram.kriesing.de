---
permalink: false
template: links.html
title: tech links
date: 2015-01-09
description:
---

## You had one job [2014-03-17]

I think [this][30] is a collection of funny accidents that I have to remember, might come in 
handy for a next slide set.

[30]: https://twitter.com/_youhadonejob

* fun

## Make your site a bit safer

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

## Brand assets - the logo (sets) of a company or service

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

## Driven to Tests by Kevlin Henney

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

## Sound generation in the browser [2014-02-23]

It's not additional synthesis, as I would interpret the headline first, 
but it's pretty hard core cool what is possible in the browser already.
See this the ["Quick 'n' easy game sound effects generator."][25] including [source code][25].

[25]: https://github.com/grumdrig/jsfxr
[26]: http://github.grumdrig.com/jsfxr/ 

* sound 
* javascript
* browser

## Deploying to gh-pages after successful test run on travis

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

## Bash scripting "if" explained in short

http://stackoverflow.com/a/18220301/21050

## Problem including mocha into a browserify build [2014-02-19]

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

## Refactoring knowledge [2014-02-18]

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

## Keep a github fork in sync [2014-02-17]

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

## Programming, Programmers and our craft

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

## Cookie libs for (node)js

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

## Shell in JavaScript [2014-02-10]

I don't know why [shelljs] hasn't found me earlier :(  
This is bash the way I would feel comfortable with it, JavaScript style.  
[Update 2014-02-11] well it's not really all bash can do, it just imitates the interface
using JS as the language. I was looking for the REPL. Well start `> node` and 
there is the REPL :). So I played with it. Not as powerful and far from a 
replacement for bash but it spins quite some ideas.

[shelljs]: https://github.com/arturadib/shelljs

## Refactoring Rule of Three

[is a post][18] by [Adrian Bolboaca][@adibolb]

> The rule of three says:
>  
> Extract duplication only when you see it the third time.

[18]: http://blog.adrianbolboaca.ro/2015/02/refactoring-rule-of-three/
[@adibolb]: https://twitter.com/adibolb

* refactoring

## Git rebase, an explaination I like

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

## Links about naming things

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

## Just looks like OOP ...

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

## "Don't make objects that end with 'er'" [2014-02-04]

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

## Trash Your Servers and Burn Your Code: Immutable Infrastructure and Disposable Components

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

## Beyond SOLID: The Dependency Elimination Principle [2014-01-23]

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

## riot.js, a react-like lib [2014-01-22]

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

## Refactor to functional [2014-01-22]

> This article helps procedural or object oriented programmers refactor the way they think to a more functional approach using practical examples in JavaScript.

from Sep 2013
https://github.com/perryharlock/refactor-to-functional

* read later
* functional
* javascript
* refactoring

## Getting to know metalsmith [2014-01-21]

[I have to read this](http://www.robinthrift.com/posts/getting-to-know-metalsmith/), 
I just want to parse the data a bit
and I fail. I smell that I don't get the concept fully yet,
or that I am using it in a different way than it's meant.

* metalsmit
* blog
* read later

## Feature Injection: three steps to success [2014-01-20]

> Feature Injection is a business analysis process framework that allows teams to exploit the value of the traditional business analysis techniques in projects involving frequent iterative deliveries, such as the ones implemented using agile and lean processes.

http://www.infoq.com/articles/feature-injection-success

* read later

## CSON (JSON with CoffeeScript flavor) [2014-01-20]

> CoffeeScript-Object-Notation Parser. Same as JSON but for CoffeeScript objects.

https://www.npmjs.com/package/cson

* npm
* coffeescript

## A meta project [2014-01-20]

In order to keep all your meta data of your project in one place
and only create files that actually just copy those data
you can use [projectz](https://github.com/bevry/projectz)
where you maintain data like title, description, author(s), badges, ...
in one CSON file and with a special markup you can update
fill in the templates files like README, package.json, ...

* npm 
* nodejs
* javascript

## Complexity is outside the code [2014-01-20]

> Dan North and Jessica Kerr make a journey through complexity. At the other side we may find simplicity, or we may find the light at the end of the tunnel is just another oncoming ESB.

http://www.infoq.com/presentations/complexity-simplicity-esb

* complexity
* code
* watch later

## Infodeck [2014-01-20]

Martin Fowler named interactive or more online consumable slides
infodeck, [writes about it here](http://martinfowler.com/bliki/Infodeck.html)
and 
he [is building a frontend](https://github.com/martinfowler/mfweb)
for it which you can feed via XML.

* slides

## Workflows of Refactoring [2014-01-20]

Martin Fowler lists the kinds of refactoring, the reasons 
why we refactor code, [in his infodeck](http://martinfowler.com/articles/workflowsOfRefactoring/#2hats).

* refactoring

## Some coding katas [2014-01-20]

[found on stackoverflow](http://stackoverflow.com/questions/1432485/coding-katas-for-practicing-the-refactoring-of-legacy-code)

* katas

## webdriver API [2014-01-19]

[The webdriver API is here](http://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_WebDriver.html)

## Myth - the simpler CSS transformer? [2014-01-19]

[Myth](http://www.myth.io/) - 
a simpler alternative to all the CSS transformers out there?

It currently has a simple set of features: variables, math, colors, 
simpler media queries and some more. But it looks enough to me.
And it is written in JavaScript, no more ruby gem jams.

* css
* preprocessor

## Transducers(.js) [2014-01-19]

> reducing function transformers are getting a name - 'transducers', and first-class support in Clojure core and core.async.

Rich Hickey [invented it](http://blog.cognitect.com/blog/2014/8/6/transducers-are-coming)
and they quickly [came to JavaScript, of course](http://jlongster.com/Transducers.js--A-JavaScript-Library-for-Transformation-of-Data).
Dive right in [the code on github](https://github.com/cognitect-labs/transducers-js).

* clojure
* reducers
* functional

## Testing and refactoring legacy code [2014-01-19]

Very useful and right-away applicable insights 
into [refactoring legacy code](http://virtualjug.com/testing-and-refactoring-legacy-code/).
Seems the [VJUG has lot's good content](http://virtualjug.com/all-posts/).

* java
* refactoring
* legacy

## The introduction to Reactive Programming you've been missing [2014-01-19]

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

## Angular reviews [2014-01-19]

Lately they don't turn out so good, or is it my blurred vision?  
One by James Shore [An Unconventional Review of AngularJS](http://www.letscodejavascript.com/v3/blog/2015/01/angular_review)
and another by PPK [The problem with angular](http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html).

* javascript 
* angularjs
* frontend
* framework

## Paxos, algorithm to solve the consensus problem [2014-01-19]

I came across paxos more often lately.
The first time was at a meetup group "Papers we love" 
there was a [meetup in December about paxos](http://www.meetup.com/Papers-We-Love-Munich/events/213339452/).

> Paxos is an algorithm to solve the consensus problem.
> Paxos is only a small piece of building a distributed database: it only implements the process to write exactly one new thing to the system.

And [this is an explanation and demonstration](http://harry.me/blog/2014/12/27/neat-algorithms-paxos/)

* algorithm
* read later

## One Hacker Way - Erik Meijer [2014-01-19]

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

## World’s first (known) bootkit for OS X can permanently backdoor Macs [2014-01-19]

My lack of knowledge and understanding and knowing it scares me most
about [reading this article](http://arstechnica.com/security/2015/01/worlds-first-known-bootkit-for-os-x-can-permanently-backdoor-macs/),
because once I read it I know there comes
a slew of things I would have to learn too, but I still try hard ignoring it :).
Damn.

* security
* mac os

## Sandi Metz - The Design of Tests [2014-01-19]

Watch the author of [poodr](http://poodr.com) describing
[how to solve the problem of mocks and real code running out of sync](https://www.youtube.com/watch?v=qT5iriwidRg)!
(And lots of goodies about testing and stuff.)
Watch it twice, it's worth it :)

* video
* testing
* mocks
* ~~watch later~~

## Markdown used by metalsmith (this site here) [2014-01-19]

As I just found in the docs metalsmith, which again uses
[the package metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown)
which in again uses
[the package marked](https://github.com/chjj/marked)
describes [in the readme](https://github.com/chjj/marked#philosophy-behind-marked)
that is also supports
[github flavored markdown](https://help.github.com/articles/github-flavored-markdown/).
(I was actually just looking for how to strikeout things :)).

* markdown

## Mocks Aren't Stubs [2014-01-19]

> The term 'Mock Objects' has become a popular one to describe special case objects that mimic real objects for testing.

Read [the article from 2007](http://martinfowler.com/articles/mocksArentStubs.html)!!!

* mock
* stub
* testing
* read later

## Servo: Building a Parallel Browser [2014-01-18]

Servo is an experimental browser engine for modern multi-core hardware written in an experimental memory safe language called Rust.
[Maybe the future Firefox engine?](https://www.youtube.com/watch?v=7q9vIMXSTzc)

* firefox
* browser engine
* rust

## Smallest test runner [2014-01-18]

IDEs are awesome but sometimes in my way and setting up test runners
sometimes defeats the purpose of being fast with tests, which also
means having feedback constantly and continuously. Thanks to
[@Christoph](http://twitter.com/c089) for showing me the shortest
test runner there is, it runs on the command line, like this:

    while true; do npm test; sleep 3; done;

it assumes of course, your tests can be run via `npm test`.

* tdd
* testing

## Speed up Mac OS X Yosemite [2014-01-17]

I expected my new 15" Retina MacBook Pro to just blow my mind
in terms of speed. But it didn't ... until now I am pretty
disappointed. So I finally did [some cleanup this weekend
that promises to speed up](https://discussions.apple.com/thread/6623697), I am hoping.

* macos
* speed

## Markdown syntax, the spec [2014-01-15]

I never knew which is _the_ right markdown syntax, I took the five minutes to find out
now I know, it [seems to be this one here](http://daringfireball.net/projects/markdown/syntax).
At least following the link chain that lead me from
[metalsmith](http://www.metalsmith.io/),
which I [use here to create this site](https://github.com/wolframkriesing/wolfram.kriesing.de/blob/7bd5d8af1b4e3652290900b1eeb4c5dada7a6bfc/package.json#L23-L24)
to the markdown syntax.

* markdown

## Deploy built files easier via gh-pages branch on github [2014-01-10]

I found it always painful to only update the gh-pages branch for
deploying to a custom domain, an easy solution is pushing a
subdirectory to gh-pages branch, like so

    git subtree push --prefix docs origin gh-pages

found at [gsferreira.com](http://gsferreira.com/archive/2014/06/update-github-pages-using-a-project-subfolder/)

* git
* github

## Purpose of .PHONY in a Makefile [2014-01-10]

The [answer on stackoverflow](http://stackoverflow.com/questions/2145590/what-is-the-purpose-of-phony-in-a-makefile)
and also a more linux focused one
[on linuxedevcenter.com](http://www.linuxdevcenter.com/pub/a/linux/2002/01/31/make_intro.html?page=2)
as given as reference
in the article.

* makefile