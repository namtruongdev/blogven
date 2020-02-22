---
layout: amp
comments: true
date: 2020-02-18
title: "Teamwork via Git"
canonical: /hoc-lap-trinh/lam-viec-nhom-qua-git.html
thumbnail: thanh-thao-git.jpg
excerpt: How to teamwork with many people via Git. Git proficient series
seo_description: How to teamwork with many people via Git. Git proficient series
permalink: /hoc-lap-trinh/lam-viec-nhom-qua-git.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

You can understand a teamwork process through Git using my example. 

<p class="warning">Note: If you do not have basic knowledge of git and do not understand what this article says, please review the previous articles about your git.</p>

Example: You are assigned to fix bugs **iss53** for a company project and another person fixes another bug in the project. So how can two people code together quickly and conveniently?

To make it easy to understand, I will specify the names of the two people are A and B.

When A fixes bugs **iss53**, according to the process A will have to create a new branch. 

{% highlight terminal %}
$ git checkout -b iss53
Switched to a new branch "iss53"
{% endhighlight %}

Now the main branch of the company looks like this:

<amp-img src="{{ site.url }}/assets/img/lam-viec-nhom-git-1.png" alt="{{ page.title }} - Ảnh 1" layout="responsive" width="500" height="244"></amp-img>

Person A does something and makes a commit on the **iss53** branch.

{% highlight terminal %}
$ git commit -a -m 'added a new footer [issue 53]'
{% endhighlight %}

<amp-img src="{{ site.url }}/assets/img/lam-viec-nhom-git-2.png" alt="{{ page.title }} - Ảnh 2" layout="responsive" width="500" height="180"></amp-img>

Somewhere else, Person B does the same thing that Person A did to create a new branch named **hotfix** and do something and then create a commit on the **hotfix** branch.

{% highlight terminal %}
$ git checkout -b hotfix
Switched to a new branch 'hotfix'
$ vim index.html
$ git commit -a -m 'fixed the broken email address'
[hotfix 1fb7853] fixed the broken email address
 1 file changed, 2 insertions(+)
{% endhighlight %}

<amp-img src="{{ site.url }}/assets/img/lam-viec-nhom-git-3.png" alt="{{ page.title }} - Ảnh 3" layout="responsive" width="500" height="239"></amp-img>

After thoroughly checking their patches, person B decided to merge the **hotfix** branch with the company's main branch by running the **git merge** command and then using **git push** to push it onto the git server of the company.

{% highlight terminal %}
$ git checkout master
$ git merge hotfix
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
$ git push
{% endhighlight %}

Now the main branch of your company will look like this:

<amp-img src="{{ site.url }}/assets/img/lam-viec-nhom-git-4.png" alt="{{ page.title }} - Ảnh 4" layout="responsive" width="500" height="300"></amp-img>

Once the merge is complete, you can delete that branch because it's not important right now.

{% highlight terminal %}
$ git branch -d hotfix
Deleted branch hotfix (3a0874c).
{% endhighlight %}

Now go back to person A, because person B has done their work and has pushed it onto the company's git server so person A needs to use **git pull** to pull the code back:

{% highlight terminal %}
$ git checkout master
Switched to branch 'master'
$ git pull
{% endhighlight %}

Then move on to the **iss53** branch and use the **git rebase** command to merge the **master** branch into the **iss53** branch and continue the work and make another commit on the **iss53** branch:

{% highlight terminal %}
$ git checkout iss53
Switched to branch 'iss53'
$ git rebase master
$ git commit -a -m 'finished the new footer [issue 53]'
[iss53 ad82d7a] finished the new footer [issue 53]
1 file changed, 1 insertion(+)
{% endhighlight %}

<amp-img src="{{ site.url }}/assets/img/lam-viec-nhom-git-5.png" alt="{{ page.title }} - Ảnh 5" layout="responsive" width="500" height="238"></amp-img>

Suppose that person A decides that the work on **iss53** branch is completed. Person A will checkout the **master** branch and use the **git rebase** command to merge the **iss53** branch with the **master** branch:

{% highlight terminal %}
$ git checkout master
Switched to branch 'master'
$ git rebase iss53
{% endhighlight %}

And finally delete the **iss53** branch:

{% highlight terminal %}
$ git branch -d iss53
{% endhighlight %}

Finally, push the code to the company's git server:

{% highlight terminal %}
$ git push
{% endhighlight %}

Good. So you've learned how to work in groups with others.