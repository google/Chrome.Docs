# UIEvent.sourceCapabilities

The `UIEvent.sourceCapabilities` read-only property returns an instance of the [InputDeviceCapabilities](InputDeviceCapabilities.md) interface which provides information about the physical device responsible for generating a touch event. If no input device was responsible for the event, it returns `null`.

When a single user interaction with an input device generates a series of different input events, the `sourceCapabilities` property for all of them will point to the same instance of [InputDeviceCapabilities](InputDeviceCapabilities.md). For example, when a user lifts their finger off of a touchscreen, several UIEvents may be generated including touchend, mousedown, click, and focus. All of these events must have the same sourceCapabilities representing the touchscreen.

<div class="note">
<p>A device is considered "responsible" for an event only when that interaction is part of the abstraction provided by the web platform. For example, many user agents allow a window to be resized with a mouse or a keyboard, but this detail is not exposed to the web platform in any way and so the sourceCapabilities of a resize event will typically be null.</p>
</div>

## Syntax

`var iDC = event.sourceCapabilities`

### Value

An instance of [InputDeviceCapabilities](InputDeviceCapabilities.md). 

## Example

TBD

## Specifications

<http://rbyers.github.io/InputDevice/index.html>
