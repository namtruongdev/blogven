---
layout: amp
comments: true
date: 2020-02-16
title: "Proficiency in Git part 6"
canonical: /hoc-lap-trinh/thanh-thao-git-phan-6.html
thumbnail: thanh-thao-git.jpg
excerpt: Git checkout and git reset. Git proficiency series
seo_description: Git checkout and git reset. Git proficiency series
permalink: /hoc-lap-trinh/thanh-thao-git-phan-6.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

## Delete one or more modified files in the working directory 

{% highlight terminal %}
$ git checkout -- <The file name to be discard the change>
{% endhighlight %}

The above command will delete all the changes you have added to that file.

The above command only applies to files that are not in the staging area. 

## Move one or more files from the Staging area to the Working directory

In fact, after you do git add to add files and staging areas, but you feel uncomfortable and want to move those files back to the working directory.

You can do the following:

{% highlight terminal %}
$ git reset <file name>
{% endhighlight %}

## Edit and manipulate committed files

There are 3 options for us:

\- Git reset \--soft <to commit>

\- Git reset \--mixed <to commit>

\- Git reset \--hard <to commit>

For example:

{% highlight terminal %}
$ Git reset --soft 7d6fe403d0ec58ed1add3076bb7f9197717c27ca
{% endhighlight %}

The above command will redirect the commit with the above id to staging area status.

The same goes for **\--mixed** and **\--hard** which will return the commit to the staging area or delete the commit as well.

<p class="danger">Note when using <strong>--hard</strong> if not careful will lose data.</p>

This part pauses here.

I wish you happy learning. 