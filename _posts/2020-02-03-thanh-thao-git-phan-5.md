---
layout: post
comments: true
title: "Proficiency in Git part 5"
thumbnail: thanh-thao-git.jpg
excerpt: Branching & Merging. Git proficiency series
seo_description: Branching & Merging. Git proficiency series
permalink: /hoc-lap-trinh/:title.html
amp: /hoc-lap-trinh/thanh-thao-git-phan-5.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

## Branching

### When is branching usually used?

\- In fact, when you were working, suddenly the boss called the project report with bugs and needed to fix it immediately. 

\- You have a new feature and want to test it very carefully before incorporating it into the main project.

\- You want to do something that does not want to involve the main branch (master).

### Performing Branching

For example, your blog needs to add comments feature below the article. You will create a new branch called **feature/comments**.

{% highlight terminal %}
$ git checkout -b feature/comments
{% endhighlight %}

The above command will create a new branch and switch to that branch to work.

Type the command **git branch** to see the current branch and branch are working. The working branch will have an asterisk **(*)** in front of it:

{% highlight terminal %}
$ git branch
master
* feature/comments
{% endhighlight %}

 To switch back to the **master** branch, type the command **git checkout**: 

{% highlight terminal %}
$ git checkout master
Switched to branch 'master'
{% endhighlight %}

## Merging

After you are sure of your changes in the **feature/comments** branch. You can pull any changes in this branch to the **master** branch using **git merge**.

<p class="warning">Note that you must switch back to the <strong>master</strong> branch before merging the <strong>feature/comments</strong> branch.</p>

{% highlight terminal %}
$ git checkout master
Switched to branch 'master'
$ git merge feature/comments
{% endhighlight %}

After successfully merging, the **feature/comments** branch becomes redundant, you can delete it with the following command:

{% highlight terminal %}
$ git branch -d feature/comments
{% endhighlight %}

This part I would like to pause here. In the next part, I will talk about **git reset**.

I wish you happy learning. 