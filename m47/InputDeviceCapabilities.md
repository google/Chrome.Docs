# InputDeviceCapabilities

The `InputDeviceCapabilities` interface provides information about the physical device or a group of related devices responsible for generating a input events. Events caused by the same physical input device will get the same [sourceCapabilities](UIEvent.sourceCapabilities.md) object, but the converse isn't true. For example, two mice with the same capabilities in a system may appear as a single `InputDeviceCapabilities` instance.

In some instances `InputDeviceCapabilities` represents the capabilities of logical devices rather than physical devices. This allows, for example, touchscreen keyboards and physical keyboards to be represented the same way when they produce the same input.

## Constructors

[InputDeviceCapabilities()](InputDeviceCapabilities_Constructor.md)

## Properties

<dl>
  <dt>InputDeviceCapabilities.fireTouchEvents</dt>
  <dd>Indicates whether the device dispatches touch events.</dd>
</dl>

## Methods

None.

## Specifications

<http://rbyers.github.io/InputDevice/index.html#the-inputdevicecapabilities-interface>
