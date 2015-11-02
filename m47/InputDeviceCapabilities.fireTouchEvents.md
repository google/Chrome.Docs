# InputDeviceCapabilities.fireTouchEvents

The **`InputDeviceCapabilities.fireTouchEvents`** read-only property returns a {{jsxref("Boolean")}} that indicates whether the device dispatches touch events.

You can use this property to detect mouse events that represent an action that may already have been handled by touch event handlers. This doesn't necessarily mean the device is a touch screen. For example, stylus and mouse devices typically generate touch events on mobile browsers.

## Syntax

`var boolean = InputDeviceCapabilities.fireTouchEvents`

## Specifications

http://rbyers.github.io/InputDevice/index.html#dom-inputdevicecapabilities-firestouchevents
