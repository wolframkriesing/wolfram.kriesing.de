---
permalink: false
template: links.html
title: tech links
date: 2015-01-09
description:
---

## Smallest test runner

IDEs are awesome but sometimes in my way and setting up test runners
sometimes defeats the purpose of being fast with tests, which also
means having feedback constantly and continuously. Thanks to
[@Christoph](http://twitter.com/c089) for showing me the shortest
test runner there is, it runs on the command line, like this:

    while true; do npm test; sleep 3; done;

it assumes of course, your tests can be run via `npm test`.

## Speed up Mac OS X Yosemite

I expected my new 15" Retina MacBook Pro to just blow my mind
in terms of speed. But it didn't ... until now I am pretty
disappointed. So I finally did [some cleanup this weekend
that promises to speed up](https://discussions.apple.com/thread/6623697), I am hoping.

## Markdown syntax, the spec

I never knew which is _the_ right markdown syntax, I took the five minutes to find out
now I know, it [seems to be this one here](http://daringfireball.net/projects/markdown/syntax).
At least following the link chain that lead me from
[metalsmith](http://www.metalsmith.io/),
which I [use here to create this site](https://github.com/wolframkriesing/wolfram.kriesing.de/blob/7bd5d8af1b4e3652290900b1eeb4c5dada7a6bfc/package.json#L23-L24)
to the markdown syntax.

## Deploy built files easier via gh-pages branch on github

I found it always painful to only update the gh-pages branch for
deploying to a custom domain, an easy solution is pushing a
subdirectory to gh-pages branch, like so

    git subtree push --prefix docs origin gh-pages

found at [gsferreira.com](http://gsferreira.com/archive/2014/06/update-github-pages-using-a-project-subfolder/)

## Purpose of .PHONY in a Makefile

The [answer on stackoverflow](http://stackoverflow.com/questions/2145590/what-is-the-purpose-of-phony-in-a-makefile)
and also a more linux focused one
[on linuxedevcenter.com](http://www.linuxdevcenter.com/pub/a/linux/2002/01/31/make_intro.html?page=2)
as given as reference
in the article.

