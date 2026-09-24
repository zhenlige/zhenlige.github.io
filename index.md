---
title: 主页
layout: home
---

这里是博客的主页。

## 分类
{% for i in site.categories %}
- [{{ i | first }}](/blog/category/{{ i | first | slugify }}) ({{ i | last | size }})
{% endfor %}

## 标签
{% for i in site.tags %}
- [{{ i | first }}](/blog/tag/{{ i | first | slugify }}) ({{ i | last | size }})
{% endfor %}