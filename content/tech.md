# Links

* https://hub.github.com/


# Understanding rake in order to keep on reading "Objects on Rails" 
2016-02-07

[This document][why-rake], I assume by Jim Weirich made me understand 
where rake came from and it will hopefully also make it easier for me
to understand getting a grip on how it ticks. This is something I need
when working with tools.
I found the above in [this rake tutorial][rake-tutorial].

Still I have a hard time finding a concise overview of what rake offers.
Everyone talks about a DSL but I can only find bits and pieces of what
this DSL offers. There seems no complete overview. Now in the above mentioned
article I found that `directory "tmp"` creates a directory of the given
name. Never seen this before.

Tasks are defined using the DSL like this `task :name ...`.
But for a task that execute tests I can only find this piece of code
everywhere
```ruby
Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList['test/test*.rb']
  t.verbose = true
end
```
should it not be something like this
```ruby
task :test => [Rake::TestTask] do |t|
  t.libs << "test"
  t.test_files = FileList['test/test*.rb']
  t.verbose = true
end
```
I would understand that. But the very different syntax used above 
doesn't stick in my head and somehow yells at me "I don't want to be part of the 
DSL, I want to be Ruby".

[why-rake]: http://rake.rubyforge.org/files/doc/rational_rdoc.html
[rake-tutorial]: http://jasonseifer.com/2010/04/06/rake-tutorial





# ruby's self, @ and no prefix

http://stackoverflow.com/questions/6327174/rails-self-vs

# The method "method"

https://www.youtube.com/watch?v=gr45bkXv-JQ

"Saving methods is not a standard ruby use case"

Thanks for saying it out loud ... I didn't get it until now :(

# Delivery

Till Nowak: Delivery
Amazing short film
https://www.youtube.com/watch?v=VMiZ3oFEZtw

# Just for me

In Ruby 

> `and` and `or` are control flow operators, not boolean operators

http://devblog.avdi.org/2010/08/02/using-and-and-or-in-ruby/

> Another way of thinking about and is as a reversed if statement modifier:
>    next if widget = widgets.pop
>  becomes:
>    widget = widgets.pop and next

* ruby

# Me discovering ruby #4
2015-12-21

In the ruby koans I now came across array functions. 
One is `collect` and I thought, this is `map`, and the comment below said

> 'map' is another name for the 'collect' operation

Moving on, I noticed that `filter` has different names too:

> 'find_all' is another name for the 'select' operation

So I need to hammer new names in my head and actually also map them
and not forget that they are aliases for each other.
Better or not, I can't say. I got used to `filter` and `map`.
* `map` can be: `collect`
* `filter` is: `find_all` or `select`
* `reduce` is: `inject(start_value)`

## Iterators, yield

Somehow I have to say that the way iterators are used in ruby makes them 
seem way more simpler and intuitive to use than I know them from ES6.

```
def many_yields
  yield(1)
  yield(2)
end

many_yields { |item| result << item } 
# result = [1, 2] 
```

Maybe it's because the block syntax is so not-like-a-function.
And inside the `many_yields` method you can use `block_given?` to find out
you had been called with a block. Quite handy.

## `ensure` for a method

I have just seen this constructor for the first time, in the koans

```
def find_line(file_name)
  file = open(file_name)
  # do stuff and return
ensure
  file.close if file
end
```

Wow, this is so cool, if we don't misuse it.
Ensure that a certain block of code is always executed at the end of a function,
no matter which execution path was taken.

# The six hats

A colleague just pointed me to the article about [Six Thinking Hats][sixhats-1].
What I really like about this is that it removes the personal part from a solution finding, discussion, etc.

> The six hats system encourages performance rather than ego defense. People can contribute under any hat even though they initially support the opposite view.

I think I need to dive deeper.

[sixhats-1]: http://eng50411.tripod.com/psolving.htm#14

# Bookmark collect, December 2015
2015-12-08

Stuff regarding privacy and Edward Snowden
* [Edward Snowden explains how to reclaim your privacy](https://theintercept.com/2015/11/12/edward-snowden-explains-how-to-reclaim-your-privacy/)
* [Encrypt your laptop](https://theintercept.com/2015/04/27/encrypting-laptop-like-mean/)
* [KeePassX](https://www.keepassx.org/) is an application for people with extremly high demands on secure personal data management
* [Install signal, an encrypted messaging app](https://theintercept.com/2015/03/02/signal-iphones-encrypted-messaging-app-now-supports-text/)
* [Open Whisper Systems](https://whispersystems.org/) I think Edward Snowden suggests to use this

* [Sections and Outlines of an HTML5 Document](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
* [Good Tech Lead, Bad Tech Lead](https://medium.com/swlh/good-tech-lead-bad-tech-lead-948b2b806d86#.8r3cwoook) 
  I think I should read this well, I am kinda this, though I feel rather like a team member
  
My new job brought ember.js along, so I do dive into it now.  
* [My game of life in Ember](https://github.com/wolframkriesing/game-of-life-ember) not done yet, actually planned for 
  refactoring in a CodeRetreat
* [github search for GoL in Ember.js](https://github.com/search?utf8=✓&q=game+of+life+ember&type=Repositories&ref=searchresults)
* A very good [Ember video tutorial](https://www.youtube.com/watch?v=aUDxlEnuFTg)
* [A Guide to Building Your First Ember.js App](http://www.toptal.com/javascript/a-step-by-step-guide-to-building-your-first-ember-js-app)
* [Top Mistakes Developers Make Using Ember & Rails](https://www.airpair.com/ember.js/posts/top-mistakes-ember-rails)

* [Your Password is Too Damn Short](http://blog.codinghorror.com/your-password-is-too-damn-short/)
* [The German military trying to be our Keith Alexander](http://www.heise.de/newsticker/meldung/NSA-Ausschuss-Schweigsamer-Chef-der-BND-Aussenstelle-Gablingen-bringt-Abgeordnete-zur-Weissglut-3022689.html)
* [A private cloud software, open-source](https://owncloud.org/)

* [Power Assert in JavaScript](https://github.com/power-assert-js/power-assert) Provides descriptive assertion messages through standard assert interface.
* [Microsoft's Code Editor](https://code.visualstudio.com/) I started to use it with Ruby
* The matcher documentation of [hamjest](https://github.com/rluba/hamjest/wiki/Matcher-documentation)
* [Immutable.js](https://github.com/facebook/immutable-js) collections for JavaScript
* The ultimate [ECMAScript compatability table](https://kangax.github.io/compat-table/es6/)
* [gitlab](https://about.gitlab.com/) a open-source version of github
* [Working Effectively With Legacy Code](http://objectmentor.com/resources/articles/WorkingEffectivelyWithLegacyCode.pdf) a 12 page PDF
* A talk by Alan Kay [Is it really "Complex"? Or did we just make it "Complicated"?](https://www.youtube.com/watch?v=ubaX1Smg6pY)

# How Ember methods become computed properties

At this point in the [EmberJS Framework Basics Part 2 video][emberprops-1] 
the author explains how you can make (computed) properties out of 'normal' methods
by using what the ember.js `Ember.Object` offers.
It starts out with `friend.age()`, which returns what you expect. 
The author wants to write this as a property (as one accesses it in ember!) 
like this `friend.get('age')`.
How is that done? Well, ember extends the native prototype of `Function`, so
you can write this inside an ember object definition `age: function (){}.property()`.

The uber magic starts when you make the `age` depend on the `birthday`.
Which is done like this `age: function (){}.property('birthday')`. This is necessary
because the computed property `age` is only calculated at object creation time, not
on every read. In order to make it recalculate every time the `birthday` changes
you need to observe it, as seen above.

You better learn your ember!

[emberprops-1]: https://youtu.be/1NjWozl8bps?t=257

* emberjs
* javascript
* framework

# Building Game of Life in Ember

730.975 byte - the size of the main JS file of an empty app that ends up in the dist folder
after building the app by `ember build --environment=production`.

131,7 Mb - the size of the directory and it's content 
where I just initialized a new ember app, using `ember init`.
Looking into the `node_modules` folder I see that bower, npm, babel and many others
are dependencies of ember. Is it creating it's own eco-system inside an npm package?

On [the page][ember-objectmodel] in the ember guide about the object model, 
you can read that ember extends the native `Array` and the `String` prototypes.
Accidentally I had seen that `Function` also gets extended. Did we not learn 
from history?

You can't deny that ember tries to bring things from Ruby and rails to JavaScript.
There is `init()` as kind of constructor, monkey-patching Array, String, Function and others?
The reopening of classes and I guess you can list a couple more. 
I am sure this makes ember very appealing to all the rails/ruby enthusiasts.
The prevention of many of the things ES6 provides and "just doing it different"
makes this framework really move away from the language.

I see all my knowledge and tools that I learned over the last years becoming almost useless.
Refactoring will be basically impossible with Ember, computed properties that are used
as strings all over the place make it basically impossible to find them all and replace them
correctly. Renaming is such an essential thing in continuously improving software.
Do I really want to have it take away?

I stumbled over `this` usage in mocha in my early days of using ES6 and remembered how I thought
the new arrow functions actually changed how functions work. The real truth is, `function`
did behave wrong until now, because it made `this` special and not simply a normal variable.
That was when I realized that arrow functions do it right, now comes ember around the corner
and does also rely on this relict of `this` inside a function is special #magic
```
// works
Router.map(function() {
  this.route('about');
});

// does NOT work, TypeError: _this.route is not a function
Router.map(() => {
  this.route('about');
});
```
In short: be careful where you use the arrow functions in ember!

My different view on npm and the usage of packages led me to a [first pull request][ember-mypr] 
for the ember homepage. I just couldn't see that I was supposed to install ember globally.
Smashed :).

Don't use:
- observers, [reasons are explained on the site itself][ember-observers] and they are perfect to 
  create hard to find cyclic dependencies, esp. given their synchronous nature, they just call for it.
  Suggested solution: use `Ember.run.once`, make the framework's problems my own :( 
- [deep magic][ember-deepmagic], such as `Ember.computed.map` (see), creates a listener on an arrar basically and 
  sets up an iterator over it, mixes too much into one thing
- 

Some interesting finding:

> The enumerable API follows ECMAScript specifications as much as possible.

I understand it like this: We follow the spec, unless we know better.

> For arbitrary filtering, use the filter() method. The filter method expects the callback to 
> return true if Ember should include it in the final Array, and false or undefined if Ember should not.

This is standard JS, my friend ...

Ember has an `any()` method, which is [described as such][ember-any]

> To find out whether at least one item in an enumerable matches some condition, you can use the `any()` method:

The [MDN says about `some()`][ember-somemdn]:

> The some() method tests whether some element in the array passes the test implemented by the provided function.


[ember-objectmodel]: http://guides.emberjs.com/v2.2.0/object-model/
[ember-observers]: http://guides.emberjs.com/v2.2.0/object-model/observers/#toc_observers-and-asynchrony
[ember-deepmagic]: http://guides.emberjs.com/v2.2.0/object-model/computed-properties-and-aggregate-data/
[ember-any]: http://guides.emberjs.com/v2.2.0/object-model/enumerables/#toc_aggregate-information-every-or-any
[ember-somemdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
[ember-mypr]: https://github.com/emberjs/website/pull/2425

# Me discovering ruby #3

This [article about closures in ruby][discover3-post] started somewhere by saying 

> Ruby has four different ways of using closures, each of which is a tad bit different, and sometimes nonsensical

Finally a number that nails it. Now I know there are four ways of building closures 
(or at least that's the number it was in 2008).

> To start off, we re-opened the Array class and put our iterate! method inside. We will keep with Ruby conventions 
> and put a bang at the end, letting our users know to watch out, as this method might be dangerous!

Very interesting bits in here for me:
1) "re-open the Array class" - that's what it is called when a class gets
   monkey-pathed (again)
2) a bang at the end of a method marks it as dangerous. Finally a very explict definition of what it means.

Later in the article I learned about the difference between a block and Proc. 
While this is still sinking into my brain, I think I will revisit this more often, in order to 
decide what to use when:

> Block: Your method is breaking an object down into smaller pieces, and you want to let your users interact with these pieces.
> Block: You want to run multiple expressions atomically, like a database migration.
> Proc: You want to reuse a block of code multiple times.
> Proc: Your method will have one or more callbacks.

And finally this article covers lambda and the ruby method `method` which (in my words)
creates a reference to an existing method.

Very good article to learn about closures in Ruby. When I get the hang of how Ruby ticks inside
I think this will be way more rational to me, it is not yet.

[discover3-post]: http://www.reactive.io/tips/2008/12/21/understanding-ruby-blocks-procs-and-lambdas/

# User stories

In the last days I had to learn a lot about how to use, write and understand
user stories. [This talk][userstories-talk] by Mike Cohn is a pretty good 
kick start and summary for the hows and whys.
I also use [his site][userstories-site] a lot. And the 
[agile alliance site][userstories-agilealliance]
has some nice collection of infos too.

[userstories-talk]: https://www.youtube.com/watch?v=6q5-cVeNjCE
[userstories-site]: http://www.mountaingoatsoftware.com/agile/user-stories
[userstories-agilealliance]: http://guide.agilealliance.org/guide/user-stories.html

* user story

# GraphQL

I just read a [post about GraphQL][graphql-post], and because the headline and all the article
contains so much excitment and passion for the topic I read it until the end.

> With a GraphQL schema in place, this becomes a nonissue. A GraphQL API can function perfectly well with a single endpoint, and it only returns the data you request. Smaller payloads equals bigger win.

and the closing and surely a tiny bit biased opinion of the article's author

> Basically, GraphQL is the future of the internet. For the next few years anyway. REST was great, served a lot of good purposes, and will likely remain how we structure our services even with a GraphQL layer for our own sanities sake. But, IMHO GraphQL is the future.

There is even [a spec][graphql-spec].

* GraphQL
* REST
* API

[graphql-post]: https://medium.com/@scbarrus/graphql-is-the-king-long-live-the-king-r-i-p-rest-cf04ce38f6c#.9y4n9f18c
[graphql-spec]: http://facebook.github.io/graphql/

# What is object-oriented programming?

> I haven't seen a better explanation about OOP till date than the one given 
> by a guy who never had any formal engineering training but always had a 
> clear idea about everything he did and preached, be it technology, design or art.

If I tell you who gave the answer you will run off and read it, so I don't and
expect you to be interested enough in following [the link to the answer][whatisoo-answer].

* oo

[whatisoo-answer]: https://www.quora.com/What-is-object-oriented-programming/answer/Amogh-Talpallikar

# Rails Getting Started (and hooked)

> Active Record supplies a great deal of functionality to your Rails models for free

sales pitch in [railsstart-tutorial] to make me buy into it #scnr

* rails

[railsstart-tutorial]: http://guides.rubyonrails.org/getting_started.html

# "Five Active Record Features You Should Be Using"

Having some background in django, 
the post [Five Active Record Features You Should Be Using][fiveactiverecrods-article] 
very much reminds me of what 
I used to do in django. There are definitely nice things that you can do
with the Active Record ORM.
Just `.unscoped` is a bit hairy I think, it glues tape on a whole that
was dug before, instead of closing the whole ... rant over.

* rails
* orm

[fiveactiverecrods-article]: http://jakeyesbeck.com/2015/11/15/five-active-record-features-you-should-be-using/

# Getting delat-flora to run
2015-11-16

I was fighting a little bit with getting [delta-flora] to run, but made it finally.
My starter level of ruby knowledge made it not much simpler to get it to run :).
But in the end I succeeded doing the following steps.

1) `git clone git@github.com:michaelfeathers/delta-flora.git`
2) `cd delta-flora`
3) `gem install awesome-print` It was hard-core trying and reading (and trying to understand) error messages that
made me understand this :)
4) `cd lib`
5) open the ruby REPL by typing `irb`
6) `> load './repository.rb'`
7) `e = load_events("/Users/.../the/repo/path")` which will scan a repo
   and probably print out a lot like this
```
Calculating commit 1 of 3918
Calculating commit 2 of 3918
Calculating commit 3 of 3918
Calculating commit 4 of 3918
Calculating commit 5 of 3918
Calculating commit 6 of 3918
Calculating commit 7 of 3918
...
```
   the last number is the total number of commits in that repo.
8) and then you can run various methods like `> method_churns e` provided in the [analytics.rb][delta-flora-analytics]   
   to get some stats on the repo.
   
It might be worth digging a bit into [code_event.rb][delta-flora-codeevent] to see some more capabilities
of the analytics data.

If you reached this point and still have no clue what all this is about watch his talk
[The Hidden Dimension Of Refactoring][delat-flora-talk] at [craft conf 2015].

[delta-flora]: https://github.com/michaelfeathers/delta-flora
[delta-flora-analytics]: https://github.com/michaelfeathers/delta-flora/blob/756ae539250cc91afa4f853d508321d5552db256/lib/analytics.rb#L101
[delta-flora-codeevent]: https://github.com/michaelfeathers/delta-flora/blob/7dfde62fbdcf7c2b1c217d76556f43c1ddb77d58/lib/code_event.rb
[delat-flora-talk]: http://www.ustream.tv/recorded/61483799
[craft conf 2015]: http://craft-conf.com/2015

* code analytics
* ruby

# Ruby refactoring for vim

I [found this repo][rubyrefactoring-repo], which seems not to be the newest, but one (if not the only one) 
which provides some ways of refactoring for ruby.

[rubyrefactoring-repo]: https://github.com/ecomba/vim-ruby-refactoring

* ruby 
* refactoring

# Decoupling from Rails
2015-11-16

A [very good talk by Jim Weirich][decoupling-talk], where he shows how to pull the meat, the actual
business logic out of a rails app to make it testable in a fast manner concludes
with a very interesting idea.
[In the last minute of his talk][decoupling-idea] he presents an idea, where he proposes to use (cucumber) tests as
fast tests and flipping a switch to make them be your integration tests, that integrate the web 
pieces and allow a more thorough, but slower test run.

[decoupling-talk]: https://www.youtube.com/watch?v=tg5RFeSfBM4
[decoupling-idea]: https://youtu.be/tg5RFeSfBM4?t=4485

* rails
* testing

# Me discovering ruby #2

I know that the calling of functions can be quite noise-less, no parantheses and commas.
But it also leaves me baffled at times. I can't get my head around this one either.

```
> "abc".sub(/./) {1}
=> "1bc"
> "abc".sub((/./), "1")
=> "1bc"
```

It might also because I have no docs at hand right now (due to being offline).
In the first version I don't see if `{1}` is the second parameter to `sub` or the parameter
given to a function returned by `sub(/./)`. The second call makes sense, just 
strange that the second parameter must be a string here and not a block (which is what `{` and `}` mean, I suppose).
Keep going, it will come to me some day :).


# Approval Testing

[Emily Bache] in her talk ["Catch Dancing Ponies — Try Approval Testing"][approvaltesting]
makes me balance my attitude where I try to prevent intergration tests,
finding the right amount is the thing to do, I guess.
Using this [TextTest] seems to be one way.

[Emily Bache]: https://twitter.com/emilybache
[approvaltesting]: https://www.youtube.com/watch?v=qt0ah2K2oBU
[TextTest]: http://texttest.sourceforge.net/

# Me discovering ruby #1

One method three different return types

```ruby
> [1].slice(2)
=> nil
> [1].slice(0)
=> 1
> [1].slice(0,1)
=> [1]
```

Ranges, including and excluding

```ruby
> (1..3).to_a
=> [1, 2, 3]
> (1...3).to_a
=> [1, 2]
```

aha, it's not that `...` is the one including the latter number, it's actually excluding.
I guess this has been done in order to make `..` behave as in other languages.

Now combine including/excluding and slicing, and I would say ... it has potential to become hard to read :).

```ruby
> [1,2,3][1..-1]
=> [2, 3]
> [1,2,3][1...-1]
=> [2]
```

Destructuring the ruby way, has some nice sugar.

```ruby
> one, *all = [1,2,3]
=> [1, 2, 3]
> one
=> 1
> all
=> [2, 3]
```

interesting what the irb returns for the first line.

Ruby has a built in `Hash` class, which takes a default value. I am getting the hang of it and it
seems to make sense in the way one has to think in ruby.

```
> h = Hash.new('default')
=> {}
> h[:some] = 42
=> 42
> h
=> {:some=>42}
> h[:other]
=> "default"
```

Hash default values are an interesting thing. I have to say it seems I need to learn them,
the logic is something I don't get yet, but I am just starting :).

```
> h = Hash.new([])
=> {}
> h[:one].push(1)
=> [1]
> h[:one] << 2
=> [1, 2]
> h[:one] 
=> [1, 2]
> h[:two]
=> [1, 2]
> h = Hash.new('nix')
=> {}
> h[:no].concat('no')
=> "nixno"
> h[:yo]
=> "nixno"
```

This means that the default value can be updated using something that looks like accessing 
a value of the hash, which seems to be something to keep in mind, and not forget!!!
Currently I think default values for hashes should not be used.

* ruby
* learning

# promisify `fs.exists`

Don't promisify `fs.exists` since this does not play by the rules of node style callback params,
where the first one should be err and then data. It seems this does return only the data, which
[promisify] understands as an error and does throw right away. Instead do what the 
[node js docs suggest][promisify-nodejsdocs] 
too and use `fs.access` instead, like so: `promisify(fs.access)(aPath, fs.R_OK)`.
See it in action [here in the cosmowiki].

[promisify]: https://github.com/digitaldesignlabs/es6-promisify
[promisify-nodejsdocs]: https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
[promisify-inuse]: https://github.com/cosmowiki/cosmowiki/blob/f027f758f9db6779175b2bb9595684fb6a3776c6/src/scripts/minify-json/many-files.js#L15

# Where do my tests lay OR run mocha tests with WebStorm IDE
2015-11-10

I had been fighting for the last years, always again to make WebStorm run all my tests
the way I want. I moved tests into the `src` folder then back into a `tests` folder.
Latter is painful, since I have to keep the structures of two folders in sync that way,
which is just inefficient, especially when I refactor so much, which I think is simply 
necessary and the right thing to do.
So logical next step was to move the tests into the `src` directory. Making that run with 
mocha is not so simple, since mocha always wants to load all files in the given test directory.
And the pattern matching is too hard to use imho. To run mocha [I now use a `find`][testslay-1]
which is okish I would say. But this does not work in WebStorm, since I like to have the test runs
embedded and execute asap. After searching for a while [this seems to be the solution for using 
this approach in WebStorm][testslay-2].

[testslay-1]: https://github.com/cosmowiki/cosmowiki/blob/4f5abd6cffd99e0df0cb55c20534a8d7a95ae34d/package.json#L16
[testslay-2]: https://youtrack.jetbrains.com/issue/WEB-10437#comment=27-991595

# Get Babel 6 up and running
2015-11-10

Since lots of things changed in babel6, it has [become a platform][babel6-platform]
there is some stuff you need to do to set up your project to use babel6.
All is best described in "The Six Things You Need To Know About Babel 6"[babel6-todos].

* js
* es6
* babeljs

[babel6-platform]: http://babeljs.io/blog/2015/10/29/6.0.0/
[babel6-todos]: http://jamesknelson.com/the-six-things-you-need-to-know-about-babel-6/

# Comparing TDD to double-entry book keeping

[Uncle Bob] nicely shows the parallels between accountants and TDD.
One value gets put on the asset side and the other on the liability side,
they add up to be 0. And then he questions why accountants meet their
deadlines, even though they do things twice.
Accountants do this for five hundred years, its a "law". We still need to 
get there with TDD, but we are on the best way and I second that and try 
to do my part with the [JSCodeRetreat][jscr].

But [see for yourself, what Uncle Bob says about it](https://youtu.be/oar-T2KovwE?t=6343).

I think I will humbly copy this analogy, it just makes so much sense.

Later he gets asked

> How can I do this without changing my tests all the time.
 
And he answers right away.

> Just design your tests better.

> How do you keep from over-architecting?

[Watch the answer](https://youtu.be/oar-T2KovwE?t=6914), 
IT IS WORTH IT (and happened to me sooo often)!

* tdd

# Uncle Bob about Plugin Architectures

I am about to probably hit some RoR ground and I am already preparing myself, 
by listening to [Uncle Bob]

> I want no import of the framework into the business rules
> The stuff that is really valueable, the parts of the code that make or save the business money [...]
> you keep as isolated as possible by any foreign influence.

[Uncle Bob says](https://youtu.be/oar-T2KovwE?t=6198)

[Uncle Bob]: https://twitter.com/unclebobmartin/

* architecture
* software quality
* decoupling

# #NoEstimates

My laziness actually pulls me strongly towards [#noEstimates][noEstimates-ontwitter]. I guess it's
because the "no" means I have less work to do. Which I could kind of back up with
the argument Robert Weissgraeber gives at the beginning of [his talk][noestimates-1], which is
that we should remove all unnecessary work, all waste. 

I think #noEstimates can be best described in an alternative way as [Woody Zuill][noestimates-woody] does in his article
[Estimate a chess game][noestimates-chess]. Just give it a couple of seconds, and you know what is
meant. Just ask yourself, is it possible to estimate the play of a chess game?

So here are some things about this topic
I found lately, not rated by quality, relevance or anything, I am just extracting bits
and pieces I am finding.

Allen Holub talks about #noEstimates and right away [his first sentence sums it up](https://youtu.be/QVBlnCTu9Ms?t=22).

> Estimation has no value at all.

> Estimates are causing lot's of dysfunctions.

He compares estimates to [OCD][noestimates-ocd] and 
[basically says](https://youtu.be/QVBlnCTu9Ms?t=889) that doing estimates over and over again 
is irrational and we just do it in the hope of
getting better at it, though we know they are useless and wrong.

Removing estimates and control and pass the decision making and 
balancing of resources to those who actually do the work is way more effective 
and removes lots of waste. So Allen Holub says:

> Do the best job you can and figure out how to do that.

And programmers would just not estimate, if they are not forced to do, since
they are useless and worthless. He says at [20:26 min](https://youtu.be/QVBlnCTu9Ms?t=1226).

Because the developers are responsible for their own time, and the management
figures out what are the right things to build, [he says](https://youtu.be/QVBlnCTu9Ms?t=1312):

> This changes the management structure of the entire company.

By spreading the responsibilities this way, enabling the developers to do their
best, management gets the very important role of supporting this by providing
and steadily improving the environment so developers can do what they need to do better.
Or [as he says](https://youtu.be/QVBlnCTu9Ms?t=1406):

> He [the manager] is not telling them [the developer] what to do, but he is helping them do what they need to do.

Eliminating waste, one of the core principles of lean. What is waste? 
[Everything that does not put value in your customers hands](https://youtu.be/QVBlnCTu9Ms?t=1432).

> Estimation is waste.

His summing up starts [here][https://youtu.be/QVBlnCTu9Ms?t=2077] and is just two minutes long, watch it!

> Estimation is actively destructive to the organization.
> The culture that supplies supporting estimates makes the organization work in dysfunctional ways.
> It forces people to work over time and on the wrong things.

Do the most important thing first, you always end up with customer value.

Some bits are from the above mentioned talk by Robert Weissgraeber,
which simply was one of the first ones I clicked after a youtube search.
Watch out, the english is ... let's say pretty germanized :).
But I think the content summarizes the topic.

Estimating time (and cost) makes us concentrate on the wrong thing. 
Among other things we postpone or skip the discussion about how we can 
improve, [he says](https://www.youtube.com/watch?v=jKQMfe4uSD8&feature=youtu.be&t=238).

> [Estimates you give are turned into targets.](https://www.youtube.com/watch?v=jKQMfe4uSD8&feature=youtu.be&t=684)
> Meeting that target becomes the goal.

Instead of the actual value you wanted to achieve with the task you estimated.

[Later he says][noestimates-2] that we should not look at the cost
but at the value something adds, and backs this up with the agile manifesto,
which says "Customer collaboration over contract negotiation".

> Don't forget about your potential

[And focus less on estimating it, and just ship.](https://www.youtube.com/watch?v=jKQMfe4uSD8&feature=youtu.be&t=1407)

[noEstimates-ontwitter]: https://twitter.com/search?q=%23noestimates
[noestimates-chess]: http://zuill.us/WoodyZuill/2011/11/07/estimation-is-easy-and-useful-estimate-a-game-of-chess/
[noestimates-ocd]: https://en.wikipedia.org/wiki/Obsessive–compulsive_disorder
[noestimates-1]: https://www.youtube.com/watch?v=jKQMfe4uSD8
[noestimates-2]: https://www.youtube.com/watch?v=jKQMfe4uSD8&feature=youtu.be&t=1200
[noestimates-3]: http://www.agilemanifesto.org/
[noestimates-woody]: https://twitter.com/WoodyZuill

# Design Patterns

Lots of links to further reading on design patterns and a good short introduction on
why they are important.
http://codebetter.com/jeremymiller/2005/09/01/learning-about-design-patterns/

Six design patterns with real code examples
http://codebetter.com/jeremymiller/2006/04/11/six-design-patterns-to-start-with/

# Treat Your Code as a Crime Scene - Adam Tornhill

https://www.youtube.com/watch?v=TfZmuS01CNs

* video
* must watch

# Inheritance, Polymorphism, & Testing
2015-10-26

From [The Clean Code Talks][cleancodetalks] this is [a very good][inheritance-1] one by 
[Misko Hevery] where he is talking us out of using IFs, or at least trying
to explain what IFs actually mean in code. And how we can better cater for those
cases using polymorphism and how this also enables us to test better.

> your object only has one inheritance hierarchy, which suggests that you should only have one responsibility

[at 35:50 min][inheritance-2]

[cleancodetalks]: https://www.youtube.com/watch?v=RlfLCWKxHJ0&list=PL693EFD059797C21E
[inheritance-1]: https://www.youtube.com/watch?v=RlfLCWKxHJ0&list=PL693EFD059797C21E
[inheritance-2]: https://www.youtube.com/watch?v=4F72VULWFvc&feature=youtu.be&t=2150
[Misko Hevery]: https://twitter.com/mhevery

# gr8craft - Walking Skeleton
2015-10-23

Unfortunately I missed Franziska's session at SoCraTes 2015 on this topic,
but fortunately she [wrote about it][gr8craft 1], make sure to also read through
[her commits][gr8craft 2] backwards, of course :). Very nice and readable!
[An article "Kickstart your next project with a Walking Skeleton"][gr8craft 3] 
she referred to, that explains the process too.
While reading more and more of the [c2 wiki] I am asking myself where is the difference
to a [spike][c2 wiki spike] which Kent Beck defined as

> a spike is "end to end, but very thin", like driving a spike all the way through a log

Looks like this is very much the same, isn't it?

[gr8craft 1]: http://codurance.com/2015/08/26/My-first-walking-skeleton/
[gr8craft 2]: https://github.com/codurance/gr8craft/commits/master?page=6
[gr8craft 3]: http://blog.codeclimate.com/blog/2014/03/20/kickstart-your-next-project-with-a-walking-skeleton/
[c2 wiki spike]: http://c2.com/cgi/wiki?SpikeSolution

# Value Objects, Business Objects or Values, Objects
2015-10-23

My pet project [ES6 Katas] is a playground for learning, if you look in [the repo][es6katas repo]
you see lots of things moving around and changes made. Most of it is because I try to apply
new learnings and try to get to a structure that really is what I consider good software.
Lots of new bits of information I learn I try to apply there or at least play around with it
and figure out what's a better way to do things. This often might end up in a forth and back of things
and in not being able to decide what is right, and it looks like nothing moves forward, but that's
just on the surface.

Mostly it's when I am writing tests that things just bubble up, and that's also what I see tests being
most valueable for: they make you question things. In this certain situation I was trying to 
figure out if a kata as used in this project, is a value object or a business object. This lead me to
investigate what do the thoughtleaders in this area say that a value object is. Where I stumbled over
multiple sources. One of those great sources is the well-known [c2 wiki]. I identified the site about
[Value Objects][valueobjects-1] and [Business Objects][valueobjects-2] 
(also called [Reference Object][valueobjects-3]) most important.
Also the wikipedia site on [Value Object][valueobjects-4] is a good start, but it lacks some deep insights,
which I think are necessary in order to learn when and how to find out and apply those properly.

Here is a short upfront answer, taken from [the paper][valueobjects-5] I will mostly quote later about figuring out what
is a value or a business object.

> There is no fail-safe technique to decide whether some tangible or intangible concept is of a value or
> object type.

In other words, there is no right or wrong wether the thing you build is a value object or a business object.

Michael Feathers summarizes a value object calling it a pure value, which I think make it very clear too:
> you can not change the value of 4. 4 is a value. To me, a ValueObject is something which represents a pure value.
[quoted from here][valueobjects-6].

The following are (commented) quotes with a less C++ view on things, but rather a focus on the language agnostic
parts of [the description by Dirk Riehle][valueobjects-7] and fellows on value and business objects. The paper itself
is available as a [PDF][valueobjects-5] too.

> The most prominent advantage of values over objects is that values are side-effect free. 

The paper summarizes the properties of values

> * Values are abstractions (universals or concepts) which model abstractions from a problem domain.
> * Values have no lifecycle (i.e., they do not exist in time, are not created nor changed nor deleted).
> * Values have no alterable state; representations can only be interpreted, not changed.
> * Values are referentially transparent (i.e., there are no side-effects of using a value on other parts of the system).

> From a conceptual point of view, we are still dealing with value types, be they implemented as classes or not. 
> We call an instance of a value type a "value object". 
> We call value types which require implementation constructs like classes
> non-primitive value types.

Properties of objects

> * Objects are representations of phenomena from a problem domain.
> * Objects have a life cycle (i.e., they exist in time, can be instantiated, changed, and deleted).
> * Objects have identity that unambiguously denotes them (thus, they can be referenced).
> * Objects can be shared, which is a consequence of that objects can be referenced.

> While values exist independently of time in an invisible universe of values, objects do exist in time

> objects exist in time, they can be distinguished from each other by their identity (property
> O3). A value, in contrast, has no identity, because there are only occurrences of representations

> Object identity is a value type of particular importance

> On an implementation
> level, the possibility to share objects is an important concept for reuse and integration, but
> also a source of major headaches (side-effects through aliasing). No such concepts and problems exist
> for values (property V4).

> In software development, we can distinguish at least three different types of models: domain analysis,
> system design, and implementation models.

> While no hard rules exist, and every decision must be done pragmatically, our experience shows that
> value types are better reserved for lightweight abstractions

When dealing with a language that has no built-in value types, like JavaScript, where you may build them
using classes, you have to ensure that the property of a value don't get broken. Imagine the following:
`let x = 3; y = x; y++` The initial value of `3` assigned to `x` never changes, because this primitve 
value is provided by the language itself. When we now build this with a custom type, which can be done using
a class, we have to ensure the immutability of it by code. It is not built in.
So we may build something like this class 
```
class MonetaryAmount { 
  constructor(value) { 
    this.value = value; 
  } 
  add(amount) { 
    return new MonetaryAmount(amount.value + this.value); 
  }
  equal(amount) {
    return amount.value == this.value;
  }
}
```
And to ensure all the properties of a value object, see the complete 
tests [here in a gist](https://gist.github.com/wolframkriesing/af7c17b5ed8f375c7b40).

In the DDD world, the two things seem to be called Value Objects and Entities, as can be read
here [What is the difference between Entities and Value Objects?][valueobjects in DDD]
This article describes a nice example which also reflects the difference between the two:
> Imagine that our application allows the person to track their current location. When 
> the person is able to successfully connect to the internet and authenticate with our 
> application a new Location object is created. This Location object has attributes for 
> longitude and latitude. The Location object is a Value Object because we don’t care about 
> the specific instance of the object we only care that it is a location.

## In a modern/scripting language

A value object is the one whose identity is defined by its state rather than by its address. 
How do we properly transfer this to modern/scripting languages (that don't work with memory
allocation as described in the [paper referenced above][valueobjects-5])?
I am thinking about:
1) There is no real notion of an address in JavaScript (maybe let's call it a reference).
2) If we share a value object that is immutable, does it really matter if it is the same reference? The garbage collector
does the job of cleaning up references for us, so let it do it's job and let's reuse things. Or not?

[valueobjects in DDD]: http://culttt.com/2014/04/30/difference-entities-value-objects/
[es6katas repo]: https://github.com/tddbin/es6katas.org
[c2 wiki]: http://c2.com/cgi/wiki
[valueobjects-1]: http://c2.com/cgi/wiki?ValueObject
[valueobjects-2]: http://c2.com/cgi/wiki?BusinessObject
[valueobjects-3]: http://c2.com/cgi/wiki?ReferenceObject
[valueobjects-4]: https://en.wikipedia.org/wiki/Value_object
[valueobjects-5]: http://dirkriehle.com/computer-science/research/1998/ubilab-tr-1998-10-1.pdf
[valueobjects-6]: http://c2.com/cgi/wiki?ValueObjectsCanBeMutable
[valueobjects-7]: http://dirkriehle.com/computer-science/research/1998/ubilab-tr-1998-10-1.html


* OO
* values
* value object
* objects
* business object
* entities

# C# v6 goodies
2015-10-23

C# has a way better expression for what we write in JavaScript like so 
`obj.method && obj.method()` and in C# you can do `obj?.method()`
which is pretty slick I think.
See [this video (in german)][c# goodies exists operator] for a short explaination.

nameof - is another nice C# feature, which allows us to get the name of an argument
as explained [here (in german)][c# goodies nameof].

[c# goodies exists operator]: https://www.youtube.com/watch?v=-mKqAsZs808&feature=youtu.be&t=290
[c# goodies nameof]: https://www.youtube.com/watch?v=-mKqAsZs808&feature=youtu.be&t=70

# Bookmark collect, October 2015
2015-10-23

It's time to clean up all my open browser tabs again, not because I want to collect things
just because my browser gets too slow and as usual (except with code - I learned that) 
I have to collect things.

After the great architecture talk by Uncle Bob, I had to look at [the FitNesse source code], 
the 
started off by Uncle Bob and friends. To be honest, I was looking for the perfectest code
that is out there ... mmmh, seems reality kicked in too :) [still have to learn that this is life].

[JB Rainsberger] is coming to [XP Days] ... mmmh, I think I should go there, just don't have a ticket yet.

A very entertaining but loooong [Twit show (#528)] about all things web including ad blocking and so on.

At JSConf.eu [greenkeeper] was released, so I looked up how I would approach keeping my deps up to date
without it (just thinking I don't need yet another tool) - the answer is on stackoverflow, as usual.
[How do I update each dependency in package.json to the latest version?](http://stackoverflow.com/questions/16073603/how-do-i-update-each-dependency-in-package-json-to-the-latest-version)

I still have to write an [#es6kata] for regexps after I had seen (not read, it's way tooo long :))
the excellent [article by Axel](http://www.2ality.com/2015/07/regexp-es6.html).

[Classes in ECMAScript 6 (final semantics)](http://www.2ality.com/2015/02/es6-classes-final.html) 
I am sure it contains lots of new things and in depth details.

[ECMAScript compatibility table](http://kangax.github.io/compat-table/es6/) - save this link!

[Sequelize is an easy-to-use multi sql dialect ORM for Node.js](https://github.com/sequelize/sequelize)
[Documentation » Querying](http://docs.sequelizejs.com/en/latest/docs/querying/)

[An Interview with Brian Kernighan](http://www.cs.cmu.edu/~mihaib/kernighan-interview/index.html)

During my research about how to construct the URL properly and reading up about hashbang and like, I collected some
links 
* [W3C - Usage Patterns For Client-Side URI parameters](http://www.w3.org/TR/2009/WD-hash-in-uri-20090415/)
* [HashInURI](http://lists.w3.org/Archives/Public/www-tag/2011Feb/0095.html)
* [Hashbang boom](http://blog.tomgibara.com/post/3214368343/hashbang-boom)
* [Thoughts on the Hashbang](http://www.adequatelygood.com/Thoughts-on-the-Hashbang.html)
* [Breaking the Web with hash-bangs](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs)

Of course, I am reading up a lot about react, and was also looking around for a simple static
site blog tool, here are some links
* [React Contexts and Dependency Injection](http://jaysoo.ca/2015/06/09/react-contexts-and-dependency-injection/)
* [react-static-site](https://github.com/BradDenver/react-static-site)
* [react powered blog](https://github.com/jlongster/blog)
* [Presenting The Most Over-Engineered Blog Ever](http://jlongster.com/Presenting-The-Most-Over-Engineered-Blog-Ever)
* [React v0.14 Beta 1](https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html)
* [redux](http://rackt.github.io/redux/)

[Marketing for Geeks](http://ericsink.com/Marketing_for_Geeks.html)

Things around my research on journeyman tour
* [Journeyman weeks - week four @ msgGillardon](http://danieltemme.blogspot.co.at/2013/10/journeyman-weeks-week-four-msggillardon.html)
* [Corey's Pair Programming Tour](http://blog.code-cop.org/2013/07/coreys-pair-programming-tour.html)
* [CodeCopTour](http://blog.code-cop.org/search/label/CodeCopTour)

Inspired by a session at socrates, all things I looked at around mutation testing
* [grunt-mutation-testing](https://github.com/jimivdw/grunt-mutation-testing)
* [Efficient JavaScript Mutation Testing](http://www.ece.ubc.ca/~shabnamm/doc/mirshokraie-icst13.pdf)
* [mutandis](https://github.com/saltlab/mutandis)

[Hspec is a testing framework for Haskell.](http://hackage.haskell.org/package/hspec)

[Lots of good stuff to read by Reginald Braithwaite](http://raganwald.com/)

[Use Your Type System; Write Less Code](http://talks.samirtalwar.com/use-your-type-system.html)

[The Book No One Read](http://nautil.us/issue/28/2050/the-book-no-one-read)

Around the ES6 Katas, that I maintain [exercism.io](http://exercism.io/) came up.

[neovim](https://github.com/neovim/neovim)

I am using way to little of good HTML5, so I opened this tab
[The HTML5 Outline Algorithm](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
and I am *not* closing it!

[flexplorer](http://bennettfeely.com/flexplorer/)

[leaflet - an open-source JavaScript library for mobile-friendly interactive maps](http://leafletjs.com/)

[react-leaflet](https://github.com/PaulLeCam/react-leaflet) I think I already stated that this a layer too much

on my hunt to find out how to geocode a location from a string [I found this](https://github.com/mattnull/node-osmgeocoder/blob/master/index.js#L21)

Erin Swenson-Healey on how you can use generators in ECMAScript 6 to continue to leverage the power of 
the single-threaded event loop while writing expressive, simple code in a direct, top-down style.
[Hanging Up On Callbacks: Generators in ECMAScript 6](https://www.youtube.com/watch?v=s-BwEk-Y4kg)

[Currying in JavaScript](https://medium.com/@kevincennis/currying-in-javascript-c66080543528)

Google, no need to store my history of things I browsed in the last weeks, here it is right on github. :)

[the FitNesse source code]: https://github.com/unclebob/fitnesse
[JB Rainsberger]: https://twitter.com/jbrains
[XP Days]: http://www.xpdays.de/2015/
[Twit show (#528)]: https://twit.tv/shows/this-week-in-tech/episodes/528?autostart=false
[greenkeeper]: http://greenkeeper.io
[#es6kata]: https://twitter.com/search?q=%23es6kata

# Rethink DB
2015-10-23

RethinkDB is a topic that I had been investing some time into, because I tried to figure out which DB to use
for [cosmowiki]. What convinced me about: it is a DB which offers the
best of both worlds, the NoSQL world (schema "freedom") and SQL DB's relational data. RethinkDB
has [joins built-in][rethinkdb joins] as one of the core features. 
Besides built-in joins it claims to have a very simple scale out mechanism and almost magic, transparent
fail-over since version 2.1.
Other arbitrary RethinkDB links
* [Importing your data](http://rethinkdb.com/docs/importing/)
* [Third-party administration tools](http://www.rethinkdb.com/docs/third-party-admin-tools/)
* [JavaScript ReQL command reference](http://www.rethinkdb.com/api/javascript/)
* a very simple [admin tool for rethinkdb](https://github.com/neumino/chateau) that I used
* unfortunately there seem not many [community events](http://rethinkdb.com/community/) (listed here)
* [Thirty-second quickstart with RethinkDB](http://rethinkdb.com/docs/quickstart/)

Although, the Architecture talk by Uncle Bob also made me question myself if I really need a DB,
especially for [cosmowiki].

[rethinkdb joins]: https://rethinkdb.com/docs/table-joins/
[cosmowiki]: https://github.com/cosmowiki/cosmowiki

* db

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

In this talk, Uncle Bob starts to set the context of why our industry has a hard
time catching up with the speed and also why it is so important that we do 
spend more time on mindfully constructing software.
It's worth spending those 1,5h watching this talk (or less if you speed up the video :)).

> If our answer is `well, we had to get to market fast` that's not going to cut it
[at 18:57 min][architecture-1]

> If you believe the web constrains your architecture, you have lost the war from the beginning
[at 28:08 min][architecture-2]

> I don't want you to spend a lot of time debugging, I want you to spend a lot of 
> time getting tests to pass.
[at 46:33 min][architecture-3]

> Another word for testable is decoupled. That's how you make something testable, you decouple.
[at 49:56 min][architecture-4]

Talking about rotten code, which is mostly argued to be done for speeding up (to market) 
reasons. About that he says:
> You do the thing that slows you down in order to go fast.
> I will leave you to deal with the logical inconsistency there.
[at 50:41 min][architecture-5]

Why he says that we fear to touch bad code:
> If you break it becomes yours.
[at 51:41 min][architecture-6]

He goes into detail why TDD is necessary and summarizes it all like this: 
> We keep control over the code, by having a suite of tests that we trust.
[55:03 min][architecture-7]

Uncle Bob about inheritance (that some frameworks force you to do, e.g. inherit from their base class):
> And when you derive, you marry. Once you have inherited from somewhere 
> there is no way out of that.
> Now everything in those base classes come streaming into your classes
> and you are stuck with them.
> But it's a one way marriage, it's a harem. You are in the harem. The guy
> who owns the framework [where the base class comes from] he is not married to you.
[at 1:12:30 h][architecture-8]

> Here is the thing about frameworks, you should never trust them.
[at 1:13:20 h][architecture-9]

His conclusion, after talking about the creation of FitNess and that it never
actually needed a database, is
> A good architecture allows major decisions, to be delayed until you can make them 
> with the most information, instead of the least.
and
> A good architect maximizes the number of decisions, not made.
[at 1:19:05 h][architecture-10]

> You make the UI a plugin to your use case, you make the DB a plugin to your use case,
> all your frameworks become plugins to your use case, so that you in your application can 
> screw them and they can't screw you.
[at 1:22:06 h][architecture-11]

* must watch
* video
* architecture
* TDD

[architecture-1]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=1137
[architecture-2]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=1688
[architecture-3]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=2793
[architecture-4]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=2996
[architecture-5]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=3041
[architecture-6]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=3101
[architecture-7]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=3303
[architecture-8]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4349
[architecture-9]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4400
[architecture-10]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4745
[architecture-11]: https://www.youtube.com/watch?v=HhNIttd87xs&feature=youtu.be&t=4925

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