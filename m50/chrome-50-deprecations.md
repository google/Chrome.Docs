---
layout: updates/post
title: "API Deprecations and Removals in Chrome 50"
description: "An round up of the deprecations and API removals in Chrome to help you plan."
published_on: 
updated_on: 
authors:
  - paulkinlan
  - josephmedley
tags:
  - deprecations
---

In nearly every version of Chrome we see a significant number of updates and
improvements to the product, its performance, and also capabilities of the web
platform.

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

In Chrome 50 (Estimated beta date: March 10 to 17) there are a number of changes to Chrome. 
This list is subject to change at any time.

**TL;DR:** 

[Intent to Remove]()
[Chromestatus Tracker]()
[Chromium Bug]()

## subresource Attribute Removed from link

**TL;DR:** Remove support for the "subresource" rel of HTMLLinkElement.

[Intent to Remove](https://groups.google.com/a/chromium.org/forum/#!searchin/blink-dev/subresource/blink-dev/Y_2eFRh9BOs/gULYapoRBwAJ) 
[Chromestatus Tracker](https://www.chromestatus.com/features/6596598008119296) 
[Chromium Bug](https://code.google.com/p/chromium/issues/detail?id=581840)

The intent of the `subresource` atttribute on &lt;link&gt; was to prefetch a resource during a browser's idle time. After a browser downloaaded a page, it could then pre-download resources such as other pages so that when they were requested by users, they could simply be retrieved from the browser cache.

The `subresource` attribute suffered from a number of problems. First, it never worked as intended. Referenced resources were downloaded with low priority. The attribute was never implemented on any browser other than Chrome. The Chrome implementation had a bug that caused resources to be downloaded twice.

## Remove -webkit-background-composite Property

**TL;DR:** Remove support for the `-webkit-background-composite` property as it is non-standard and only supported by WebKit and Blink.

[Intent to Remove]() 
[Chromestatus Tracker](https://www.chromestatus.com/feature/6607299456008192) 
[Chromium Bug](https://code.google.com/p/chromium/issues/detail?id=498588)

The `-webkit-background-composite` property was intended to control the compositing style for background images and color in the padding area of an element. One value extended the background into the padding. The other value did not. 

## Remove Insecure TLS Version Fallback

**TL;DR:** Remove a mechanism for forcing servers to return data using less or non secure versions of TLS.

[Intent to Remove](https://groups.google.com/a/chromium.org/forum/#!searchin/blink-dev/Insecure$20TLS/blink-dev/yz1lU9YTeys/yCsK50I3CQAJ) 
[Chromestatus Tracker](https://www.chromestatus.com/feature/5685183936200704) 
[Chromium Bug](https://code.google.com/p/chromium/issues/detail?id=583787)

Transport layer security (TLS) supports a mechanism for negotiating versions, allowing for the introduction of new TLS versions without breaking compatibility. Some servers implemented this in such a way that browsers were required to use insecure endpoints as a fallback. Because of this, attackers could force _any_ web site, not just that are incorrectly configured, to negotiate for weaker versions of TLS. 

## Remove KeyboardEvent.prototype.keyLocation

**TL;DR:** Remove an unneeded alisas for the `Keyboard.prototype.location` attribute.

[Intent to Remove](https://groups.google.com/a/chromium.org/forum/#!searchin/blink-dev/keylocation/blink-dev/lqknEaUYCJM/UbNahDDMAwAJ) 
[Chromestatus Tracker](https://www.chromestatus.com/features/4997403308457984) 
[Chromium Bug](https://code.google.com/p/chromium/issues/detail?id=568261)

This attribute is simply an alias to the `Keyboard.prototype.location` attribute, which allows disambiguation between keys that are located multiple places on a keyboard. For example, both attributes allow developers to distinguish between the two `Enter` keys on an extended keybaoard.

## Error and Success Handlers Required in RTCPeerConnection Methods

**TL;DR:** The [WebRTC](http://www.html5rocks.com/en/tutorials/webrtc/basics/)
RTCPeerConnection methods [`createOffer()`](https://w3c.github.io/webrtc-pc/#widl-RTCPeerConnection-createOffer-Promise-RTCSessionDescription--RTCOfferOptions-options)
and [`createAnswer()`](https://w3c.github.io/webrtc-pc/#widl-RTCPeerConnection-createAnswer-Promise-RTCSessionDescription--RTCAnswerOptions-options)
now require an error handler as well as a success handler. Previously it had 
been possible to call these methods with only a success handler. That usage is
deprecated.

In Chrome 49 we've also added a warning if you call 
[`setLocalDescription()`](https://w3c.github.io/webrtc-pc/#widl-RTCPeerConnection-setLocalDescription-Promise-void--RTCSessionDescriptionInit-description) 
or [`setRemoteDescription()`](https://w3c.github.io/webrtc-pc/#widl-RTCPeerConnection-setRemoteDescription-Promise-void--RTCSessionDescriptionInit-description)
without supplying an error handler. The error handler argument is mandatory as of Chrome 50.

This is part of clearing the way for introducing promises on these methods, 
as required by the [WebRTC spec](https://w3c.github.io/webrtc-pc/).

Here's an example from the WebRTC
[RTCPeerConnection demo](https://webrtc.github.io/samples/src/content/peerconnection/pc1/)
([main.js, line 126](https://github.com/webrtc/samples/blob/gh-pages/src/content/peerconnection/pc1/js/main.js#L126)):

{% highlight javascript %}
function onCreateOfferSuccess(desc) {
  pc1.setLocalDescription(desc, function() {
     onSetLocalSuccess(pc1);
  }, onSetSessionDescriptionError);
  pc2.setRemoteDescription(desc, function() {
    onSetRemoteSuccess(pc2);
  }, onSetSessionDescriptionError);
  pc2.createAnswer(onCreateAnswerSuccess, onCreateSessionDescriptionError);
}
{% endhighlight %}

Note that both `setLocalDescription()` and `setRemoteDescription()` have an error
handler. Older browsers expecting only a success handler will simply ignore the
error handler argument if it's present; calling this code in an older browser
will not cause an exception.

In general, for production WebRTC applications we recommend that you use
[`adapter.js`](https://github.com/webrtc/adapter),  a shim, maintained by the
WebRTC project, to insulate apps from spec changes and prefix differences.

## The XMLHttpRequestProgressEvent is No Longer Supported

**TL;DR:** The `XMLHttpRequestProgressEvent` interface will be removed, together with the attributes `position` and `totalSize`. 

[Intent to Remove](https://groups.google.com/a/chromium.org/d/topic/blink-dev/nsLnqT__I78/discussion) 
[Chromestatus Tracker](https://www.chromestatus.com/features/5044837464145920) 
[Chromium Bug](https://code.google.com/p/chromium/issues/detail?id=357112)

This event existed to support the Gecko compatibility properties `position` and `totalSize`. Support for all three was dropped in Mozilla 22 and the functionality has long been superceded by the [`ProgressEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent).
