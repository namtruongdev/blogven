---
layout: amp
comments: true
date: 2019-02-06
canonical: /linux/huong-dan-hack-tai-khoan-facebook-voi-ngrok-va-setoolkit.html
thumbnail: hack-facebook-cover.jpg
title: Instructions for hacking Facebook accounts with Ngrok and SEtoolkit
author: Nam Truong
excerpt: This is the first technique in your Hacktips series, this guide makes it possible to hack any social account
seo_description: This is the first technique in your Hacktips series, this guide makes it possible to hack any social account
permalink: /linux/huong-dan-hack-tai-khoan-facebook-voi-ngrok-va-setoolkit.amp.html
category: Linux
tag:
 - Hack Facebook account
---

<ol class="danger">
	<li>Everything in this post is educational only.</li>
	<li>I will not be responsible if you use them to violate the law.</li>
</ol>

<p class="first-letter"><strong>Hello everyone, today I will guide you to hack any account with SEtookit and Ngrok extremely simple. In this article, I show you how to do it on the Linux operating system, so the requirement is that your computer must have any distro of Linux installed. For example: I am using Kali linux to guide you.</strong></p>

If you do not know what the Linux operating system is, please stop reading this article to learn and install it first.

You can refer to the Kali linux Operating System <a rel="noopener" title="https://kali.org" target="_blank" href="https://kali.org">here</a>.

<amp-img src="{{ site.url }}/assets/img/kali-linux.jpg" alt="{{ page.title }} - Ảnh 1" layout="responsive" width="640" height="361"></amp-img>

## Attack outside the Internet

I often get questions like: *Why can't I use Metasploit outside of LAN? , What if you want to attack a target outside the Internet?...* And the general answer to this problem is Port Foward (port redirection). Why is port redirection needed to reach targets outside the internet?

Understandably, Port Forward means port redirection of service. In a LAN, computers with the same network layer do not have to redirect. In addition to the Internet, which means going through a router, Port forward is a feature of the router that allows us to configure redirection of data from outside the Internet to the IP address of a device in the LAN.

<amp-img src="{{ site.url }}/assets/img/hack-facebook-1.jpg" alt="{{ page.title }} - Ảnh 2" layout="responsive" width="599" height="229"></amp-img>

For example, imagine that if you're in the house, room A (device A) wants to find room B (device B), it's simple, not having to go through the main door (router). As for outsiders (Internet) who want to find Mr. A, they must definitely go through the main door, if we do not set up Port forward, it will be considered as a closed door. And setting Port forward as a sign, Mr. A's room number is 192.168.1.105, so the customer who went to find the room has the same number. But if I can't find it, it's because the signage is wrong.

So in summary we have 2 problems, in order for data outside the internet to request to our device, we must configure the port forward and configure the correct IP address of the device.

## Ngrok Tunnel - Port Forward's solution

For different routers, the configuration of Port forward is also different, and in addition, you need to have access to configure it. That's annoying, so we have to find a more convenient solution. And the answer is Ngrok. Can understand ngrok is a way to replace the Port forward function of the router.

Ngrok is a reverse proxy that allows internet users outside your network to access your localhost. Because it stands in the middle of the connection, it can record parameters and support you many other intervention functions such as analysis, log, repeate request ... Ngork is written in Go. Currently, the ngrok homepage provides us with a lot of Plan for different needs, but we only need to use the Free package. Because Ngrok is written in Go, it can compile for many different operating systems.

## What to use SEtoolkit for?

Ngrok helps you out of the Lan network, we need to have something more to store. To do this, you can use <a rel="noopener" target="_blank" title="https://github.com/trustedsec/social-engineer-toolkit" href="https://github.com/trustedsec/social-engineer-toolkit">Setoolkit</a> (Social Engineering Toolkit), developed by Dave kennedy <a rel="noopener" title="https://twitter.com/hackingdave" target="_blank" href="https://twitter.com/hackingdave">@hackingdave</a>. Host your phishing pages using Apache & php. If you don't want to do complicated things, then you will try this great automated tool called <a rel="noopener" title="https://github.com/UndeadSec/SocialFish" target="_blank" href="https://github.com/UndeadSec/SocialFish">SocialPhish</a>. I got straight to the point. By the way, this attack is Social Phishing. So once you do the above, you can only have 50% of success in your hand because it needs soft skills. I give you a qoute:

<p style="text-align: center; font-style: italic;">"To become a good programmer, hard skills are not enough."</p>

The soft skill here is how you have to communicate to make Victim (the target) believe and follow you. Then you can carry out your evil intentions next.

### Step 1. Download and register for an account

You access and download Ngrok <a rel="noopener" target="_blank" title="https://ngrok.com/download" href="https://ngrok.com/download">here</a>.

<amp-img src="{{ site.url }}/assets/img/hack-facebook-3.jpg" alt="{{ page.title }} - Ảnh 3" layout="responsive" width="760" height="408"></amp-img>

As mentioned above, depending on the operating system, there are different executable files. Here I use **Kali Linux 64bit** so I will choose **Download for Linux** (It is recommended already).

### Step 2. Extract the File

After downloading will be File named **ngrok-stable-linux-amd64.zip**. Please extract it.

Next we get the ngrok file. Please copy it to this link: **/usr/bin**.

Step 3. Practice

Alright, follow me. You open Terminal and then type:

{% highlight terminal %}
$ ngrok
{% endhighlight %}

We will open a Tunnel into port 80 to run SEtoolkit:

{% highlight terminal %}
$ ngrok http 80
{% endhighlight %}

Continue to SEtoolkit again is complete, this is already integrated on Linux Kali then should not have to install anything. You open a further Terminal Tab and then type the following command:

{% highlight terminal %}
$ sudo setoolkit
{% endhighlight %}

Enter your password to grant root access.

Select 1) **Social – Engineering Attacks**. Command:

{% highlight terminal %}
$ set>1
{% endhighlight %}

Select 2) **Website Attack Vectors**. Command:

{% highlight terminal %}
$ set>2
{% endhighlight %}

Select 3) **Credential Browser Exploit Method**. Command:

{% highlight terminal %}
$ set>3
{% endhighlight %}

Select **2) Site Cloner**. Command:

{% highlight terminal %}
$ set:webattack>2
{% endhighlight %}

Then you go back to that Terminal Tab. You look up the **Forwarding** line . Then copy the Ngrok website that we created randomly to us.

For example: Mine is **7f5e136c.ngrok.io** then I copy it and paste it into the other terminal as shown below

<amp-img src="{{ site.url }}/assets/img/hack-facebook-4-min.jpg" alt="{{ page.title }} - Ảnh 4" layout="responsive" width="600" height="512"></amp-img>

Come on, it's almost done 😃😃. At this step, you enter the website you want to fake on your own.

For example, if I want to hack my Facebook account, I would type in: **https://www.facebook.com**. (see image below)

<amp-img src="{{ site.url }}/assets/img/hack-facebook-5-min.jpg" alt="{{ page.title }} - Ảnh 5" layout="responsive" width="600" height="208"></amp-img>

Already. Done, now you go to the link shortened page such as <a rel="noopener" href="https://bitly.com" title="https://bitly.com" target="_blank">bit.ly</a>:

The purpose of this work is to create beautiful links to avoid being suspected.

### The end

Now take that link to reach Victim. Generally convince it how to put it on that link to login. Whether it succeeds or not is up to you. You have good soft skills are good.

And the problem of knowing Victim on your Website or not, you go back to the Terminal SEtoolkit tab just now to see. Remember not to turn off any Tab. Each link only exists within 7 hours. After 7 hours the link will die or you close all the Terminal it will also turn off.

<amp-img src="{{ site.url }}/assets/img/hack-facebook-6.jpg" alt="{{ page.title }} - Ảnh 6" layout="responsive" width="600" height="208"></amp-img>

If Victim sticks, you will get the same result. hi 😝

I wish you success!