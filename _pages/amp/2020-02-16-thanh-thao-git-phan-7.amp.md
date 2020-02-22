---
layout: amp
comments: true
date: 2020-02-16
title: "Proficiency in Git part 7"
canonical: /hoc-lap-trinh/thanh-thao-git-phan-7.html
thumbnail: thanh-thao-git.jpg
excerpt: Git revert. Git proficiency series
seo_description: Git revert. Git proficiency series
permalink: /hoc-lap-trinh/thanh-thao-git-phan-7.amp.html
author: Nam Truong
category: Learn programming
tag:
 - Git
---

## Revert all file changes of a commit

Use the **Git log** to view the commit history:

{% highlight terminal %}
$ git log
commit 50ef5484c2b98d06600f75b819105dc9b4cefa6b (HEAD -> source)
Author: namtruongdev <namtruongdev@gmail.com>
Date:   Sun Jan 26 21:53:28 2020 -0500

    update

commit 7d6fe403d0ec58ed1add3076bb7f9197717c27ca
Author: namtruongdev <namtruongdev@gmail.com>
Date:   Sun Jan 26 09:57:42 2020 -0500
{% endhighlight %}

Finally, we will retrieve the commit you want to revert and issue the command **git revert**:

{% highlight terminal %}
$ git revert 50ef5484c2b98d06600f75b819105dc9b4cefa6b
{% endhighlight %}

All changes to the files of the above commit will be reverted back to the original file.

<p class="warning">Limit <strong>git revert</strong> as much as possible.</p>
