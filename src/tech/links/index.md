---
permalink: false
template: links.html
title: tech links
date: 2015-01-09
description:
---

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

I have to remember that. Maybe a that could be a good session for a [JSCodeRetreat][jscr], finding
class names.

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