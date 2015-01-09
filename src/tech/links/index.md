---
permalink: false
template: links.html
title: Links
date: 2015-01-09
description:
---

## Purpose of .PHONY in a Makefile

The [answer on stackoverflow](http://stackoverflow.com/questions/2145590/what-is-the-purpose-of-phony-in-a-makefile)
and also a more linux focused one
[on linuxedevcenter.com](http://www.linuxdevcenter.com/pub/a/linux/2002/01/31/make_intro.html?page=2)
as given as reference
in the article.

## Deploy built files easier via gh-pages branch on github

I found it always painful to only update the gh-pages branch for
deploying to a custom domain, an easy solution is pushing a
subdirectory to gh-pages branch, like so

    git subtree push --prefix docs origin gh-pages

found at [gsferreira.com](http://gsferreira.com/archive/2014/06/update-github-pages-using-a-project-subfolder/)