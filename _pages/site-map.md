---
layout: page
title: Blog sitemap
author: Nam Truong
date_modified: 22-01-2020
thumbnail: rules.jpg
excerpt: Lap Trinh Ban Than blog sitemap
seo_description: Lap Trinh Ban Than blog sitemap
permalink: /site-map.html
---

## Lập trình bản thân blog sitemap

### Categories

{% for category in site.data.categories %}
\- <a title="{{ category.name }}" href="{{ site.url }}/{{ category.slug }}">{{ category.name }}</a>
{% endfor %}

### Tools

{% for tool in site.data.tools %}
\- <a title="{{ category.description }}" href="{{ site.url }}/{{ tool.slug }}">{{ tool.name }}</a>
{% endfor %}

### Archives

{% for archive in site.data.archives %}
\- <a title="{{ archive.description }}" href="{{ site.url }}/{{ archive.slug }}">{{ archive.name }}</a>
{% endfor %}

### Keywords

{% for keyword in site.data.tags %}
\- <a title="{{ keyword.name }}" href="{{ site.url }}/{{ keyword.slug }}">{{ keyword.name }}</a>
{% endfor %}

### Pages

{% for page in site.pages %}
{% if page.layout == 'page' %}
\- <a title="{{ page.title }}" href="{{ site.url }}{{ page.url }}">{{ page.title }}</a>
{% endif %}
{% endfor %}

### Posts

{% for post in site.posts %}
\- <a title="{{ post.title }}" href="{{ site.url }}{{ post.url }}">{{ post.title }} ({% if post.date_modified %}{{ post.date_modified | date: "%d-%m-%Y" }}{% else %}{{ post.date | date: "%d-%m-%Y" }}{% endif %})</a>
{% endfor %}

