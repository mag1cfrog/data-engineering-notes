---
layout: default
title: "Spark Tuning Notes"
---

# Spark Tuning Notes

Welcome to my Spark tuning blog. Here you’ll find lessons learned while optimizing Apache Spark jobs.

## Recent Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) - *{{ post.date | date: "%B %d, %Y" }}*
{% endfor %}