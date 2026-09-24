---
title: 主页
---

这里是博客的主页。

## 分类
{% for i in site.categories %}
- [{{ i | first }}](/categories/{{ i | first | slugify }}) ({{ i | last | size }})
{% endfor %}

## 标签
{% for i in site.tags %}
- [{{ i | first }}](/tags/{{ i | first | slugify }}) ({{ i | last | size }})
{% endfor %}