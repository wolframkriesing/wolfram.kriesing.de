---
permalink: false
template: links.html
title: tech links
date: 2015-01-09
description:
---

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

