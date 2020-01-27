---
layout: amp
comments: true
date: 2020-01-26
title: "Proficiency in Git part 2"
canonical: /hoc-lap-trinh/thanh-thao-git-phan-2.html
thumbnail: thanh-thao-git.jpg
excerpt: Start a new Git repository with some basic commands. Git proficient series
seo_description: Start a new Git repository with some basic commands. Git proficient series
permalink: /hoc-lap-trinh/thanh-thao-git-phan-2.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

Hi, this tutorial will show you how to create a new repository and work with it with some basic commands.

## Create a new repository or reinitialize an existing one

{% highlight terminal %}
$ git init
{% endhighlight %}

This command creates an empty repository, basically creating a .git directory containing subfolders for **objects**, **refs/heads**, **refs/tags** and template files.

Every operation with the local repository, history will also be saved into this directory.

## Introducing the README.md file

\- Not only with Git but with any source code and repository, we can easily see the appearance of **README.md**.

\- **README.md** is optional but essential.

\- Programmers, creators of source code or software often write in the manuals or simply write introductory information to help people better understand their projects.

\- Written in **markdown** language, writing like pure text and marked with special characters to format the text.

## Track changes on the repository

{% highlight terminal %}
$ git status
{% endhighlight %}

The above command will tell you what you just changed in the repository and ask you to **git add** to include it in the **commit** if you haven't already included it.

## Confirm and package the changed files

{% highlight terminal %}
$ git commit -m "desciption for change"
{% endhighlight terminal %}

The above command encapsulates the changes into an **Object** and assigns it a label as your description.

This part I temporarily end here. The next part I will introduce some other commands like **log**, **show**, **diff**.

I wish you success offline.


