---
layout: post
comments: true
title: "Proficiency in Git part 1"
thumbnail: thanh-thao-git.jpg
excerpt: Install Git on Linux Operating System. Git proficient series
seo_description: Install Git on Linux Operating System. Git proficient series
permalink: /hoc-lap-trinh/:title.html
amp: /hoc-lap-trinh/thanh-thao-git-phan-1.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

Hi friends, this is the first post in my Git series. This series is for anyone because it's basic.

Easy to understand, concise, concise. Hope to help you.

## What is git?

\- Distributed source management software

\- Currently one of the most popular source code management software.

## Install Git

I will only guide to install on Linux. As for other operating systems, the installation is similar, you can refer to <a rel="noopener" target="_blank" title="Git" href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Git</a>.

For Ubuntu, Kali Linux, .. (Debian-based distributions):

{% highlight terminal %}
$ sudo apt install git-all -y
{% endhighlight %}

Once installed, continue to type:

{% highlight terminal %}
$ git --version
{% endhighlight %}

to check if you've successfully installed Git or not?

## Set up Git

To use Git, you must configure its username and password.

**Username configuration**

{% highlight terminal %}
$ git config --global user.name "your username"
{% endhighlight %}

**Password configuration**

{% highlight terminal %}
$ git config --global user.name "your username"
{% endhighlight %}

Because every time you perform a Push operation, Git will ask for a password again, which is quite inconvenient, so we will save a temporary password in ram to solve this problem.

{% highlight terminal %}
$ git config --global credential.helper 'cache --timeout=18000'
{% endhighlight %}

Good luck.

In part 2, we will learn some basic git commands.