---
layout: amp
comments: true
date: 2020-01-27
title: "Proficiency in Git part 3"
canonical: /hoc-lap-trinh/thanh-thao-git-phan-3.html
thumbnail: thanh-thao-git.jpg
excerpt: Git log, Git show and Git diff. Git proficient series
seo_description: Git log, Git show and Git diff. Git proficient series
permalink: /hoc-lap-trinh/thanh-thao-git-phan-3.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

Some other basic commands, **git log**, **git show**, **git diff**.

## View the history and information of commits

{% highlight terminal %}
$ git log
{% endhighlight %}

The **git log** command is used to review the history of **commits** and the information of each commit such as the author's name, the commit date and the description of the commit.

{% highlight terminal %}
$ git log
commit 50ef5484c2b98d06600f75b819105dc9b4cefa6b (HEAD -> source)
Author: namtruongdev <namtruongdev@gmail.com>
Date:   Sun Jan 26 21:53:28 2020 -0500

    update

{% endhighlight %}

## View the contents of the committed file

{% highlight terminal %}
$ git show 50ef5484c2b98d06600f75b819105dc9b4cefa6b
{% endhighlight %}

The command **git show + ID of the commit** is used to view the file contents before editing and after editing the files that have been committed.

## View the contents of the edited file but not committed

{% highlight terminal %}
$ git diff
{% endhighlight %}

The **git diff** command is used to view the content before and after editing of files but has not been committed.

This post I temporarily stop here. In the following post, I will explain terms like **Working dir**, **Staging area**, **Repository**.

Have fun learning everyone offline.