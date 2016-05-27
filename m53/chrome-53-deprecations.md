---
layout: updates/post
title: "API Deprecations in Chrome 53"
description: "A round up of the deprecations in Chrome to help you plan."
published_on: 
updated_on: 
authors:
  - josephmedley
tags:
  - deprecations
  - chrome53
featured_image: /web/updates/images/2016/04/chrome-51-deprecations/deps-removes.png
---

<p class="intro">
In nearly every version of Chrome we see a significant number of updates and
improvements to the product, its performance, and also capabilities of the web
platform. This article describes the changes in Chrome 53, which is estimated to
be in betas between July 28 and August 4. This list is subject to change at any
time.
</p>

{% include shared/toc.liquid %}

## Deprecation policy

To keep the platform healthy we sometimes remove APIs from the Web Platform which
have run their course.  There can be many reasons why we would remove an API, such
as: they are superseded by newer APIs, are updated to reflect changes to
specifications, to bring alignment and conistency with other browsers, or they are
early experiments that never came to fruition in other browsers and thus 
can increase the burden of support for web developers.

Some of these changes might have an effect on a very small number of sites and
to mitigate issues ahead of time we try to give developers advanced notice so
that if needed they can make the required changes to keep their sites running.

Chrome currently has a
[process for deprecations and removals of API's](http://www.chromium.org/blink#TOC-Launch-Process:-Deprecation)
and the TL;DR is:

* Announce on blink-dev
* Set warnings and give time scales in the developer console of the browser when
  usage is detected on a page
* Wait, monitor and then remove feature as usage drops

You can find a list of all deprecated features in
[chromestatus.com using the deprecated filter](https://www.chromestatus.com/features#deprecated)
and removed features by applying the
[removed filter](https://www.chromestatus.com/features#removed). We will also 
try to summarize some of the changes, reasoning, and migration paths in 
these posts.

## Remove results attribute for <input type=search>

**TL;DR:** The `result` attribute is being re,pved because it's not part of any standard and is inconsistently implemented across browsers.

[Intent to Remove](https://groups.google.com/a/chromium.org/d/topic/blink-dev/8fHsOWz1XEw/discussion) &#124;
[Chromestatus Tracker](https://www.chromestatus.com/feature/5738199536107520) &#124;
[Chromium Bug](https://code.google.com/p/chromium/issues/detail?id=590117) 

The `results` value is not implemented on most browsers and behaves highly inconsistently on those that do. For example, Chrome adds a magnifier icon to the input box, while on Safari desktop, it controls how many submitted queries are shown in a popup shown by clicking the magnifier icon. Since this isn't part of any standard, it's being deprecated.

This attribute has been deprecated since Chrome 51.