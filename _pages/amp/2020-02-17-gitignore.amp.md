---
layout: amp
comments: true
date: 2020-02-17
title: "Introducing .gitignore"
canonical: /hoc-lap-trinh/gitignore.html
thumbnail: thanh-thao-git.jpg
excerpt: What is .gitignore? How to use .gitignore? Git proficiency series
seo_description: What is .gitignore? How to use .gitignore? Git proficiency series
permalink: /hoc-lap-trinh/gitignore.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

## What is .gitignore?

.gitignore is a small text file that appears in most projects.

## How to use .gitignore?

.gitignore is often used by programmers in their projects to skip unnecessary files and folders when they commit their projects to Github.

For example: I want to ignore the **node_modules** directory when committing because it is too heavy and unnecessary. I just need to write the name of the folder and in the **.gitignore** file is done. 

{% highlight text linenos %}
node_modules
{% endhighlight %}

<p class="warning">If you want to skip more files and other folders, you have to go down the line. One name per line.</p>

{% highlight text linenos %}
node_modules
_site
.sass-cache
.jekyll-cache
{% endhighlight %}

I wish you happy learning.